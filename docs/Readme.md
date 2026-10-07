┌──────────────────────────────────────────┐
│  My Library     Read.io                  │
├────────────┬─────────────────────────────┤
│            │                             │
│ Books      │        BOOK READER          │
│            │                             │
│ 📕 OS      │  Virtual memory allows...   │
│ 📕 Python  │                             │
│ 📕 Rust    │  [select text]             │
│            │                             │
│            ├─────────────────────────────┤
│            │ AI                          │
│            │                             │
│            │ Explain this concept        │
│            │                             │
│            │ "Virtual memory is..."      │
│            │                             │
│            │ [Simpler] [Example] [Quiz]  │
└────────────┴─────────────────────────────┘





                PDF
                 │
                 ▼
          Document Parser
                 │
                 ▼
          Chapter Detection
                 │
                 ▼
         Semantic Chunking
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
   Embeddings          NLP Extraction
       │                   │
       ▼                   ▼
   Vector DB          Concepts
                           │
                           ▼
                     Relationships
                           │
                           ▼
                    Knowledge Graph



                                     BOOK
                  │
          ┌───────┴────────┐
          ▼                ▼
       Content          Structure
          │                │
          ▼                ▼
      Embeddings        Chapters
          │                │
          ▼                ▼
       Semantic         Sections
       Retrieval
          │
          └───────┬────────┘
                  ▼
             CONCEPTS
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   Definition  Related   Prerequisite
                         │
                         ▼
                  Knowledge Graph
                         │
                         ▼
                   AI Tutor

Frontend
──────────────
React
TypeScript
Tailwind
shadcn/ui
Zustand

Desktop
──────────────
Tauri 2
Rust

──────────────
postgres 18 with vector db docker
prisma

AI/NLP
──────────────
Python
FastAPI
LlamaIndex
Sentence Transformers
Ollama

RAG
──────────────
Qdrant
LangGraph
BM25
Hybrid Search
Reranking

AI
──────────────
Local LLM
+
Cloud LLM API

Documents
──────────────
PDF.js
EPUB
PyMuPDF




                    Read.io Desktop
                         │
              ┌──────────┴──────────┐
              │                     │
        React/TypeScript        Tauri/Rust
              │                     │
              │                     ├── Filesystem
              │                     ├── Native APIs
              │                     └── Desktop integration
              │
              ▼
        Backend / API
       Node.js + TypeScript
              │
          Prisma ORM
              │
              ▼
        PostgreSQL
              │
       ┌──────┴──────┐
       │             │
    pgvector       relational
       │             │
       └──────┬──────┘
              │
              ▼
         Python AI
              │
       ┌──────┼──────┐
       │      │      │
      NLP    RAG    LLM