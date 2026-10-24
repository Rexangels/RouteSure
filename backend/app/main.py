from fastapi import FastAPI
from app.settings import settings
from app.api.routes import router

app = FastAPI(title=settings.app_name, version="0.1.0")
app.include_router(router, prefix=settings.api_prefix)

@app.get("/health", tags=["health"])
async def health():
    return {"status": "ok", "service": settings.app_name}
