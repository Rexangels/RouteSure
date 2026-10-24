# Backend test guide

Run from the repository root:

```bash
python -m venv .venv
# Windows PowerShell: .venv\\Scripts\\Activate.ps1
# macOS/Linux: source .venv/bin/activate
pip install -r backend/requirements-dev.txt
cd backend
pytest
```

The tests use synthetic responses and monkeypatch the provider adapter. They must not require a real NIPOST API key or make external requests. Add provider contract tests only after the official API contract is confirmed; keep those tests opt-in and use approved sandbox credentials.
