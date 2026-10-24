import httpx
from app.settings import settings

class PostcodeProviderError(RuntimeError):
    pass

class NipostPostcodeService:
    """Thin adapter around the official NIPOST postcode API.

    Confirm endpoint paths and response schemas against the provider's current
    documentation before production use; this adapter intentionally avoids
    guessing or fabricating postcode results.
    """
    def __init__(self) -> None:
        self.base_url = settings.nipost_api_base_url.rstrip("/")

    def _headers(self) -> dict[str, str]:
        if not settings.nipost_api_key:
            raise PostcodeProviderError("NIPOST API key is not configured")
        return {"X-API-Key": settings.nipost_api_key, "Accept": "application/json"}

    async def autocomplete(self, query: str) -> dict:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.get(f"{self.base_url}/v1/search/autocomplete", params={"q": query}, headers=self._headers())
            response.raise_for_status()
            return response.json()

    async def lookup(self, code: str, level: int = 1) -> dict:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.get(f"{self.base_url}/v1/lookup", params={"code": code, "level": level}, headers=self._headers())
            response.raise_for_status()
            return response.json()
