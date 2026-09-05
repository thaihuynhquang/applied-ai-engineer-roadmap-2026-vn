import { ProjectMeta, SprintModule, TechStackLayer, QuitCriteriaData, PlanDataBundle } from '../types/appState';

export const META_DATA: ProjectMeta = {
  title: "Agentic AI Master Curriculum 2026",
  subtitle: "Packt LangChain/LangGraph Course Bundle + Docker Essentials + Top Free Courses (Anthropic, DeepLearning.AI, Hugging Face, Vercel, Ali Gheshlaghi, BugBytes)",
  targetProject: "Agentic AI Master Systems - 4 Projects (Smart Q&A Bot, AI Research Assistant, Multi-Agent System, Cloud Render API)",
  totalWeeks: 13,
  totalPomodoros: 389,
  totalHours: 324,
  hoursPerDay: 5,
  principles: [
    "Pomodoro 50/5/20 rule: 50 minutes Focus - 5 minutes Short Break - 20 minutes Long Break after every 2 Pomodoros.",
    "14-Module Master Curriculum (12 Core Modules + 2 Optional Advanced Modules): combining the Packt course (LangChain/LangGraph) + Udemy Docker Essentials + free courses from Anthropic Academy, DeepLearning.AI, Hugging Face, Vercel Academy, freeCodeCamp, Vercel AI SDK, BugBytes, and the Async Python Playground.",
    "Complete 4 major real-world projects: Smart Q&A Bot (Mod 1), AI Research Assistant (Mod 5), Multi-Agent System (Mod 7), Production API on Cloud Render (Mod 8)."
  ],
  systemArchitecture: {
    frontend: "Next.js 15 (App Router) + Tailwind CSS + Vercel AI SDK (useChat) + Shadcn/ui",
    backend: "Python 3.11+ + FastAPI + LangChain v1.0 / LangGraph + Model Context Protocol (FastMCP Python SDK) + Docker",
    database: "ChromaDB & PostgreSQL with the pgvector extension (HNSW / IVFFlat Indexing & Hybrid Search)",
    llms: "Anthropic Claude 3.5/3.7, Open-Source LLMs (DeepSeek-R1/V3, Llama 3.3 via vLLM / Ollama), Multi-provider LLMs",
    observability: "LangSmith Tracing, LLM Guard / Security Layer, RAG Evaluation (Arize AI / Ragas) & Cloud Render Deployment"
  }
};

