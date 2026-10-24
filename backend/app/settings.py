from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_name: str = "RouteSure API"
    app_env: str = "development"
    api_prefix: str = "/v1"
    nipost_api_base_url: str = "https://api.postcode.gov.ng"
    nipost_api_key: str = ""
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
