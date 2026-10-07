.PHONY: setup db-up db-down db-push server-dev ai-dev app-dev dev help

# Default target
help:
	@echo "Read.io Makefile Commands"
	@echo "-------------------------"
	@echo "make setup       - Install dependencies for all layers"
	@echo "make db-up       - Start the PostgreSQL database using Docker"
	@echo "make db-down     - Stop the PostgreSQL database"
	@echo "make db-push     - Push the Prisma schema to the database"
	@echo "make server-dev  - Start the TypeScript server (Port 4000)"
	@echo "make ai-dev      - Start the Python AI service (Port 8000)"
	@echo "make app-dev     - Start the React + Tauri desktop app"
	@echo "make dev         - Start everything concurrently in one terminal"

setup:
	npm install
	cd src-ai && if [ ! -d ".venv" ]; then python3 -m venv .venv; fi
	cd src-ai && .venv/bin/pip install -r requirements.txt

db-up:
	docker compose up -d

db-down:
	docker compose down

db-push:
	npx prisma db push

server-dev:
	npm run server:dev

ai-dev:
	cd src-ai && .venv/bin/python main.py

app-dev:
	npm run tauri dev

# Start all services concurrently
dev: db-up db-push
	npx concurrently "make server-dev" "make ai-dev" "make app-dev" -n "SERVER,AI,APP" -c "blue,green,magenta"