export const SPRINT_MODULES: SprintModule[] = [
  {
    id: "mod-0",
    moduleNum: 0,
    title: "Module 0: Python AsyncIO Foundations",
    subtitle: "Coroutine, Event Loop, asyncio.run, GC Task Safety & Eager Task Factory (Chap 1-2)",
    statusColor: "#3b82f6",
    duration: "1 Day (6 Pomodoros / 5h)",
    objectives: [
      "Distinguish Synchronous vs Asynchronous, I/O-bound vs CPU-bound in AI Engineering",
      "Master Coroutines (async/await), the Event Loop & Task management (create_task with GC safety)",
      "Start the Event Loop the standard way with asyncio.run() and asyncio.Runner() (Python 3.11+)",
      "Optimize execution speed for fast coroutines with eager_task_factory (Python 3.12+)",
      "Understand the Free-threaded CPython GIL update (Python 3.13+ PEP 703)"
    ],
    knowledgeToLoad: [
      "Chapter 1: Intro to Async Programming & Free-threaded GIL (PEP 703)",
      "Chapter 2: Getting Started with asyncio (Coroutines, asyncio.run, Runner & GC Safety)",
      "Eager Task Factory (asyncio.eager_task_factory - Python 3.12+)"
    ],
    deliverables: [
      {
        id: "m0-t1",
        title: "Study Async Python theory & practice Coroutines / Event Loop",
        description: "Read Chapters 1 & 2, practice writing coroutines with async/await, and understand how the Event Loop works.",
        hoursEstimate: 1.7,
        pomodoros: 2,
        tags: ["AsyncIO", "Coroutine", "EventLoop"]
      },
      {
        id: "m0-t2",
        title: "Practice create_task, GC Safety, asyncio.Runner & Eager Task Factory",
        description: "Practice keeping safe Task references (GC safety), running with Runner, and configuring eager_task_factory.",
        hoursEstimate: 2.5,
        pomodoros: 3,
        tags: ["GCSafety", "Runner", "EagerTask"]
      },
      {
        id: "m0-t3",
        title: "Practice get_running_loop(), code refactoring & Gemini Flashcards",
        description: "Safely retrieve the running loop, refactor sample code, review Flashcards, and commit to Git.",
        hoursEstimate: 0.8,
        pomodoros: 1,
        tags: ["Refactoring", "Flashcards"]
      }
    ],
    resources: [
      {
        id: "res-m0-1",
        title: "Modern Async Python Guide (Up-to-Date)",
        type: "docs",
        description: "Internal summary guide on standard Async Python 3.11-3.14+ (Vietnamese-language document).",
        url: "docs/content/async_python_guide.md",
        moduleId: "mod-0",
        isFree: true
      },
      {
        id: "res-m0-2",
        title: "Async Python Playground (Ali Gheshlaghi)",
        type: "docs",
        description: "A free interactive website for learning and practicing Async Python.",
        url: "https://aligheshlaghi97.github.io/asynchronous-python/",
        moduleId: "mod-0",
        isFree: true
      },
      {
        id: "res-m0-3",
        title: "Python Official Docs - asyncio",
        type: "docs",
        description: "The official reference documentation for Python's asyncio library.",
        url: "https://docs.python.org/3/library/asyncio.html",
        moduleId: "mod-0",
        isFree: true
      }
    ]
  },
  {
    id: "mod-1",
    moduleNum: 1,
    title: "Module 1: LangChain Foundations & Project 1",
    subtitle: "Agentic AI Foundations, LCEL, Multi-LLM Provider & Project 1: Smart Q&A Bot",
    statusColor: "#22c55e",
    duration: "4 Days (24 Pomodoros / 20h)",
    objectives: [
      "Distinguish Agentic AI from traditional AI & master its core components",
      "Configure Multi-provider LLMs (OpenAI, Anthropic), Prompt Templates & Output Parsers",
      "Build LCEL chains supporting Realtime Streaming, Schema Inspection and Batch execution",
      "Complete Project 1: a multi-model Smart Q&A Bot"
    ],
    knowledgeToLoad: [
      "Agentic AI Concepts & Architecture (Packt Course - Chap 1-2)",
      "LangChain v1.0 Setup, LCEL Runnable Chains & Pipe operator | (Packt Course - Chap 2)",
      "Multi-provider LLM Configuration, Prompt Templates & Structured Outputs"
    ],
    deliverables: [
      {
        id: "m1-t1",
        title: "Set up the Python 3.11+ environment & API Keys",
        description: "Initialize the Python environment, install langchain, langchain-openai, langchain-anthropic, and configure API Keys.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Setup", "Python", "API Keys"]
      },
      {
        id: "m1-t2",
        title: "Practice LCEL & Runnable Chains",
        description: "Write basic LCEL chains and experiment with batch execution, realtime streaming, and schema inspection.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["LCEL", "Runnable", "Streaming"]
      },
      {
        id: "m1-t3",
        title: "Configure Multi-Model setup & Prompt Templates",
        description: "Create Prompt Templates, Messages (User, System, Assistant), and configure switching between OpenAI & Anthropic.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Prompt", "MultiModel", "Parsers"]
      },
      {
        id: "m1-t4",
        title: "Build Project 1: Smart Q&A Bot (Core Logic)",
        description: "Build a smart Q&A application supporting Structured Output & a multi-model setup.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project1", "QA-Bot", "Core"]
      },
      {
        id: "m1-t5",
        title: "Finish Project 1, code refactoring & Gemini Flashcards",
        description: "Test the Q&A prompts, handle error handling, review Flashcards, and commit Project 1's code.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project1", "Testing", "Flashcards"]
      }
    ],
    resources: [
      {
        id: "res-m1-1",
        title: "LangChain Python Core Overview",
        type: "docs",
        description: "The official documentation introducing the LangChain v1.0 ecosystem.",
        url: "https://python.langchain.com/docs/introduction/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-2",
        title: "LangChain Core Concepts",
        type: "docs",
        description: "Core concepts of Runnable, LCEL, Chat Models, and Output Parsers.",
        url: "https://python.langchain.com/docs/concepts/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-3",
        title: "Packt Course: Agentic AI Systems (Chapter 1-2)",
        type: "course",
        description: "Packt video lectures on Agentic Concepts, LangChain Setup & LCEL Foundations.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-1",
        isFree: false
      }
    ]
  },
  {
    id: "mod-2",
    moduleNum: 2,
    title: "Module 2: Chain Patterns & Advanced LCEL",
    subtitle: "Parallel Chains, RunnablePassthrough, Branching & Debugging Techniques",
    statusColor: "#eab308",
    duration: "2.7 Days (16 Pomodoros / 13.3h)",
    objectives: [
      "Master chain design patterns: Parallel Chains, Passthrough & Branching",
      "Apply RunnableLambda, RunnableBranch, Fallback Chains & Async Execution",
      "Master LangChain chain debugging techniques, Callbacks & Handlers"
    ],
    knowledgeToLoad: [
      "Basic & Parallel Chains with RunnablePassthrough, RunnableParallel (Packt Course - Chap 3)",
      "Chain Branching, Fallbacks & Dynamic Chain Composition",
      "Callbacks, Handlers & Chain Debugging Techniques"
    ],
    deliverables: [
      {
        id: "m2-t1",
        title: "Write Parallel Chains & RunnablePassthrough",
        description: "Practice running LLM branches in parallel combining RunnablePassthrough and RunnableParallel.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["LCEL", "Parallel", "Passthrough"]
      },
      {
        id: "m2-t2",
        title: "Implement Branching Logic & Fallback Chains",
        description: "Use RunnableBranch and configure Fallback Chains for flexible error handling.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Branching", "Fallbacks", "Dynamic"]
      },
      {
        id: "m2-t3",
        title: "Debug LangChain chains with custom Callbacks & Handlers",
        description: "Write custom callbacks and handlers to log execution in detail and debug LCEL chains.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Callbacks", "Handlers", "Debugging"]
      }
    ],
    resources: [
      {
        id: "res-m2-1",
        title: "LangChain Expression Language (LCEL) Docs",
        type: "docs",
        description: "Detailed documentation on Runnable Parallel, Passthrough, and Branching.",
        url: "https://python.langchain.com/docs/concepts/#lcel",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-2",
        title: "Packt Course: Agentic AI Systems (Chapter 3 - Chain Patterns)",
        type: "course",
        description: "Packt video lectures on Basic & Parallel Chains, RunnablePassthrough.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-2",
        isFree: false
      }
    ]
  },
  {
    id: "mod-3",
    moduleNum: 3,
    title: "Module 3: Docker & Containerization Essentials",
    subtitle: "Docker Engine, Dockerfile Caching, Volumes & Docker Compose (Sections 1-7, 9, 10)",
    statusColor: "#0284c7",
    duration: "2.7 Days (16 Pomodoros / 13.3h)",
    objectives: [
      "Master Docker Engine vs VM, install Docker Desktop, and understand why an AI backend needs Docker",
      "Write a Dockerfile optimized for Layer Caching (python:3.11-slim) and CLI management commands",
      "Manage data with Named Volumes & Bind Mounts (live-reload sync while developing an Agent)",
      "Configure Docker Networking and write a docker-compose.yml connecting a Python App with PostgreSQL"
    ],
    knowledgeToLoad: [
      "Udemy Docker Guide - Sections 1-2: Docker Engine, Images & Containers",
      "Udemy Docker Guide - Sections 3-4: Managing Data, Volumes & Custom Networks",
      "Udemy Docker Guide - Sections 5-7, 9, 10: Docker Compose, Utility Containers & Production Summary"
    ],
    deliverables: [
      {
        id: "m3-t1",
        title: "Install Docker Desktop & write a Dockerfile optimized for Layer Caching",
        description: "Learn Docker Engine vs VM, write a Dockerfile using python:3.11-slim, configure layer caching, and manage the CLI.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Docker", "Dockerfile", "Container"]
      },
      {
        id: "m3-t2",
        title: "Manage data & Docker Networking (Volumes & Custom Networks)",
        description: "Create Named Volumes for durable database storage, Bind Mounts for live-reloading code, and Custom Docker Networks.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Volumes", "Networking", "BindMount"]
      },
      {
        id: "m3-t3",
        title: "Write a docker-compose.yml connecting a multi-container app",
        description: "Configure docker-compose.yml to automatically connect the Python App with a PostgreSQL DB, including environment & depends_on.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["DockerCompose", "MultiContainer", "PostgreSQL"]
      },
      {
        id: "m3-t4",
        title: "Practice Utility Containers, docker exec & wrap up Docker",
        description: "Use docker exec to inspect containers, run a Utility Container for a migration script, and summarize Docker.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["DockerExec", "UtilityContainer", "Production"]
      }
    ],
    resources: [
      {
        id: "res-m3-1",
        title: "Udemy: Docker & Kubernetes - The Practical Guide",
        type: "course",
        description: "Maximilian Schwarzmüller's main course (study Sections 1-7, 9 [50% filtered], 10).",
        url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/",
        moduleId: "mod-3",
        isFree: false
      },
      {
        id: "res-m3-2",
        title: "Docker Official Documentation & Compose Spec",
        type: "docs",
        description: "The official reference documentation for the Docker Engine and the Docker Compose Specification.",
        url: "https://docs.docker.com/",
        moduleId: "mod-3",
        isFree: true
      }
    ]
  },
  {
    id: "mod-4",
    moduleNum: 4,
    title: "Module 4: Data Ingestion, Complex Document AI & Vector Stores",
    subtitle: "Processing PDF/Scanned Documents with LlamaParse, Text Splitting & ChromaDB",
    statusColor: "#f97316",
    duration: "3.8 Days (23 Pomodoros / 19.2h)",
    objectives: [
      "Use Document Loaders: TextLoader, WebLoader, LazyLoader, PDF Loader",
      "Parse complex documents: extract tables & scanned PDFs to Markdown with LlamaParse",
      "Master chunking strategies: RecursiveCharacterTextSplitter, Chunk Overlap, MarkdownHeaderSplitter",
      "Build a Vector Store with ChromaDB: Similarity Search with Scores, Metadata Filtering & Persistence"
    ],
    knowledgeToLoad: [
      "Document Loading & Parsing (Packt Course - Chap 4)",
      "Complex Document Parsing with LlamaParse (DeepLearning.AI LlamaIndex course)",
      "Text Splitting Strategies & Chunk Overlap Tuning",
      "ChromaDB Architecture, Vector Retriever & Metadata Filtering"
    ],
    deliverables: [
      {
        id: "m4-t1",
        title: "Practice Document Loaders (Text, Web, PDF)",
        description: "Use TextLoader, WebBaseLoader, and PyPDFLoader to extract text from multiple sources.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Loaders", "PDF", "Ingestion"]
      },
      {
        id: "m4-t2",
        title: "Integrate LlamaParse to extract tables & scanned PDFs",
        description: "Use LlamaParse to convert complex tables and scanned image PDFs into clean Markdown.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LlamaParse", "Tables", "ComplexDoc"]
      },
      {
        id: "m4-t3",
        title: "Practice Text Splitting & Chunk Overlap",
        description: "Experiment with RecursiveCharacterTextSplitter, CodeSplitter, and MarkdownHeaderSplitter.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Chunking", "Splitter", "Overlap"]
      },
      {
        id: "m4-t4",
        title: "Configure a ChromaDB Vector Store & Metadata Filtering",
        description: "Initialize ChromaDB, create Embeddings, run Similarity Search with scores, and apply metadata filters.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["ChromaDB", "Embeddings", "Metadata"]
      }
    ],
    resources: [
      {
        id: "res-m4-1",
        title: "ChromaDB Official Documentation",
        type: "docs",
        description: "The guide for using the Chroma Vector Database.",
        url: "https://docs.trychroma.com/",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-2",
        title: "DeepLearning.AI: Building Agentic RAG with LlamaIndex (LlamaParse)",
        type: "course",
        description: "A free course covering complex document and table extraction with LlamaParse.",
        url: "https://learn.deeplearning.ai/courses/building-agentic-rag-with-llamaindex",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-3",
        title: "Packt Course: Agentic AI Systems (Chapter 4 - Document Ingestion)",
        type: "course",
        description: "Video lectures on Document Ingestion, Chunking & ChromaDB.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-4",
        isFree: false
      }
    ]
  },
  {
    id: "mod-5",
    moduleNum: 5,
    title: "Module 5: Advanced RAG, Production pgvector & Memory Systems",
    subtitle: "Multi-Query RAG, Compression, Hybrid Search, pgvector & Project 2: AI Research Assistant",
    statusColor: "#ef4444",
    duration: "7.2 Days (43 Pomodoros / 35.8h)",
    objectives: [
      "Build an Advanced RAG Pipeline: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Doc",
      "Deploy a production pgvector Vector DB with PostgreSQL (HNSW & IVFFlat Indexing)",
      "Master Memory Patterns: Multiple Sessions, Message Trimming, Summary & Persistent Memory",
      "Complete Project 2: AI Research Assistant"
    ],
    knowledgeToLoad: [
      "Advanced RAG Architecture (Packt Course - Chap 5)",
      "PostgreSQL + pgvector setup & HNSW/IVFFlat indexing (BugBytes course)",
      "Memory Systems: Conversation, Windowed, Summary, Persistent Memory"
    ],
    deliverables: [
      {
        id: "m5-t1",
        title: "Basic RAG Pipeline, Fallback & Structured Outputs",
        description: "Build a basic RAG pipeline integrating a fallback model and structured responses.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["RAG", "Fallback", "StructuredOutput"]
      },
      {
        id: "m5-t2",
        title: "Implement Advanced RAG (Multi-Query, Compression, Hybrid Search)",
        description: "Set up the Multi-Query Retriever, Contextual Compression, Hybrid Search, and Parent Document Retriever.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["MultiQuery", "Compression", "HybridSearch"]
      },
      {
        id: "m5-t3",
        title: "Set up PostgreSQL & the pgvector extension (HNSW Index & Vector Query)",
        description: "Set up PostgreSQL, enable the pgvector extension, create an HNSW/IVFFlat index, and run combined SQL + Vector queries.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["pgvector", "PostgreSQL", "HNSW"]
      },
      {
        id: "m5-t4",
        title: "Build a multi-session conversation Memory System & Summary Memory",
        description: "Integrate Conversation Summary Memory, Message Trimming, and persist session history.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Memory", "Sessions", "Summary"]
      },
      {
        id: "m5-t5",
        title: "Build Project 2: AI Research Assistant (Core Pipeline & pgvector)",
        description: "Build the AI Research Assistant app with an ingestion pipeline, pgvector storage & multi-session memory.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["Project2", "ResearchAssistant", "Core"]
      },
      {
        id: "m5-t6",
        title: "Finish Project 2: AI Research Assistant (Multi-Query & Export)",
        description: "Wire up Multi-Query Retrieval, render a Markdown report, and complete testing.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["Project2", "Testing", "Git"]
      }
    ],
    resources: [
      {
        id: "res-m5-1",
        title: "LangChain RAG Tutorial",
        type: "docs",
        description: "A comprehensive guide to RAG, from basics to advanced.",
        url: "https://python.langchain.com/docs/tutorials/rag/",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-2",
        title: "BugBytes: LangChain & pgvector Video & Code Guide",
        type: "course",
        description: "A video and code guide for combining LangChain with PostgreSQL pgvector.",
        url: "https://youtu.be/GYwhDkwCdt8",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-3",
        title: "Packt Course: Agentic AI Systems (Chapter 5 - Advanced RAG & Memory)",
        type: "course",
        description: "Packt video lectures on Advanced RAG, Context Compression & Memory Patterns.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-5",
        isFree: false
      }
    ]
  },
  {
    id: "mod-6",
    moduleNum: 6,
    title: "Module 6: LangGraph - A Full Deep Dive",
    subtitle: "StateGraph, Reducers, Conditional Edges, Self-Correcting Loops & Human-in-the-loop",
    statusColor: "#8b5cf6",
    duration: "5 Days (30 Pomodoros / 25h)",
    objectives: [
      "Master LangGraph's 3 pillars: StateGraph, Reducers, Accumulating State & Message State",
      "Design multi-node pipelines & routing: Edges, Conditional Edges, Multipath Routing",
      "Build self-correcting loops (Cycles & Loops): a Self-Correcting Code Writer Agent",
      "Configure Human-in-the-loop (Interrupt for Approval) & Checkpointer Persistence"
    ],
    knowledgeToLoad: [
      "StateGraph Architecture & State Reducers (Packt Course - Chap 6)",
      "Control Flow: Routing, Cycles, Self-Correction Pattern",
      "Persistence Internals & Human Approval Interrupts"
    ],
    deliverables: [
      {
        id: "m6-t1",
        title: "Set up a LangGraph StateGraph, Reducers & Message State",
        description: "Define the Agent State and Reducers, and build a simple graph with Nodes and Edges.",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["LangGraph", "StateGraph", "Reducers"]
      },
      {
        id: "m6-t2",
        title: "Implement Routing & Conditional Edges",
        description: "Build a Router Node to steer the reasoning flow (Literal & Multipath Routing).",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["Routing", "ConditionalEdges", "ControlFlow"]
      },
      {
        id: "m6-t3",
        title: "Build a Self-Correcting Code Writer Loop",
        description: "Create a loop that auto-generates code, runs tests, and auto-fixes bugs based on the error traceback.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["SelfCorrecting", "Loops", "Agent"]
      },
      {
        id: "m6-t4",
        title: "Integrate Human-in-the-loop & Checkpointing Persistence",
        description: "Add the ability to pause for human approval (Interrupt) and save graph-state checkpoints.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["HumanInTheLoop", "Checkpointer", "Persistence"]
      }
    ],
    resources: [
      {
        id: "res-m6-1",
        title: "LangGraph Official Documentation",
        type: "docs",
        description: "The official documentation for the LangGraph framework.",
        url: "https://langchain-ai.github.io/langgraph/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-2",
        title: "LangGraph How-To Guides",
        type: "docs",
        description: "Practical guides for Persistence, Human-in-the-loop & Time-travel.",
        url: "https://langchain-ai.github.io/langgraph/how-tos/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-3",
        title: "Packt Course: Agentic AI Systems (Chapter 6 - LangGraph Deep Dive)",
        type: "course",
        description: "An in-depth video course on the LangGraph Deep Dive.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-6",
        isFree: false
      }
    ]
  },
  {
    id: "mod-7",
    moduleNum: 7,
    title: "Module 7: Multi-Agent Architectures (CrewAI + LangGraph Multi-Agent)",
    subtitle: "CrewAI Role-Playing, Supervisor Pattern, Agent Handoffs & Project 3: Multi-Agent System",
    statusColor: "#ec4899",
    duration: "8.7 Days (52 Pomodoros / 43.3h)",
    objectives: [
      "Build a Multi-Agent system with CrewAI (Agents, Tasks, Crew, Sequential & Hierarchical)",
      "Design Multi-Agent systems on LangGraph: Supervisor Pattern, Agent Handoffs, Map-Reduce & Shared State",
      "Coordinate specialized sub-agents & trace hierarchical architectures",
      "Complete Project 3: Multi-Agent Research System"
    ],
    knowledgeToLoad: [
      "CrewAI Multi-Agent Setup (DeepLearning.AI CrewAI Course)",
      "LangGraph Multi-Agent Patterns: Supervisor, Handoffs, Map-Reduce (Packt Course - Chap 7)",
      "Sub-agents design & coordination (Hugging Face Context Course Unit 4)"
    ],
    deliverables: [
      {
        id: "m7-t1",
        title: "Build a Multi-Agent System with CrewAI",
        description: "Set up CrewAI, define Agents (Researcher, Writer), Tasks, and run the workflow.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["CrewAI", "MultiAgent", "Tasks"]
      },
      {
        id: "m7-t2",
        title: "Implement the Supervisor Agent Pattern on LangGraph",
        description: "Create a Supervisor Node that distributes work to Worker Agents and collects their responses.",
        hoursEstimate: 9.2,
        pomodoros: 11,
        tags: ["LangGraph", "Supervisor", "Handoffs"]
      },
      {
        id: "m7-t3",
        title: "Practice Agent Handoffs, Shared Field State & Map-Reduce",
        description: "Design a Handoff flow between Agents, share common state, and apply Map-Reduce.",
        hoursEstimate: 9.2,
        pomodoros: 11,
        tags: ["Handoffs", "SharedState", "MapReduce"]
      },
      {
        id: "m7-t4",
        title: "Build Project 3: Multi-Agent Research System (Part 1)",
        description: "Design a Custom State Schema, Supervisor Node & Worker Nodes for the multi-agent research project.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Project3", "MultiAgent", "Architecture"]
      },
      {
        id: "m7-t5",
        title: "Finish Project 3: Multi-Agent Research System (Part 2)",
        description: "Apply the Send API for a Map-Reduce strategy, run integration tests, and finish the project.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Project3", "SendAPI", "Git"]
      }
    ],
    resources: [
      {
        id: "res-m7-1",
        title: "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        type: "course",
        description: "A free course taught directly by CrewAI's founder (João Moura).",
        url: "https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-2",
        title: "Hugging Face Context Course (Unit 4: Sub-agents)",
        type: "course",
        description: "A free course on designing and coordinating specialized sub-agents.",
        url: "https://huggingface.co/learn/context-course/unit4/introduction",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-3",
        title: "CrewAI Official Documentation",
        type: "docs",
        description: "The official documentation for the CrewAI framework.",
        url: "https://docs.crewai.com/",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-4",
        title: "Packt Course: Agentic AI Systems (Chapter 7 - Multi-Agent LangGraph)",
        type: "course",
        description: "Packt video lectures on the Supervisor Pattern, Agent Handoffs & Map-Reduce.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-7",
        isFree: false
      }
    ]
  },
  {
    id: "mod-8",
    moduleNum: 8,
    title: "Module 8: Production Deployment, LLMOps, Security & Evaluation",
    subtitle: "LangSmith, LLM Guard Security, Agent Evals (Arize/Ragas) & Project 4: Cloud Render API",
    statusColor: "#a855f7",
    duration: "11 Days (66 Pomodoros / 55h)",
    objectives: [
      "Configure Observability: LangSmith Tracing, sub-agent tracking & Agent Hooks",
      "Set up a Security Layer: PII Detection, Prompt Injection Defense, LLM Guard (Smart Bouncer)",
      "Implement RAG & Agent Evaluation: Arize AI / Ragas (Faithfulness, Relevance, LLM-as-a-Judge)",
      "Configure Resilience: Circuit Breaker, Fallback Chain, Model Router & Semantic Caching",
      "Complete Project 4: a Production LangGraph API + FastAPI + Docker + Cloud Render Deployment"
    ],
    knowledgeToLoad: [
      "LangSmith Tracing & Observability (Packt Course - Chap 8)",
      "Evaluating AI Agents with Arize AI (DeepLearning.AI Course)",
      "Security Defense-in-Depth & LLM Guard (Packt Course - Chap 8)",
      "FastAPI Integration, Multi-container Docker & Render Cloud Deployment"
    ],
    deliverables: [
      {
        id: "m8-t1",
        title: "Configure LangSmith Tracing & Agent Hooks",
        description: "Wire up LangSmith Tracing, track sub-agents, and use Agent Hooks to monitor the agent lifecycle.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["LangSmith", "Tracing", "Hooks"]
      },
      {
        id: "m8-t2",
        title: "Set up a Security Layer (PII Detection & Prompt Injection Defense)",
        description: "Integrate LLM Guard (Smart Bouncer), PII Detection, and defense against Prompt Injection attacks.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Security", "LLMGuard", "PromptInjection"]
      },
      {
        id: "m8-t3",
        title: "Implement Evaluation & LLM-as-a-Judge with Arize AI / Ragas",
        description: "Write an automated test suite scoring Faithfulness, Answer Relevance, and Context Recall with Arize AI / Ragas.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Evaluation", "ArizeAI", "Ragas"]
      },
      {
        id: "m8-t4",
        title: "Build Resilience, a Model Router & Semantic Cache",
        description: "Set up Circuit Breaker, Fallback Chain, and Semantic Caching to optimize token cost and reliability.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Resilience", "Cache", "CircuitBreaker"]
      },
      {
        id: "m8-t5",
        title: "Build Project 4: Production API Packaging with FastAPI & Docker",
        description: "Wire the LangGraph Agent up to a FastAPI Server, and write a Dockerfile & docker-compose.yml.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Project4", "FastAPI", "Docker"]
      },
      {
        id: "m8-t6",
        title: "Finish Project 4: deploy to Cloud Render & run E2E Testing",
        description: "Deploy the production-ready API to Render Cloud, test the public endpoint, and finish!",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Project4", "RenderCloud", "FinalCommit"]
      }
    ],
    resources: [
      {
        id: "res-m8-1",
        title: "DeepLearning.AI: Evaluating AI Agents (Arize AI)",
        type: "course",
        description: "A free course on evaluating agent quality with Arize AI.",
        url: "https://learn.deeplearning.ai/courses/evaluating-ai-agents",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-2",
        title: "Hugging Face Context Course (Unit 5: Agent Hooks & Observability)",
        type: "course",
        description: "A free course on automating and monitoring the agent lifecycle.",
        url: "https://huggingface.co/learn/context-course/unit5/introduction",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-3",
        title: "LangSmith Observability & Tracing Docs",
        type: "docs",
        description: "LangSmith's documentation for LLM monitoring and evaluation.",
        url: "https://docs.smith.langchain.com/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-4",
        title: "FastAPI & Render Cloud Guides",
        type: "docs",
        description: "Guides for building a high-performance API and deploying a Python/Docker app to Render Cloud.",
        url: "https://fastapi.tiangolo.com/tutorial/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-5",
        title: "Packt Course: Agentic AI Systems (Chapter 8 - LLMOps & Render Cloud)",
        type: "course",
        description: "Packt video lectures on LangSmith Tracing, LLM Guard Security & deploying to Render.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-8",
        isFree: false
      }
    ]
  },
  {
    id: "mod-9",
    moduleNum: 9,
    title: "Module 9: Model Context Protocol (MCP) Integration Quickstart",
    subtitle: "The 2026 Tool-Connection Protocol: FastMCP Server, Stdio/SSE & Agent Integration",
    statusColor: "#06b6d4",
    duration: "2.7 Days (16 Pomodoros / 13.3h)",
    objectives: [
      "Master the MCP Client/Server basics & its place in the AI Agent ecosystem",
      "Write your own FastMCP Server in Python providing Custom Tools/Resources",
      "Connect a LangChain Agent to call MCP Tools over Stdio/SSE Transports"
    ],
    knowledgeToLoad: [
      "MCP Architecture & Protocol Spec (Hugging Face Context Course Unit 2)",
      "FastMCP Python SDK & Tool Decorator Pattern",
      "Agent Connection & Transport Setup"
    ],
    deliverables: [
      {
        id: "m9-t1",
        title: "Study the MCP architecture & the FastMCP Python SDK",
        description: "Read the MCP Client/Server specification and learn Stdio & SSE Transports.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["MCP", "Protocol", "FastMCP"]
      },
      {
        id: "m9-t2",
        title: "Write your own FastMCP Server providing Tools/Resources",
        description: "Build an MCP Server providing a data/system query Tool using the FastMCP SDK.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["FastMCP", "Python", "Server"]
      },
      {
        id: "m9-t3",
        title: "Connect a LangChain Agent to a FastMCP Server over Stdio/SSE",
        description: "Write a Client Agent that automatically connects to and calls Tools on the FastMCP Server.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["MCP-Client", "ToolCalling", "Agent"]
      }
    ],
    resources: [
      {
        id: "res-m9-1",
        title: "Hugging Face Context Course (Unit 2: MCP)",
        type: "course",
        description: "A free course on connecting tools via the Model Context Protocol.",
        url: "https://huggingface.co/learn/context-course/unit2/introduction",
        moduleId: "mod-9",
        isFree: true
      },
      {
        id: "res-m9-2",
        title: "Model Context Protocol Official Specification",
        type: "docs",
        description: "The official standard specification for MCP, by Anthropic.",
        url: "https://modelcontextprotocol.io/",
        moduleId: "mod-9",
        isFree: true
      },
      {
        id: "res-m9-3",
        title: "FastMCP Python SDK GitHub",
        type: "repo",
        description: "The official Python SDK for building an MCP Server extremely fast.",
        url: "https://github.com/jlowin/fastmcp",
        moduleId: "mod-9",
        isFree: true
      }
    ]
  },
  {
    id: "mod-10",
    moduleNum: 10,
    title: "Module 10: Open-Source LLMs & High-Throughput Serving (vLLM & Ollama)",
    subtitle: "DeepSeek-R1 / Llama 3.3 Local with Ollama & High-Throughput Inference with vLLM",
    statusColor: "#10b981",
    duration: "3.3 Days (20 Pomodoros / 16.7h)",
    objectives: [
      "Run open-source models (Llama 3.3, DeepSeek-R1) locally/offline with Ollama",
      "Master the vLLM architecture: PagedAttention, Continuous Batching, Quantization for serving inference",
      "Connect open-source models into a LangChain/LangGraph chain"
    ],
    knowledgeToLoad: [
      "DeepLearning.AI & Red Hat Course: Fast & Efficient LLM Inference with vLLM",
      "Hugging Face AI Agents Course: smolagents framework & Function Calling Fine-tuning",
      "Ollama setup & vLLM server deployment"
    ],
    deliverables: [
      {
        id: "m10-t1",
        title: "Run Ollama locally with DeepSeek-R1 / Llama 3.3",
        description: "Install and run an open-source reasoning model locally with Ollama.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Ollama", "DeepSeek", "LocalLLM"]
      },
      {
        id: "m10-t2",
        title: "Configure a vLLM Server (PagedAttention & Continuous Batching)",
        description: "Deploy a vLLM Server serving inference at up to 6x higher throughput for production.",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["vLLM", "PagedAttention", "Serving"]
      },
      {
        id: "m10-t3",
        title: "Integrate a vLLM endpoint into a LangChain LLM Client & smolagents",
        description: "Create a LangChain LLM Client and smolagents connecting to a local/cloud vLLM endpoint.",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["LangChain", "smolagents", "vLLM-Client"]
      }
    ],
    resources: [
      {
        id: "res-m10-1",
        title: "DeepLearning.AI: Fast & Efficient LLM Inference with vLLM",
        type: "course",
        description: "A free course co-produced with Red Hat on the vLLM architecture & PagedAttention.",
        url: "https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm",
        moduleId: "mod-10",
        isFree: true
      },
      {
        id: "res-m10-2",
        title: "Hugging Face Agents Course (smolagents & Fine-tuning)",
        type: "course",
        description: "A free course mastering the smolagents framework & function-calling fine-tuning.",
        url: "https://huggingface.co/learn/agents-course/unit2/smolagents/introduction",
        moduleId: "mod-10",
        isFree: true
      },
      {
        id: "res-m10-3",
        title: "vLLM Official Documentation",
        type: "docs",
        description: "The documentation guide for deploying vLLM.",
        url: "https://docs.vllm.ai/",
        moduleId: "mod-10",
        isFree: true
      }
    ]
  },
  {
    id: "mod-11",
    moduleNum: 11,
    title: "Module 11: Full-Stack Web AI Interface (Next.js & Vercel AI SDK)",
    subtitle: "Modern Web AI UI: Vercel AI SDK (generateText, generateObject, useChat), Zod Structured Outputs, Caching & FastAPI Integration",
    statusColor: "#6366f1",
    duration: "4.5 Days (27 Pomodoros / 22.5h)",
    objectives: [
      "Bootstrap a Web AI project with Next.js App Router, Server Components, Dynamic Routes, TypeScript, TailwindCSS & Shadcn/ui",
      "Integrate the Vercel AI SDK: generateText, Structured Outputs (generateObject + Zod schemas) and Streaming Hooks (useChat, useCompletion)",
      "Cut costs with the 'use cache' directive (up to 97% savings), configure the Vercel AI Gateway, automatic failovers, and logging",
      "Build Generative UI, a Tool Calling UI, and connect the Next.js Frontend to the FastAPI/LangGraph Backend, deploying to Vercel"
    ],
    knowledgeToLoad: [
      "Vercel Academy: Creating an AI Summary App with Next.js (Eve Porcello)",
      "freeCodeCamp Course: Build a Support Agent with Vercel AI SDK",
      "Developers Digest Tutorial: Agents 101 (Next.js + Vercel AI Gateway + CI/CD)",
      "Vercel AI SDK Documentation"
    ],
    deliverables: [
      {
        id: "m11-t1",
        title: "Bootstrap the Next.js App Router, Vercel AI SDK & AI Gateway Setup",
        description: "Scaffold the Next.js app frame, Server Components, and configure the Vercel AI Gateway, API keys, TypeScript & Tailwind CSS.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["Nextjs", "VercelAISDK", "AIGateway", "Frontend"]
      },
      {
        id: "m11-t2",
        title: "AI Summary App: Structured Outputs (Zod) & Smart Caching (use cache)",
        description: "Extract structured outputs (Pros/Cons/Themes) with generateObject + Zod, and apply the 'use cache' directive to cut cost, plus prompt engineering.",
        hoursEstimate: 7.5,
        pomodoros: 9,
        tags: ["generateObject", "Zod", "useCache", "PromptEngineering"]
      },
      {
        id: "m11-t3",
        title: "Streaming Chat UI (useChat), Generative UI, Failover & connecting FastAPI",
        description: "Build a chatbot UI with realtime token streaming, Generative UI, graceful error handling/failovers, wire up FastAPI, and deploy to Vercel.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["useChat", "Streaming", "GenerativeUI", "FastAPI", "VercelDeploy"]
      }
    ],
    resources: [
      {
        id: "res-m11-0",
        title: "Vercel Academy: Creating an AI Summary App with Next.js",
        type: "course",
        description: "The official Vercel Academy course (Eve Porcello): build, cut cost (use cache), structured outputs (Zod), and deploy an AI app with Next.js & the Vercel AI SDK.",
        url: "https://vercel.com/academy/ai-summary-app-with-nextjs",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-1",
        title: "freeCodeCamp: Build Support Agent with Vercel AI SDK",
        type: "course",
        description: "A video guide for building an AI Support Agent with the Vercel AI SDK, RAG & Tool Calling.",
        url: "https://www.youtube.com/watch?v=WKIjkxxNH0c",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-2",
        title: "Developers Digest: Agents 101 Tutorial",
        type: "course",
        description: "A guide for building a Full-stack Next.js AI App combined with the Vercel AI Gateway.",
        url: "https://www.developersdigest.tech/tutorials/eWs50bhFvMY",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-3",
        title: "Vercel AI SDK Documentation",
        type: "docs",
        description: "The official reference documentation for the Vercel AI SDK.",
        url: "https://sdk.vercel.ai/docs",
        moduleId: "mod-11",
        isFree: true
      }
    ]
  },
  {
    id: "mod-12",
    moduleNum: 12,
    title: "Module 12 (Optional): MCP Masterclass (Anthropic Official Curriculum)",
    subtitle: "Anthropic Official MCP Masterclass: 3 Core Primitives, Sampling, Progress, Roots & StreamableHTTP",
    statusColor: "#f43f5e",
    duration: "5.7 Days (34 Pomodoros / 28.3h)",
    objectives: [
      "Master the 3 core Primitives: Tools, Resources, Prompts & testing with the MCP Inspector",
      "Master the Advanced Primitives: Sampling (Server-initiated LLM calls), Progress Notifications, Roots",
      "Implement Transports: stdio vs StreamableHTTP for Cloud/Serverless",
      "Understand the Enterprise Specification: OAuth CIMD, Header routing (Mcp-Method) & MCP Apps"
    ],
    knowledgeToLoad: [
      "Anthropic Official Course 1: Introduction to Model Context Protocol",
      "Anthropic Official Course 2: Model Context Protocol: Advanced Topics",
      "MCP 2026 Specification & Enterprise Security"
    ],
    deliverables: [
      {
        id: "m12-t1",
        title: "Practice MCP Core: Tools, Resources, Prompts & the MCP Inspector",
        description: "Write an MCP Server with the Python SDK supporting the 3 core Primitives, and test with the MCP Inspector.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["MCP-Primitives", "Inspector", "Anthropic"]
      },
      {
        id: "m12-t2",
        title: "Practice Advanced Primitives: Sampling, Progress Notifications & Roots",
        description: "Set up Sampling callbacks, emit task progress notifications, and restrict filesystem access scope.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Sampling", "Progress", "Roots"]
      },
      {
        id: "m12-t3",
        title: "Implement Transports (stdio vs StreamableHTTP) & the Enterprise Specification",
        description: "Configure the StreamableHTTP transport for Cloud/Serverless, OAuth CIMD, and Header-based routing.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["StreamableHTTP", "OAuth", "EnterpriseSpec"]
      }
    ],
    resources: [
      {
        id: "res-m12-1",
        title: "Anthropic Official Course 1: Introduction to MCP",
        type: "course",
        description: "A free course from Anthropic teaching the 3 Core Primitives, the Python SDK & the MCP Inspector.",
        url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
        moduleId: "mod-12",
        isFree: true
      },
      {
        id: "res-m12-2",
        title: "Anthropic Official Course 2: MCP Advanced Topics",
        type: "course",
        description: "A free course from Anthropic teaching Sampling, Progress Notifications, Roots & StreamableHTTP.",
        url: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
        moduleId: "mod-12",
        isFree: true
      },
      {
        id: "res-m12-3",
        title: "Model Context Protocol Specification & Enterprise Architecture",
        type: "docs",
        description: "The advanced technical specification for MCP, Transports, Roots & the Enterprise Specification.",
        url: "https://modelcontextprotocol.io/",
        moduleId: "mod-12",
        isFree: true
      }
    ]
  },
  {
    id: "mod-13",
    moduleNum: 13,
    title: "Module 13 (Optional): Advanced Async Python & System Concurrency",
    subtitle: "Low-level Futures, Synchronization Primitives, TaskGroup, Timeout & Queue Shutdown",
    statusColor: "#8b5cf6",
    duration: "2.7 Days (16 Pomodoros / 13.3h)",
    objectives: [
      "Master the nature of Low-level Futures, Loop Callbacks & the Task -> Future -> Awaitable hierarchy",
      "Coordinate shared resources & avoid Race Conditions with Lock, Semaphore, Barrier & Event",
      "Modern Structured Concurrency with asyncio.TaskGroup & asyncio.timeout() (Python 3.11+)",
      "Advanced error handling with ExceptionGroup (except*) & Queue Producer-Consumer (Queue.shutdown)"
    ],
    knowledgeToLoad: [
      "Chapter 3: Low-Level Futures & Event Loop Callbacks",
      "Chapter 4: Synchronization Primitives (Lock, Semaphore, Barrier, Event)",
      "Chapter 5: Advanced Async & Structured Concurrency (TaskGroup, timeout, ExceptionGroup, Queue)",
      "Chapter 6 Advanced: Queue.shutdown & POSIX multiprocessing start method"
    ],
    deliverables: [
      {
        id: "m13-t1",
        title: "Study Futures & Synchronization Primitives (Lock, Semaphore, Barrier)",
        description: "Understand the nature of asyncio.Future, and use Lock, Semaphore, Barrier, and Event to synchronize tasks.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Futures", "Lock", "Semaphore", "Barrier"]
      },
      {
        id: "m13-t2",
        title: "Practice Structured Concurrency (TaskGroup, timeout) & a Queue Producer-Consumer",
        description: "Manage a group of tasks with TaskGroup, bound runtime with timeout(), and write a Producer-Consumer pipeline.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["TaskGroup", "Timeout", "AsyncQueue"]
      },
      {
        id: "m13-t3",
        title: "Practice ExceptionGroup (except*), Queue.shutdown, refactoring & Flashcards",
        description: "Catch errors in a TaskGroup with except*, safely close a queue with Queue.shutdown(), review Flashcards, and commit to Git.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["ExceptionGroup", "QueueShutdown", "Flashcards"]
      }
    ],
    resources: [
      {
        id: "res-m13-1",
        title: "Modern Async Python Guide (Up-to-Date) - Part B",
        type: "docs",
        description: "Internal summary guide on Advanced Async Python (Chap 3, 4, 5 & 6) (Vietnamese-language document).",
        url: "docs/content/async_python_guide.md#-phần-b-kỹ-thuật-async-nâng-cao-dành-cho-module-12-tùy-chọn",
        moduleId: "mod-13",
        isFree: true
      },
      {
        id: "res-m13-2",
        title: "Async Python Playground (Ali Gheshlaghi)",
        type: "docs",
        description: "A free interactive website for learning and practicing Async Python for Chapters 3, 4, 5 & 6.",
        url: "https://aligheshlaghi97.github.io/asynchronous-python/",
        moduleId: "mod-13",
        isFree: true
      }
    ]
  }
];

