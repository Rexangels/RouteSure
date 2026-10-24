from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "RouteSure API"
    app_env: str = "development"
    api_prefix: str = "/v1"
    web_origins: str = "http://localhost:5173"
    nipost_api_base_url: str = "https://api.postcode.gov.ng"
    nipost_api_key: str = ""

    @property
    def allowed_web_origins(self) -> list[str]:
        return [origin.strip() for origin in self.web_origins.split(",") if origin.strip()]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
