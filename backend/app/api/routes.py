from fastapi import APIRouter, HTTPException, Query
import httpx
from app.services.postcode_service import NipostPostcodeService, PostcodeProviderError

router = APIRouter()
service = NipostPostcodeService()

@router.get("/search/autocomplete")
async def autocomplete(q: str = Query(min_length=2, max_length=120)):
    try:
        return await service.autocomplete(q.strip())
    except PostcodeProviderError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=502, detail="Postcode provider request failed") from exc

@router.get("/lookup")
async def lookup(code: str = Query(min_length=2, max_length=32), level: int = Query(default=1, ge=1, le=5)):
    try:
        return await service.lookup(code.strip(), level)
    except PostcodeProviderError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=502, detail="Postcode provider request failed") from exc
