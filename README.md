# 🏦 Interbank — Sistema Core Bancario + Homebanking

Proyecto integrado: Core Financiero y Banca por Internet de Interbank.

## 📁 Estructura

| Carpeta | Descripción | Puerto |
|---|---|---|
| web_banck_core_andino_fastapi | Backend Core (FastAPI) | 8001 |
| web_back_homebanking_andino_fastapi | Backend Homebanking (FastAPI) | 8002 |
| web_front_core_andino_react | Frontend Core (React) | 5173 |
| web_front_homebanking_andino_react | Frontend Homebanking (React) | 5174 |
| web_bd_core_financiero_andino_postgresql | Scripts SQL PostgreSQL | - |

## 🚀 Cómo levantar

### Base de datos
1. Crear BD `bd_core_financiero` en PostgreSQL
2. Ejecutar scripts SQL del 00 al 06 en orden

### Backend Core
```bash
cd web_banck_core_andino_fastapi
python -m venv .venv
source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

### Backend Homebanking
```bash
cd web_back_homebanking_andino_fastapi
python -m venv .venv
source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8002
```

### Frontend Core
```bash
cd web_front_core_andino_react
npm install && npm run dev
```

### Frontend Homebanking
```bash
cd web_front_homebanking_andino_react
npm install && npm run dev
```

## 👤 Autor
**Jhefry Caleb Herrera Quispe** — Desarrollo de Aplicaciones Web 2026
