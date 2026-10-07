# Read.io Architecture & File Structure

This document defines the architectural file structure for **Read.io**, designed strictly according to **SOLID** and **DRY** (Don't Repeat Yourself) engineering principles.

---

## 🏛️ SOLID & DRY Principles Mapping

| Principle | Architectural Implementation |
| :--- | :--- |
| **S - Single Responsibility (SRP)** | Every component, hook, store, and service has one reason to change. UI primitives are separated from domain components; business state is isolated in Zustand stores; external I/O is encapsulated in services. |
| **O - Open/Closed (OCP)** | UI primitives use polymorphic Slot patterns and CVA variant maps that allow extending styles and behaviors without altering base components. Parsers and AI providers use pluggable adapter interfaces. |
| **L - Liskov Substitution (LSP)** | Document parsers (`PDFParser`, `EPUBParser`) and LLM clients (`OllamaClient`, `CloudLLMClient`) implement common interface contracts and are interchangeable across the pipeline. |
| **I - Interface Segregation (ISP)** | Granular TypeScript interfaces in `src/types/` (e.g. `IBook`, `IConcept`, `IReaderHighlight`, `IAITutorResponse`) prevent bloated type definitions and unused dependencies. |
| **D - Dependency Inversion (DIP)** | Components depend on abstracted custom hooks and service interfaces rather than raw Tauri IPC calls or direct network fetches. |
| **DRY (Don't Repeat Yourself)** | Reusable UI design system (`src/components/ui/`), centralized token management (`src/index.css`), shared utilities (`src/lib/utils.ts`), and barrel exports (`index.ts`) eliminate duplication across modules. |

---

## 📂 Detailed File Tree

```text
read-io/
├── public/                                 # Static assets (fonts, icons, default covers)
├── docs/                                   # Project documentation and specifications
│   ├── Readme.md                           # System overview, pipeline diagrams, and tech stack
│   └── file-structure.md                   # Architectural file structure (SOLID & DRY)
│
├── src/                                    # Frontend React 19 + TypeScript Application
│   ├── assets/                             # Local bundled images and logos
│   │
│   ├── components/                         # Modular React components
│   │   ├── ui/                             # shadcn/ui Design System Primitives (DRY, reusable)
│   │   │   ├── avatar.tsx                  # Radix-based user & AI avatar component
│   │   │   ├── badge.tsx                   # Status indicators and concept tags
│   │   │   ├── button.tsx                  # CVA-variant interactive buttons
│   │   │   ├── card.tsx                    # Card container layout components
│   │   │   ├── dialog.tsx                  # Modal dialog primitives
│   │   │   ├── dropdown-menu.tsx           # Context and action menus
│   │   │   ├── input.tsx                   # Form text input controls
│   │   │   ├── popover.tsx                 # Floating popover overlays
│   │   │   ├── scroll-area.tsx             # Customized smooth scroll containers
│   │   │   ├── separator.tsx               # Semantic dividers
│   │   │   ├── sheet.tsx                   # Slide-out drawer panels (AI & Notes)
│   │   │   ├── slider.tsx                  # Reading font-size/zoom sliders
│   │   │   ├── tabs.tsx                    # Tabbed navigation panels
│   │   │   ├── tooltip.tsx                 # Hover tooltips
│   │   │   └── index.ts                    # Barrel export for UI primitives
│   │   │
│   │   ├── reader/                         # Reader Domain Components (SRP: Document rendering)
│   │   │   ├── DocumentViewer.tsx          # PDF / EPUB viewport canvas
│   │   │   ├── ReaderToolbar.tsx           # Zoom, theme, font, and progress controls
│   │   │   ├── TextSelectionMenu.tsx       # Floating context actions on selected text
│   │   │   ├── TableOfContents.tsx         # Chapter and section navigation drawer
│   │   │   ├── BookmarkList.tsx            # Bookmark management sidebar
│   │   │   └── index.ts
│   │   │
│   │   ├── ai/                             # AI Tutor & Assistant Components (SRP: AI interaction)
│   │   │   ├── AIChatPanel.tsx             # Interactive conversational tutor panel
│   │   │   ├── ConceptExplainer.tsx        # "Explain Concept" (Simpler, Example, Quiz)
│   │   │   ├── ConceptGraphView.tsx        # Interactive visual knowledge graph
│   │   │   ├── FlashcardDeck.tsx           # Auto-generated memory & review cards
│   │   │   ├── PromptQuickActions.tsx      # Pre-built contextual prompt buttons
│   │   │   └── index.ts
│   │   │
│   │   ├── library/                        # Library & Book Management (SRP: Library presentation)
│   │   │   ├── BookCard.tsx                # Individual book card with cover and progress
│   │   │   ├── BookGrid.tsx                # Grid display with sorting/filtering
│   │   │   ├── BookUploadDropzone.tsx      # Drag-and-drop document importer
│   │   │   ├── CategoryFilter.tsx          # Tags and category selector
│   │   │   └── index.ts
│   │   │
│   │   └── notes/                          # Notes & Annotations Domain (SRP: Note presentation)
│   │       ├── NoteEditor.tsx              # Markdown note editor
│   │       ├── HighlightList.tsx           # List of extracted highlights by chapter
│   │       ├── NoteCard.tsx                # Note card item with concept tags
│   │       └── index.ts
│   │
│   ├── pages/                              # Top-Level Route Views (Orchestrators)
│   │   ├── Library.tsx                     # Library overview and book shelf
│   │   ├── Reader.tsx                      # Main split-view workspace (Reader + AI + Notes)
│   │   ├── KnowledgeGraph.tsx              # Full-screen concept relationship explorer
│   │   ├── Settings.tsx                    # AI models, themes, and storage preferences
│   │   └── index.ts
│   │
│   ├── hooks/                              # Custom React Hooks (SRP: State & logic abstraction)
│   │   ├── useBookReader.ts                # Controls document page navigation, highlights, and zoom
│   │   ├── useAITutor.ts                   # Manages prompt stream, concept queries, and citations
│   │   ├── useConceptGraph.ts              # Handles graph node traversal and focus
│   │   ├── useTheme.ts                     # System / Light / Dark theme controller
│   │   └── index.ts
│   │
│   ├── stores/                             # Zustand State Stores (SRP: Reactive shared state)
│   │   ├── useBookStore.ts                 # Active library catalog and book metadata
│   │   ├── useReaderStore.ts               # Current page, scroll offset, font size, highlights
│   │   ├── useAIStore.ts                   # Conversation history, active concept, stream status
│   │   ├── useSettingsStore.ts             # App config, LLM provider settings, vector DB configs
│   │   └── index.ts
│   │
│   ├── services/                           # External Service Clients (DIP: I/O and IPC abstraction)
│   │   ├── tauriClient.ts                  # Tauri IPC invoker wrapper (Rust backend)
│   │   ├── booksService.ts                 # Book CRUD, file import, and metadata extraction
│   │   ├── aiService.ts                    # AI Tutor, RAG query, and embedding streaming client
│   │   ├── storageService.ts               # Local cache and persistent note storage
│   │   └── index.ts
│   │
│   ├── lib/                                # Core Library Utilities
│   │   └── utils.ts                        # Tailwind class merger (cn helper)
│   │
│   ├── types/                              # Strict TypeScript Definitions (ISP: Role-specific contracts)
│   │   ├── book.ts                         # IBook, IChapter, IBookmark, IHighlight
│   │   ├── ai.ts                           # IConcept, IGraphNode, IGraphLink, IAITutorMessage
│   │   ├── reader.ts                       # IReaderSettings, IReadingProgress, DocumentType
│   │   ├── settings.ts                     # IAppSettings, ILLMConfig
│   │   └── index.ts
│   │
│   ├── utils/                              # Shared Helpers (DRY: Common formatting and math)
│   │   ├── formatters.ts                   # Date, file size, reading time helpers
│   │   └── index.ts
│   │
│   ├── App.tsx                             # Root React Shell & Navigation Layout
│   ├── App.css                             # Legacy / container layout styles
│   ├── index.css                           # Tailwind CSS directives and shadcn design tokens
│   ├── main.tsx                            # React DOM entrypoint
│   └── vite-env.d.ts                       # Vite environment definitions
│
├── src-ai/                                 # Python FastAPI & LangGraph RAG Service
│   ├── ingestion/                          # Document ingestion pipeline
│   ├── parsing/                            # PDF / EPUB parsers (PyMuPDF, pdfminer)
│   ├── chunking/                           # Semantic and recursive chunking strategies
│   ├── embeddings/                         # Sentence-transformers and Ollama embeddings
│   ├── retrieval/                          # Hybrid search (BM25 + Qdrant / pgvector) & Rerank
│   ├── nlp/                                # Concept extraction and relationship graph builder
│   ├── agents/                             # LangGraph AI tutor workflows & reasoning chains
│   ├── requirements.txt                    # Python dependencies
│   └── main.py                             # FastAPI application entrypoint
│
├── src-tauri/                              # Rust Native Desktop Backend (Tauri 2)
│   ├── src/
│   │   ├── lib.rs                          # Tauri application builder and plugin setup
│   │   ├── main.rs                         # Rust executable entrypoint
│   │   ├── commands/                       # Tauri Command Handlers (SRP: Desktop IPC)
│   │   │   ├── books.rs                    # Book file system and library commands
│   │   │   ├── reader.rs                   # Viewport and document caching commands
│   │   │   └── window.rs                   # Native window management commands
│   │   ├── db/                             # SQLite / Prisma database interface
│   │   ├── filesystem/                     # Safe local file storage and caches
│   │   └── documents/                      # Native document extraction bridges
│   │
│   ├── capabilities/                       # Tauri permission and capability profiles
│   ├── icons/                              # Desktop app icons
│   ├── Cargo.toml                          # Rust dependencies
│   └── tauri.conf.json                     # Tauri configuration
│
├── components.json                         # shadcn/ui CLI configuration
├── tailwind.config.js                      # Tailwind CSS design system configuration
├── postcss.config.js                       # PostCSS configuration
├── tsconfig.json                           # TypeScript configuration with @/* path aliases
├── tsconfig.node.json                      # TypeScript node configuration
├── vite.config.ts                          # Vite bundler configuration with @ alias
└── package.json                            # Project dependencies and npm scripts
```

---

## 🧩 Architectural Data Flow

```text
 ┌────────────────────────────────────────────────────────┐
 │                      React 19 UI                       │
 │  (shadcn/ui + Tailwind + Reader / AI / Library views)  │
 └───────────────────────────┬────────────────────────────┘
                             │ (Custom Hooks)
                             ▼
 ┌────────────────────────────────────────────────────────┐
 │                  Zustand State Stores                  │
 │  (useBookStore, useReaderStore, useAIStore)            │
 └───────────────────────────┬────────────────────────────┘
                             │ (Services & Typed Contracts)
              ┌──────────────┴──────────────┐
              ▼                             ▼
 ┌─────────────────────────┐   ┌──────────────────────────┐
 │      Tauri IPC RPC      │   │    FastAPI / LangGraph   │
 │   (src-tauri / Rust)    │   │      (src-ai / Python)   │
 ├─────────────────────────┤   ├──────────────────────────┤
 │ • File System Access    │   │ • Semantic Chunking      │
 │ • Native SQLite Storage │   │ • Hybrid Search & Rerank │
 │ • Document Caching      │   │ • Concept Graph & LLMs   │
 └─────────────────────────┘   └──────────────────────────┘
```