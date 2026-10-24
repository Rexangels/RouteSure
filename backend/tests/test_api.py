import httpx
import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.api import routes
from app.services.postcode_service import PostcodeProviderError

client = TestClient(app)


def test_health_endpoint_reports_service_status():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["service"] == "RouteSure API"


def test_autocomplete_returns_provider_result(monkeypatch):
    expected = {"results": [{"label": "Wuse II, Abuja", "postcode": "900288"}]}
    async def fake_autocomplete(query: str):
        assert query == "Wuse II"
        return expected
    monkeypatch.setattr(routes.service, "autocomplete", fake_autocomplete)

    response = client.get("/v1/search/autocomplete", params={"q": "  Wuse II  "})
    assert response.status_code == 200
    assert response.json() == expected


def test_autocomplete_rejects_too_short_query():
    response = client.get("/v1/search/autocomplete", params={"q": "a"})
    assert response.status_code == 422


def test_autocomplete_requires_query():
    response = client.get("/v1/search/autocomplete")
    assert response.status_code == 422


def test_lookup_returns_provider_result(monkeypatch):
    expected = {"postcode": "900288", "level": 1, "valid": True}
    async def fake_lookup(code: str, level: int = 1):
        assert code == "900288"
        assert level == 1
        return expected
    monkeypatch.setattr(routes.service, "lookup", fake_lookup)

    response = client.get("/v1/lookup", params={"code": "900288", "level": 1})
    assert response.status_code == 200
    assert response.json() == expected


@pytest.mark.parametrize("params", [{"code": "x"}, {"code": "123", "level": 0}, {"code": "123", "level": 6}])
def test_lookup_rejects_invalid_parameters(params):
    response = client.get("/v1/lookup", params=params)
    assert response.status_code == 422


def test_missing_provider_configuration_maps_to_503(monkeypatch):
    async def no_credentials(query: str):
        raise PostcodeProviderError("NIPOST API key is not configured")
    monkeypatch.setattr(routes.service, "autocomplete", no_credentials)

    response = client.get("/v1/search/autocomplete", params={"q": "Abuja"})
    assert response.status_code == 503
    assert response.json()["detail"] == "NIPOST API key is not configured"


def test_provider_timeout_maps_to_502_without_upstream_details(monkeypatch):
    async def timeout(query: str):
        raise httpx.TimeoutException("private upstream detail")
    monkeypatch.setattr(routes.service, "autocomplete", timeout)

    response = client.get("/v1/search/autocomplete", params={"q": "Abuja"})
    assert response.status_code == 502
    assert response.json()["detail"] == "Postcode provider request failed"
    assert "private upstream detail" not in response.text
