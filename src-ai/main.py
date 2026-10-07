from fastapi import FastAPI

app = FastAPI(
    title="Read.io AI Service",
    description="Python AI layer for NLP, RAG, and LLM orchestration",
    version="0.1.0"
)

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "read-io-ai"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
