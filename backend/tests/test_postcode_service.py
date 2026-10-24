import pytest
from app.services.postcode_service import NipostPostcodeService, PostcodeProviderError
from app import settings as settings_module


def test_provider_requires_api_key(monkeypatch):
    monkeypatch.setattr(settings_module.settings, "nipost_api_key", "")
    service = NipostPostcodeService()
    with pytest.raises(PostcodeProviderError, match="API key is not configured"):
        service._headers()


def test_provider_headers_keep_secret_server_side(monkeypatch):
    monkeypatch.setattr(settings_module.settings, "nipost_api_key", "test-only-secret")
    service = NipostPostcodeService()
    headers = service._headers()
    assert headers["X-API-Key"] == "test-only-secret"
    assert headers["Accept"] == "application/json"