export const TECH_STACK_LAYERS: TechStackLayer[] = [
  {
    layerNum: 1,
    name: "1. UI & Application Layer",
    description: "The user-facing web interface, token-by-token streaming responses, low-code automation, and an interactive experience.",
    items: [
      { name: "Next.js 15 (React)", role: "Standard Full-stack Web Framework (App Router)", usageShare: "48%", isPrimaryChoice: true },
      { name: "Vercel AI SDK", role: "React Hooks (useChat, useCompletion, streamText)", isPrimaryChoice: true },
      { name: "Tailwind CSS + Shadcn/ui", role: "Design System & Glassmorphism UI", isPrimaryChoice: true },
      { name: "n8n", role: "Low-code / No-code Agentic Automation Workflow", usageShare: "Low-code Standard", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 2,
    name: "2. Agent & Orchestration Layer",
    description: "The framework orchestrating iterative reasoning, state management, communication protocols, and the multi-agent ecosystem.",
    items: [
      { name: "LangGraph (StateGraph)", role: "Stateful Production Agents, Memory & Checkpoints", usageShare: "57% Enterprise", isPrimaryChoice: true },
      { name: "Model Context Protocol (MCP / FastMCP)", role: "Standard Protocol for Tool & DB Access (Anthropic Spec)", isPrimaryChoice: true },
      { name: "CrewAI", role: "Role-playing Multi-Agent Framework (Sequential & Hierarchical)", isPrimaryChoice: true },
      { name: "Smolagents", role: "Lightweight Agent Framework (Hugging Face)", isPrimaryChoice: true },
      { name: "LangChain Core", role: "LLM Chains & Prompt Templates", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 3,
    name: "3. LLMs & Inference Engine",
    description: "Commercial API large language models, open-source models, and high-throughput serving engines.",
    items: [
      { name: "Anthropic Claude 3.5 / 3.7", role: "No.1 for Coding & Complex Instruction Following", isPrimaryChoice: true },
      { name: "DeepSeek-R1 / V3", role: "Leading Open Reasoning Model", isPrimaryChoice: true },
      { name: "Google Gemini 2.0 Flash / Pro", role: "1M-2M Large Context Window", isPrimaryChoice: true },
      { name: "OpenAI GPT-4o / o3-mini", role: "Multimodal & Complex Logic Reasoning", isPrimaryChoice: true },
      { name: "vLLM & Ollama", role: "High-Throughput Local/Cloud LLM Serving (PagedAttention)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 4,
    name: "4. Vector DB & Data Storage",
    description: "Databases for semantic Vector storage and combined Hybrid Search.",
    items: [
      { name: "ChromaDB", role: "Default Lightweight Open-Source Vector Database for RAG", isPrimaryChoice: true },
      { name: "PostgreSQL (pgvector)", role: "Enterprise Vector DB & Hybrid Search (HNSW / IVFFlat Index)", isPrimaryChoice: true },
      { name: "Qdrant", role: "Dedicated High-Performance Vector DB (Rust)", usageShare: "Dedicated Option" }
    ]
  },
  {
    layerNum: 5,
    name: "5. LLMOps & Observability & Security",
    description: "Reasoning-flow tracing, LLM Guard security, token cost control, and quality evaluation.",
    items: [
      { name: "LangSmith", role: "Deep Tracing, Datasets & Latency / Token Cost Debugging", isPrimaryChoice: true },
      { name: "LLM Guard (Smart Bouncer)", role: "PII Detection & Prompt Injection Defense Layer", isPrimaryChoice: true },
      { name: "Arize AI / Ragas", role: "Automated Evaluation (Faithfulness, Relevance, LLM-as-a-Judge)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 6,
    name: "6. Data Ingestion & Document AI",
    description: "Processing and extracting complex PDF/Markdown documents, and text chunking.",
    items: [
      { name: "LlamaParse", role: "Complex Document Parsing (Tables, Scanned PDF to Markdown)", isPrimaryChoice: true },
      { name: "LangChain Loaders & Splitters", role: "RecursiveCharacterTextSplitter, CodeSplitter, MarkdownSplitter", isPrimaryChoice: true },
      { name: "PyPDFLoader & WebBaseLoader", role: "Document Extraction & Lazy Loading", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 7,
    name: "7. Languages & Cloud Deployment",
    description: "Backend/frontend runtime environments and cloud deployment infrastructure.",
    items: [
      { name: "Python 3.11+", role: "Backend AI Engine & FastAPI", usageShare: "58% Dominant", isPrimaryChoice: true },
      { name: "TypeScript / Node 20+", role: "Frontend Web UI & Type Safety", usageShare: "44%", isPrimaryChoice: true },
      { name: "Docker & Docker MCP", role: "Containerization for MCP & Multi-services", isPrimaryChoice: true },
      { name: "Render Cloud", role: "Production Web Service & API Cloud Hosting", isPrimaryChoice: true }
    ]
  }
];

export const QUIT_CRITERIA_DATA: QuitCriteriaData = {
  title: "Quit Criteria & Decision Matrix",
  subtitle: "A Lookup Matrix of Warning Thresholds (Trigger) & Pivot Actions for All 14 Modules",
  docPath: "docs/content/quit_criteria_guide.md",
  dailyProcess: [
    {
      stepNum: 1,
      title: "Start-of-Session Review",
      description: "Check the Pomodoro quota for the current exercise / task.",
      iconName: "clipboardCheck"
    },
    {
      stepNum: 2,
      title: "Measure Pomodoros",
      description: "Accurately count the actual Pomodoros spent on the task.",
      iconName: "timer"
    },
    {
      stepNum: 3,
      title: "Check Against the Trigger",
      description: "If you hit > 150% of quota or get stuck for > 3 Poms, trigger the warning.",
      iconName: "alertTriangle"
    },
    {
      stepNum: 4,
      title: "Execute the Pivot",
      description: "Look up the Decision Matrix and execute the pivot action immediately, without hesitation.",
      iconName: "cornerUpRight"
    }
  ],
  decisionMatrix: [
    {
      moduleId: "mod-0",
      moduleNum: 0,
      moduleName: "Module 0: Python AsyncIO Foundations",
      quotaPoms: 6,
      trigger: "Stuck on async/await syntax / Event Loop for > 2 Poms",
      pivotAction: "Read the async_python_guide.md summary and focus on studying the Chap 1-2 sample code instead of writing from scratch."
    },
    {
      moduleId: "mod-1",
      moduleNum: 1,
      moduleName: "Module 1: LangChain Foundations",
      quotaPoms: 24,
      trigger: "Stuck on API Keys / LCEL setup for > 4 Poms",
      pivotAction: "Switch to using the plain OpenAI / Anthropic SDK or Google Colab."
    },
    {
      moduleId: "mod-2",
      moduleNum: 2,
      moduleName: "Module 2: Chain Patterns & LCEL",
      quotaPoms: 16,
      trigger: "RunnableParallel multi-branch chain errors for > 3 Poms",
      pivotAction: "Use a simple linear Runnable Sequence sample instead."
    },
    {
      moduleId: "mod-3",
      moduleNum: 3,
      moduleName: "Module 3: Docker Essentials",
      quotaPoms: 16,
      trigger: "Stuck on Dockerfile/Compose setup for > 4 Poms",
      pivotAction: "Use a ready-made Docker Compose template or Neon Cloud."
    },
    {
      moduleId: "mod-4",
      moduleNum: 4,
      moduleName: "Module 4: Data Ingestion & LlamaParse",
      quotaPoms: 23,
      trigger: "LlamaParse API fails to parse a PDF for > 3 Poms",
      pivotAction: "Use the default PyPDFLoader and skip parsing complex tables."
    },
    {
      moduleId: "mod-5",
      moduleNum: 5,
      moduleName: "Module 5: Advanced RAG & pgvector",
      quotaPoms: 43,
      trigger: "PostgreSQL / pgvector database errors for > 6 Poms",
      pivotAction: "Use Neon Postgres Cloud or fall back to local ChromaDB."
    },
    {
      moduleId: "mod-6",
      moduleNum: 6,
      moduleName: "Module 6: LangGraph Deep Dive",
      quotaPoms: 30,
      trigger: "State Schema / Reducers errors for > 5 Poms",
      pivotAction: "Use LangGraph's default MessageState."
    },
    {
      moduleId: "mod-7",
      moduleNum: 7,
      moduleName: "Module 7: Multi-Agent Architectures",
      quotaPoms: 52,
      trigger: "Supervisor Agent stuck in an infinite loop for > 6 Poms",
      pivotAction: "Reduce the number of Worker Agents to 2 and drop the Blackboard Pattern."
    },
    {
      moduleId: "mod-8",
      moduleNum: 8,
      moduleName: "Module 8: Production LLMOps & Security",
      quotaPoms: 66,
      trigger: "Docker / Render Cloud deploy fails for > 8 Poms",
      pivotAction: "Deploy FastAPI locally + demo via ngrok, and drop Render Cloud."
    },
    {
      moduleId: "mod-9",
      moduleNum: 9,
      moduleName: "Module 9: MCP Quickstart",
      quotaPoms: 16,
      trigger: "FastMCP SSE Transport errors for > 3 Poms",
      pivotAction: "Use only the simple Stdio Transport."
    },
    {
      moduleId: "mod-10",
      moduleNum: 10,
      moduleName: "Module 10: Open-Source LLMs (vLLM)",
      quotaPoms: 20,
      trigger: "Local machine doesn't have enough VRAM to run vLLM for > 3 Poms",
      pivotAction: "Use local Ollama or the Groq API (free cloud inference)."
    },
    {
      moduleId: "mod-11",
      moduleNum: 11,
      moduleName: "Module 11: Full-Stack Web AI (Next.js)",
      quotaPoms: 27,
      trigger: "Next.js App Router / Tailwind errors for > 5 Poms",
      pivotAction: "Use Streamlit or a FastAPI HTML UI instead."
    },
    {
      moduleId: "mod-12",
      moduleNum: 12,
      moduleName: "Module 12 (Optional): MCP Masterclass",
      quotaPoms: 34,
      trigger: "Overall schedule slips by > 1 week",
      pivotAction: "DROP MODULE 12 (OPTIONAL) and focus on finishing Project 4.",
      isOptional: true
    },
    {
      moduleId: "mod-13",
      moduleNum: 13,
      moduleName: "Module 13 (Optional): Advanced Async Python",
      quotaPoms: 16,
      trigger: "Overall schedule slips by > 1 week",
      pivotAction: "DROP MODULE 13 (OPTIONAL) and focus on finishing Project 4.",
      isOptional: true
    }
  ]
};

export const EN_PLAN_DATA: PlanDataBundle = {
  META_DATA,
  SPRINT_MODULES,
  TECH_STACK_LAYERS,
  QUIT_CRITERIA_DATA,
};
