import { SprintModule, TechStackLayer, QuitCriteriaData } from '../types/appState';

export interface ProjectMeta {
  title: string;
  subtitle: string;
  targetProject: string;
  totalWeeks: number;
  totalPomodoros: number;
  totalHours: number;
  hoursPerDay: number;
  principles: string[];
  systemArchitecture: {
    frontend: string;
    backend: string;
    database: string;
    llms: string;
    observability: string;
  };
}

export const META_DATA: ProjectMeta = {
  title: "Agentic AI Master Curriculum 2026",
  subtitle: "Combo Khóa Packt LangChain/LangGraph + Docker Essentials + Top Khóa Học Miễn Phí (Anthropic, DeepLearning.AI, Hugging Face, Vercel, Ali Gheshlaghi, BugBytes)",
  targetProject: "Agentic AI Master Systems - 4 Projects (Smart Q&A Bot, AI Research Assistant, Multi-Agent System, Cloud Render API)",
  totalWeeks: 13,
  totalPomodoros: 389,
  totalHours: 324,
  hoursPerDay: 5,
  principles: [
    "Quy tắc Pomodoro 50/5/20: 50 phút Tập trung - 5 phút Nghỉ ngắn - 20 phút Nghỉ dài sau mỗi 2 Pomodoro.",
    "Lộ trình Master Curriculum 14 Module (12 Module Cốt Lõi + 2 Module Nâng Cao Tùy Chọn): Tích hợp Khóa Packt (LangChain/LangGraph) + Udemy Docker Essentials + Các khóa học miễn phí từ Anthropic Academy, DeepLearning.AI, Hugging Face, Vercel Academy, freeCodeCamp, Vercel AI SDK, BugBytes, Async Python Playground.",
    "Hoàn thành 4 Dự án thực tế lớn: Smart Q&A Bot (Mod 1), AI Research Assistant (Mod 5), Multi-Agent System (Mod 7), Production API Cloud Render (Mod 8)."
  ],
  systemArchitecture: {
    frontend: "Next.js 15 (App Router) + Tailwind CSS + Vercel AI SDK (useChat) + Shadcn/ui",
    backend: "Python 3.11+ + FastAPI + LangChain v1.0 / LangGraph + Model Context Protocol (FastMCP Python SDK) + Docker",
    database: "ChromaDB & PostgreSQL với extension pgvector (HNSW / IVFFlat Indexing & Hybrid Search)",
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
    duration: "1 Ngày (6 Pomodoros / 5h)",
    objectives: [
      "Phân biệt Synchronous vs Asynchronous, I/O-bound vs CPU-bound trong AI Engineering",
      "Làm chủ Coroutine (async/await), Event Loop & Quản lý Task (create_task với GC safety)",
      "Khởi chạy Event Loop chuẩn với asyncio.run() và asyncio.Runner() (Python 3.11+)",
      "Tối ưu tốc độ thực thi cho coroutine nhanh với eager_task_factory (Python 3.12+)",
      "Nắm vững cập nhật GIL Free-threaded CPython (Python 3.13+ PEP 703)"
    ],
    knowledgeToLoad: [
      "Chapter 1: Intro to Async Programming & Free-threaded GIL (PEP 703)",
      "Chapter 2: Getting Started with asyncio (Coroutines, asyncio.run, Runner & GC Safety)",
      "Eager Task Factory (asyncio.eager_task_factory - Python 3.12+)"
    ],
    deliverables: [
      {
        id: "m0-t1",
        title: "Nạp lý thuyết Async Python & thực hành Coroutine / Event Loop",
        description: "Đọc Chapters 1 & 2, thực hành viết coroutine với async/await và hiểu cơ chế Event Loop.",
        hoursEstimate: 1.7,
        pomodoros: 2,
        tags: ["AsyncIO", "Coroutine", "EventLoop"]
      },
      {
        id: "m0-t2",
        title: "Thực hành create_task, GC Safety, asyncio.Runner & Eager Task Factory",
        description: "Thực hành giữ tham chiếu Task an toàn (GC safety), khởi chạy với Runner và cài đặt eager_task_factory.",
        hoursEstimate: 2.5,
        pomodoros: 3,
        tags: ["GCSafety", "Runner", "EagerTask"]
      },
      {
        id: "m0-t3",
        title: "Thực hành get_running_loop(), Code Refactoring & Gemini Flashcards",
        description: "Lấy running loop an toàn, refactor code mẫu, ôn tập Flashcards và commit Git.",
        hoursEstimate: 0.8,
        pomodoros: 1,
        tags: ["Refactoring", "Flashcards"]
      }
    ],
    resources: [
      {
        id: "res-m0-1",
        title: "Hướng Dẫn Async Python Hiện Đại (Up-to-Date)",
        type: "docs",
        description: "Tài liệu tóm tắt nội bộ về Async Python chuẩn 3.11-3.14+.",
        url: "docs/content/async_python_guide.md",
        moduleId: "mod-0",
        isFree: true
      },
      {
        id: "res-m0-2",
        title: "Async Python Playground (Ali Gheshlaghi)",
        type: "docs",
        description: "Trang web học và thực hành Async Python tương tác miễn phí.",
        url: "https://aligheshlaghi97.github.io/asynchronous-python/",
        moduleId: "mod-0",
        isFree: true
      },
      {
        id: "res-m0-3",
        title: "Python Official Docs - asyncio",
        type: "docs",
        description: "Trang tài liệu tra cứu chính thức của thư viện asyncio trong Python.",
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
    subtitle: "Nền Tảng Agentic AI, LCEL, Multi-LLM Provider & Project 1: Smart Q&A Bot",
    statusColor: "#22c55e",
    duration: "4 Ngày (24 Pomodoros / 20h)",
    objectives: [
      "Phân biệt Agentic AI vs AI truyền thống & nắm vững các thành phần cốt lõi",
      "Cấu hình Đa nhà cung cấp LLM (OpenAI, Anthropic), Prompt Templates & Output Parsers",
      "Xây dựng chuỗi LCEL hỗ trợ Realtime Streaming, Schema Inspection và Batch execution",
      "Hoàn thành Project 1: Smart Q&A Bot hỗ trợ đa mô hình"
    ],
    knowledgeToLoad: [
      "Agentic AI Concepts & Architecture (Khóa Packt - Chap 1-2)",
      "LangChain v1.0 Setup, LCEL Runnable Chains & Pipe operator | (Khóa Packt - Chap 2)",
      "Multi-provider LLM Configuration, Prompt Templates & Structured Outputs"
    ],
    deliverables: [
      {
        id: "m1-t1",
        title: "Setup môi trường Python 3.11+ & API Keys",
        description: "Khởi tạo môi trường Python, cài đặt langchain, langchain-openai, langchain-anthropic và cấu hình API Keys.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Setup", "Python", "API Keys"]
      },
      {
        id: "m1-t2",
        title: "Thực hành LCEL & Runnable Chains",
        description: "Viết các chuỗi LCEL cơ bản, thử nghiệm batch execution, realtime streaming và schema inspection.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["LCEL", "Runnable", "Streaming"]
      },
      {
        id: "m1-t3",
        title: "Cấu hình Multi-Model & Prompt Templates",
        description: "Tạo Prompt Templates, Messages (User, System, Assistant) và cấu hình chuyển đổi giữa OpenAI & Anthropic.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Prompt", "MultiModel", "Parsers"]
      },
      {
        id: "m1-t4",
        title: "Xây dựng Project 1: Smart Q&A Bot (Core Logic)",
        description: "Dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ Structured Output & Multi-model setup.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project1", "QA-Bot", "Core"]
      },
      {
        id: "m1-t5",
        title: "Hoàn thiện Project 1, Code Refactoring & Gemini Flashcards",
        description: "Kiểm thử các câu lệnh hỏi đáp, xử lý error handling, ôn tập Flashcards và commit code Project 1.",
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
        description: "Tài liệu chính thức giới thiệu về hệ sinh thái LangChain v1.0.",
        url: "https://python.langchain.com/docs/introduction/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-2",
        title: "LangChain Core Concepts",
        type: "docs",
        description: "Khái niệm cốt lõi về Runnable, LCEL, Chat Models và Output Parsers.",
        url: "https://python.langchain.com/docs/concepts/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-3",
        title: "Khóa Packt: Agentic AI Systems (Chapter 1-2)",
        type: "course",
        description: "Bài giảng video Packt về Agentic Concepts, LangChain Setup & LCEL Foundations.",
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
    subtitle: "Parallel Chains, RunnablePassthrough, Branching & Kỹ thuật Debugging",
    statusColor: "#eab308",
    duration: "2.7 Ngày (16 Pomodoros / 13.3h)",
    objectives: [
      "Làm chủ các mẫu thiết kế chuỗi xử lý: Parallel Chains, Passthrough & Branching",
      "Áp dụng RunnableLambda, RunnableBranch, Fallback Chains & Async Execution",
      "Nắm vững kỹ thuật Debugging chuỗi LangChain, Callbacks & Handlers"
    ],
    knowledgeToLoad: [
      "Basic & Parallel Chains with RunnablePassthrough, RunnableParallel (Khóa Packt - Chap 3)",
      "Chain Branching, Fallbacks & Dynamic Chain Composition",
      "Callbacks, Handlers & Chain Debugging Kỹ thuật"
    ],
    deliverables: [
      {
        id: "m2-t1",
        title: "Viết Parallel Chains & RunnablePassthrough",
        description: "Thực hành chạy song song các nhánh LLM kết hợp RunnablePassthrough và RunnableParallel.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["LCEL", "Parallel", "Passthrough"]
      },
      {
        id: "m2-t2",
        title: "Triển khai Branching Logic & Fallback Chains",
        description: "Sử dụng RunnableBranch và cấu hình Fallback Chains để xử lý lỗi linh hoạt.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Branching", "Fallbacks", "Dynamic"]
      },
      {
        id: "m2-t3",
        title: "Debug Chuỗi LangChain, Custom Callbacks & Handlers",
        description: "Viết custom callbacks, handlers để log chi tiết quá trình thực thi và debug chuỗi LCEL.",
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
        description: "Tài liệu chi tiết về Runnable Parallel, Passthrough và Branching.",
        url: "https://python.langchain.com/docs/concepts/#lcel",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-2",
        title: "Khóa Packt: Agentic AI Systems (Chapter 3 - Chain Patterns)",
        type: "course",
        description: "Video bài giảng Packt về Basic & Parallel Chains, RunnablePassthrough.",
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
    subtitle: "Docker Engine, Dockerfile Caching, Volumes & Docker Compose (Sections 1–7, 9, 10)",
    statusColor: "#0284c7",
    duration: "2.7 Ngày (16 Pomodoros / 13.3h)",
    objectives: [
      "Nắm vững Docker Engine vs VM, cài đặt Docker Desktop và lý do AI Backend cần Docker",
      "Viết Dockerfile tối ưu Layer Caching (python:3.11-slim) và các lệnh quản lý CLI",
      "Quản lý dữ liệu với Named Volumes & Bind Mounts (sync live-reload khi dev Agent)",
      "Cấu hình Docker Networking và viết docker-compose.yml kết nối Python App với PostgreSQL"
    ],
    knowledgeToLoad: [
      "Udemy Docker Guide - Sections 1-2: Docker Engine, Images & Containers",
      "Udemy Docker Guide - Sections 3-4: Managing Data, Volumes & Custom Networks",
      "Udemy Docker Guide - Sections 5-7, 9, 10: Docker Compose, Utility Containers & Production Summary"
    ],
    deliverables: [
      {
        id: "m3-t1",
        title: "Cài đặt Docker Desktop & viết Dockerfile tối ưu Layer Caching",
        description: "Tìm hiểu Docker Engine vs VM, viết Dockerfile chọn python:3.11-slim, cấu hình layer caching và quản lý CLI.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Docker", "Dockerfile", "Container"]
      },
      {
        id: "m3-t2",
        title: "Quản lý dữ liệu & Docker Networking (Volumes & Custom Networks)",
        description: "Tạo Named Volumes lưu CSDL bền vững, Bind Mounts live-reload code và Custom Docker Networks.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Volumes", "Networking", "BindMount"]
      },
      {
        id: "m3-t3",
        title: "Viết file docker-compose.yml kết nối Multi-Container App",
        description: "Cấu hình docker-compose.yml tự động kết nối Python App với PostgreSQL DB, cấu hình environment & depends_on.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["DockerCompose", "MultiContainer", "PostgreSQL"]
      },
      {
        id: "m3-t4",
        title: "Thực hành Utility Containers, docker exec & Docker Wrap-up",
        description: "Dùng docker exec kiểm tra container, chạy Utility Container cho migration script và tổng kết Docker.",
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
        description: "Khóa học chính của Maximilian Schwarzmüller (Học Sections 1–7, 9 [lọc 50%], 10).",
        url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/",
        moduleId: "mod-3",
        isFree: false
      },
      {
        id: "res-m3-2",
        title: "Docker Official Documentation & Compose Spec",
        type: "docs",
        description: "Trang tài liệu tra cứu chính thức của Docker Engine và Docker Compose Specification.",
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
    subtitle: "Xử Lý Tài Liệu PDF/Scanned với LlamaParse, Text Splitting & ChromaDB",
    statusColor: "#f97316",
    duration: "3.8 Ngày (23 Pomodoros / 19.2h)",
    objectives: [
      "Sử dụng các Document Loaders: TextLoader, WebLoader, LazyLoader, PDF Loader",
      "Parse tài liệu phức tạp: Trích xuất bảng biểu & scanned PDF sang Markdown bằng LlamaParse",
      "Làm chủ các chiến lược cắt đoạn (Chunking): RecursiveCharacterTextSplitter, Chunk Overlap, MarkdownHeaderSplitter",
      "Xây dựng Vector Store với ChromaDB: Similarity Search with Scores, Metadata Filtering & Persistence"
    ],
    knowledgeToLoad: [
      "Document Loading & Parsing (Khóa Packt - Chap 4)",
      "Complex Document Parsing với LlamaParse (DeepLearning.AI LlamaIndex course)",
      "Text Splitting Strategies & Chunk Overlap Tuning",
      "ChromaDB Architecture, Vector Retriever & Metadata Filtering"
    ],
    deliverables: [
      {
        id: "m4-t1",
        title: "Thực hành Document Loaders (Text, Web, PDF)",
        description: "Sử dụng TextLoader, WebBaseLoader, PyPDFLoader để trích xuất văn bản từ nhiều nguồn.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Loaders", "PDF", "Ingestion"]
      },
      {
        id: "m4-t2",
        title: "Tích hợp LlamaParse trích xuất Bảng biểu & Scanned PDF",
        description: "Sử dụng LlamaParse chuyển đổi bảng biểu phức tạp và PDF quét từ hình ảnh sang Markdown chuẩn.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LlamaParse", "Tables", "ComplexDoc"]
      },
      {
        id: "m4-t3",
        title: "Thực hành Text Splitting & Chunk Overlap",
        description: "Thực nghiệm RecursiveCharacterTextSplitter, CodeSplitter và MarkdownHeaderSplitter.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Chunking", "Splitter", "Overlap"]
      },
      {
        id: "m4-t4",
        title: "Cấu hình Vector Store ChromaDB & Metadata Filtering",
        description: "Khởi tạo ChromaDB, tạo Embeddings, chạy Similarity Search với scores và áp dụng metadata filter.",
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
        description: "Tài liệu hướng dẫn sử dụng Chroma Vector Database.",
        url: "https://docs.trychroma.com/",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-2",
        title: "DeepLearning.AI: Building Agentic RAG with LlamaIndex (LlamaParse)",
        type: "course",
        description: "Khóa học miễn phí hướng dẫn trích xuất tài liệu phức tạp & bảng biểu bằng LlamaParse.",
        url: "https://learn.deeplearning.ai/courses/building-agentic-rag-with-llamaindex",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-3",
        title: "Khóa Packt: Agentic AI Systems (Chapter 4 - Document Ingestion)",
        type: "course",
        description: "Video bài giảng về Document Ingestion, Chunking & ChromaDB.",
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
    duration: "7.2 Ngày (43 Pomodoros / 35.8h)",
    objectives: [
      "Xây dựng Advanced RAG Pipeline: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Doc",
      "Triển khai CSDL Vector Production pgvector với PostgreSQL (HNSW & IVFFlat Indexing)",
      "Làm chủ Memory Patterns: Multiple Sessions, Message Trimming, Summary & Persistent Memory",
      "Hoàn thành Project 2: AI Research Assistant"
    ],
    knowledgeToLoad: [
      "Advanced RAG Architecture (Khóa Packt - Chap 5)",
      "PostgreSQL + pgvector setup & HNSW/IVFFlat indexing (BugBytes course)",
      "Memory Systems: Conversation, Windowed, Summary, Persistent Memory"
    ],
    deliverables: [
      {
        id: "m5-t1",
        title: "Basic RAG Pipeline, Fallback & Structured Outputs",
        description: "Xây dựng pipeline RAG cơ bản tích hợp fallback model và structured response.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["RAG", "Fallback", "StructuredOutput"]
      },
      {
        id: "m5-t2",
        title: "Triển khai Advanced RAG (Multi-Query, Compression, Hybrid Search)",
        description: "Cài đặt Multi-Query Retriever, Contextual Compression, Hybrid Search và Parent Document Retriever.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["MultiQuery", "Compression", "HybridSearch"]
      },
      {
        id: "m5-t3",
        title: "Setup PostgreSQL & Extension pgvector (HNSW Index & Vector Query)",
        description: "Thiết lập PostgreSQL, kích hoạt extension pgvector, tạo HNSW/IVFFlat index và truy vấn kết hợp SQL + Vector.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["pgvector", "PostgreSQL", "HNSW"]
      },
      {
        id: "m5-t4",
        title: "Xây dựng Memory System đa phiên hội thoại & Summary Memory",
        description: "Tích hợp Conversation Summary Memory, Message Trimming và lưu giữ session history.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["Memory", "Sessions", "Summary"]
      },
      {
        id: "m5-t5",
        title: "Xây dựng Project 2: AI Research Assistant (Core Pipeline & pgvector)",
        description: "Khởi tạo ứng dụng Trợ lý nghiên cứu AI với Ingestion pipeline, pgvector storage & Memory đa phiên.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["Project2", "ResearchAssistant", "Core"]
      },
      {
        id: "m5-t6",
        title: "Hoàn thiện Project 2: AI Research Assistant (Multi-Query & Export)",
        description: "Đấu nối Multi-Query Retrieval, render báo cáo dạng Markdown và hoàn thành testing.",
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
        description: "Hướng dẫn toàn diện về RAG từ cơ bản đến nâng cao.",
        url: "https://python.langchain.com/docs/tutorials/rag/",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-2",
        title: "BugBytes: LangChain & pgvector Video & Code Guide",
        type: "course",
        description: "Hướng dẫn video và code thực hành kết hợp LangChain với PostgreSQL pgvector.",
        url: "https://youtu.be/GYwhDkwCdt8",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-3",
        title: "Khóa Packt: Agentic AI Systems (Chapter 5 - Advanced RAG & Memory)",
        type: "course",
        description: "Video bài giảng Packt về Advanced RAG, Context Compression & Memory Patterns.",
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
    duration: "5 Ngày (30 Pomodoros / 25h)",
    objectives: [
      "Làm chủ 3 trụ cột LangGraph: StateGraph, Reducers, Accumulating State & Message State",
      "Thiết kế Multi-Node Pipelines & Routing: Edges, Conditional Edges, Multipath Routing",
      "Xây dựng vòng lặp tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer Agent",
      "Cấu hình Human-in-the-loop (Interrupt for Approval) & Checkpointer Persistence"
    ],
    knowledgeToLoad: [
      "StateGraph Architecture & State Reducers (Khóa Packt - Chap 6)",
      "Control Flow: Routing, Cycles, Self-Correction Pattern",
      "Persistence Internals & Human Approval Interrupts"
    ],
    deliverables: [
      {
        id: "m6-t1",
        title: "Khởi tạo LangGraph StateGraph, Reducers & Message State",
        description: "Định nghĩa Agent State, Reducers và tạo đồ thị đơn giản với Nodes và Edges.",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["LangGraph", "StateGraph", "Reducers"]
      },
      {
        id: "m6-t2",
        title: "Triển khai Routing & Conditional Edges",
        description: "Xây dựng Router Node điều hướng luồng suy luận (Literal & Multipath Routing).",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["Routing", "ConditionalEdges", "ControlFlow"]
      },
      {
        id: "m6-t3",
        title: "Xây dựng Self-Correcting Code Writer Loop",
        description: "Tạo vòng lặp tự sinh mã, chạy kiểm thử và tự động sửa lỗi code dựa trên error traceback.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["SelfCorrecting", "Loops", "Agent"]
      },
      {
        id: "m6-t4",
        title: "Tích hợp Human-in-the-loop & Checkpointing Persistence",
        description: "Thêm tính năng tạm dừng chờ con người phê duyệt (Interrupt) và lưu checkpoint trạng thái đồ thị.",
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
        description: "Trang tài liệu chính thức của LangGraph framework.",
        url: "https://langchain-ai.github.io/langgraph/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-2",
        title: "LangGraph How-To Guides",
        type: "docs",
        description: "Bộ hướng dẫn thực hành Persistence, Human-in-the-loop & Time-travel.",
        url: "https://langchain-ai.github.io/langgraph/how-tos/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-3",
        title: "Khóa Packt: Agentic AI Systems (Chapter 6 - LangGraph Deep Dive)",
        type: "course",
        description: "Video bài giảng chuyên sâu LangGraph Deep Dive.",
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
    duration: "8.7 Ngày (52 Pomodoros / 43.3h)",
    objectives: [
      "Xây dựng hệ thống Multi-Agent với CrewAI (Agents, Tasks, Crew, Sequential & Hierarchical)",
      "Thiết kế Đa Agent trên LangGraph: Supervisor Pattern, Agent Handoffs, Map-Reduce & Shared State",
      "Điều phối Sub-agents chuyên biệt & Tracing kiến trúc phân cấp",
      "Hoàn thành Project 3: Multi-Agent Research System"
    ],
    knowledgeToLoad: [
      "CrewAI Multi-Agent Setup (DeepLearning.AI CrewAI Course)",
      "LangGraph Multi-Agent Patterns: Supervisor, Handoffs, Map-Reduce (Khóa Packt - Chap 7)",
      "Sub-agents design & coordination (Hugging Face Context Course Unit 4)"
    ],
    deliverables: [
      {
        id: "m7-t1",
        title: "Xây dựng Multi-Agent System với CrewAI",
        description: "Cài đặt CrewAI, định nghĩa Agents (Researcher, Writer), Tasks và thực thi luồng làm việc.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["CrewAI", "MultiAgent", "Tasks"]
      },
      {
        id: "m7-t2",
        title: "Triển khai Supervisor Agent Pattern trên LangGraph",
        description: "Tạo Supervisor Node phân phối công việc cho các Worker Agents và nhận kết quả phản hồi.",
        hoursEstimate: 9.2,
        pomodoros: 11,
        tags: ["LangGraph", "Supervisor", "Handoffs"]
      },
      {
        id: "m7-t3",
        title: "Thực hành Agent Handoffs, Shared Field State & Map-Reduce",
        description: "Thiết kế luồng Handoff giữa các Agent, chia sẻ trạng thái chung và áp dụng Map-Reduce.",
        hoursEstimate: 9.2,
        pomodoros: 11,
        tags: ["Handoffs", "SharedState", "MapReduce"]
      },
      {
        id: "m7-t4",
        title: "Xây dựng Project 3: Multi-Agent Research System (Phần 1)",
        description: "Thiết kế Custom State Schema, Supervisor Node & Worker Nodes cho dự án nghiên cứu đa agent.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Project3", "MultiAgent", "Architecture"]
      },
      {
        id: "m7-t5",
        title: "Hoàn thiện Project 3: Multi-Agent Research System (Phần 2)",
        description: "Áp dụng Send API cho Map-Reduce strategy, kiểm thử tích hợp và hoàn thiện dự án.",
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
        description: "Khóa học miễn phí giảng dạy trực tiếp bởi sáng lập CrewAI (João Moura).",
        url: "https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-2",
        title: "Hugging Face Context Course (Unit 4: Sub-agents)",
        type: "course",
        description: "Khóa học miễn phí về thiết kế và điều phối sub-agents chuyên biệt.",
        url: "https://huggingface.co/learn/context-course/unit4/introduction",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-3",
        title: "CrewAI Official Documentation",
        type: "docs",
        description: "Tài liệu chính thức về CrewAI framework.",
        url: "https://docs.crewai.com/",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-4",
        title: "Khóa Packt: Agentic AI Systems (Chapter 7 - Multi-Agent LangGraph)",
        type: "course",
        description: "Video bài giảng Packt về Supervisor Pattern, Agent Handoffs & Map-Reduce.",
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
    subtitle: "LangSmith, Security LLM Guard, Agent Evals (Arize/Ragas) & Project 4: Cloud Render API",
    statusColor: "#a855f7",
    duration: "11 Ngày (66 Pomodoros / 55h)",
    objectives: [
      "Cấu hình Observability: LangSmith Tracing, Sub-agent tracking & Agent Hooks",
      "Thiết lập Security Layer: PII Detection, Prompt Injection Defense, LLM Guard (Smart Bouncer)",
      "Triển khai RAG & Agent Evaluation: Arize AI / Ragas (Faithfulness, Relevance, LLM-as-a-Judge)",
      "Cấu hình Resilience: Circuit Breaker, Fallback Chain, Model Router & Semantic Caching",
      "Hoàn thành Project 4: Production LangGraph API + FastAPI + Docker + Cloud Render Deployment"
    ],
    knowledgeToLoad: [
      "LangSmith Tracing & Observability (Khóa Packt - Chap 8)",
      "Evaluating AI Agents với Arize AI (DeepLearning.AI Course)",
      "Security Defense-in-Depth & LLM Guard (Khóa Packt - Chap 8)",
      "FastAPI Integration, Multi-container Docker & Render Cloud Deployment"
    ],
    deliverables: [
      {
        id: "m8-t1",
        title: "Cấu hình LangSmith Tracing & Agent Hooks",
        description: "Gắn LangSmith Tracing, theo dõi sub-agents và sử dụng Agent Hooks để giám sát vòng đời Agent.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["LangSmith", "Tracing", "Hooks"]
      },
      {
        id: "m8-t2",
        title: "Thiết lập Security Layer (PII Detection & Prompt Injection Defense)",
        description: "Tích hợp LLM Guard (Smart Bouncer), PII Detection và chống tấn công Prompt Injection.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Security", "LLMGuard", "PromptInjection"]
      },
      {
        id: "m8-t3",
        title: "Triển khai Evaluation & LLM-as-a-Judge với Arize AI / Ragas",
        description: "Viết bộ test tự động đánh giá Faithfulness, Answer Relevance và Context Recall bằng Arize AI / Ragas.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Evaluation", "ArizeAI", "Ragas"]
      },
      {
        id: "m8-t4",
        title: "Xây dựng Resilience, Model Router & Semantic Cache",
        description: "Cài đặt Circuit Breaker, Fallback Chain, Semantic Caching để tối ưu chi phí token và độ tin cậy.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["Resilience", "Cache", "CircuitBreaker"]
      },
      {
        id: "m8-t5",
        title: "Xây dựng Project 4: Production API Packaging với FastAPI & Docker",
        description: "Đấu nối LangGraph Agent với FastAPI Server, viết Dockerfile & docker-compose.yml.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Project4", "FastAPI", "Docker"]
      },
      {
        id: "m8-t6",
        title: "Hoàn thiện Project 4: Triển khai Cloud Render & E2E Testing",
        description: "Deploy ứng dụng Production-Ready API lên Render Cloud, test public endpoint và hoàn thành!",
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
        description: "Khóa học miễn phí hướng dẫn đánh giá chất lượng Agent với Arize AI.",
        url: "https://learn.deeplearning.ai/courses/evaluating-ai-agents",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-2",
        title: "Hugging Face Context Course (Unit 5: Agent Hooks & Observability)",
        type: "course",
        description: "Khóa học miễn phí về tự động hóa và giám sát vòng đời Agent.",
        url: "https://huggingface.co/learn/context-course/unit5/introduction",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-3",
        title: "LangSmith Observability & Tracing Docs",
        type: "docs",
        description: "Trang tài liệu giám sát và đánh giá LLM của LangSmith.",
        url: "https://docs.smith.langchain.com/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-4",
        title: "FastAPI & Render Cloud Guides",
        type: "docs",
        description: "Hướng dẫn dựng API hiệu năng cao và deploy ứng dụng Python/Docker lên Cloud Render.",
        url: "https://fastapi.tiangolo.com/tutorial/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-5",
        title: "Khóa Packt: Agentic AI Systems (Chapter 8 - LLMOps & Render Cloud)",
        type: "course",
        description: "Video bài giảng Packt về LangSmith Tracing, Security LLM Guard & Deploy Render.",
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
    subtitle: "Giao Thức Kết Nối Tools 2026: FastMCP Server, Stdio/SSE & Agent Integration",
    statusColor: "#06b6d4",
    duration: "2.7 Ngày (16 Pomodoros / 13.3h)",
    objectives: [
      "Nắm vững khái niệm cơ bản MCP Client/Server & vị trí trong hệ sinh thái AI Agent",
      "Tự viết FastMCP Server bằng Python cung cấp Custom Tools/Resources",
      "Kết nối LangChain Agent gọi MCP Tools qua Stdio/SSE Transports"
    ],
    knowledgeToLoad: [
      "MCP Architecture & Protocol Spec (Hugging Face Context Course Unit 2)",
      "FastMCP Python SDK & Tool Decorator Pattern",
      "Agent Connection & Transport Setup"
    ],
    deliverables: [
      {
        id: "m9-t1",
        title: "Nghiên cứu Kiến trúc MCP & FastMCP Python SDK",
        description: "Đọc specification MCP Client/Server, tìm hiểu Stdio & SSE Transports.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["MCP", "Protocol", "FastMCP"]
      },
      {
        id: "m9-t2",
        title: "Tự viết FastMCP Server cung cấp Tools/Resources",
        description: "Xây dựng MCP Server cung cấp Tool truy vấn dữ liệu/hệ thống bằng FastMCP SDK.",
        hoursEstimate: 4.2,
        pomodoros: 5,
        tags: ["FastMCP", "Python", "Server"]
      },
      {
        id: "m9-t3",
        title: "Kết nối LangChain Agent với FastMCP Server qua Stdio/SSE",
        description: "Viết Client Agent tự động kết nối và gọi Tools trên FastMCP Server.",
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
        description: "Khóa học miễn phí hướng dẫn thực hành kết nối công cụ qua Model Context Protocol.",
        url: "https://huggingface.co/learn/context-course/unit2/introduction",
        moduleId: "mod-9",
        isFree: true
      },
      {
        id: "res-m9-2",
        title: "Model Context Protocol Official Specification",
        type: "docs",
        description: "Trang tài liệu chuẩn chính thức của MCP bởi Anthropic.",
        url: "https://modelcontextprotocol.io/",
        moduleId: "mod-9",
        isFree: true
      },
      {
        id: "res-m9-3",
        title: "FastMCP Python SDK GitHub",
        type: "repo",
        description: "SDK Python chính thức giúp dựng MCP Server cực nhanh.",
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
    subtitle: "DeepSeek-R1 / Llama 3.3 Local với Ollama & Phục Vụ Inference Thông Lượng Cao vLLM",
    statusColor: "#10b981",
    duration: "3.3 Ngày (20 Pomodoros / 16.7h)",
    objectives: [
      "Chạy các mô hình mã nguồn mở (Llama 3.3, DeepSeek-R1) dưới Local/Offline với Ollama",
      "Làm chủ kiến trúc vLLM: PagedAttention, Continuous Batching, Quantization phục vụ inference",
      "Kết nối mô hình mã nguồn mở vào chuỗi LangChain/LangGraph"
    ],
    knowledgeToLoad: [
      "DeepLearning.AI & Red Hat Course: Fast & Efficient LLM Inference with vLLM",
      "Hugging Face AI Agents Course: smolagents framework & Function Calling Fine-tuning",
      "Ollama setup & vLLM server deployment"
    ],
    deliverables: [
      {
        id: "m10-t1",
        title: "Chạy Ollama Local với DeepSeek-R1 / Llama 3.3",
        description: "Cài đặt và tự chạy mô hình suy luận mã nguồn mở local bằng Ollama.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Ollama", "DeepSeek", "LocalLLM"]
      },
      {
        id: "m10-t2",
        title: "Cấu hình vLLM Server (PagedAttention & Continuous Batching)",
        description: "Triển khai vLLM Server phục vụ suy luận thông lượng cao gấp 6 lần cho production.",
        hoursEstimate: 5.8,
        pomodoros: 7,
        tags: ["vLLM", "PagedAttention", "Serving"]
      },
      {
        id: "m10-t3",
        title: "Tích hợp Endpoint vLLM vào LangChain LLM Client & smolagents",
        description: "Tạo LangChain LLM Client và smolagents kết nối endpoint vLLM local/cloud.",
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
        description: "Khóa học miễn phí hợp tác với Red Hat về kiến trúc vLLM & PagedAttention.",
        url: "https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm",
        moduleId: "mod-10",
        isFree: true
      },
      {
        id: "res-m10-2",
        title: "Hugging Face Agents Course (smolagents & Fine-tuning)",
        type: "course",
        description: "Khóa học miễn phí làm chủ framework smolagents & fine-tuning function calling.",
        url: "https://huggingface.co/learn/agents-course/unit2/smolagents/introduction",
        moduleId: "mod-10",
        isFree: true
      },
      {
        id: "res-m10-3",
        title: "vLLM Official Documentation",
        type: "docs",
        description: "Trang tài liệu hướng dẫn triển khai vLLM.",
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
    subtitle: "Giao Diện Web AI Hiện Đại: Vercel AI SDK (generateText, generateObject, useChat), Zod Structured Outputs, Caching & FastAPI Integration",
    statusColor: "#6366f1",
    duration: "4.5 Ngày (27 Pomodoros / 22.5h)",
    objectives: [
      "Khởi tạo dự án Web AI với Next.js App Router, Server Components, Dynamic Routes, TypeScript, TailwindCSS & Shadcn/ui",
      "Tích hợp Vercel AI SDK: generateText, Structured Outputs (generateObject + Zod schemas) và Streaming Hooks (useChat, useCompletion)",
      "Tối ưu chi phí với directive 'use cache' (tiết kiệm tới 97%), cấu hình Vercel AI Gateway, automatic failovers và logging",
      "Xây dựng Generative UI, Tool Calling UI và kết nối Next.js Frontend với FastAPI/LangGraph Backend, deploy lên Vercel"
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
        title: "Khởi tạo Next.js App Router, Vercel AI SDK & AI Gateway Setup",
        description: "Dựng khung ứng dụng Next.js, Server Components, cấu hình Vercel AI Gateway, API keys, TypeScript & Tailwind CSS.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["Nextjs", "VercelAISDK", "AIGateway", "Frontend"]
      },
      {
        id: "m11-t2",
        title: "AI Summary App: Structured Outputs (Zod) & Smart Caching (use cache)",
        description: "Trích xuất structured outputs (Pros/Cons/Themes) với generateObject + Zod, áp dụng directive 'use cache' giảm chi phí và prompt engineering.",
        hoursEstimate: 7.5,
        pomodoros: 9,
        tags: ["generateObject", "Zod", "useCache", "PromptEngineering"]
      },
      {
        id: "m11-t3",
        title: "Streaming Chat UI (useChat), Generative UI, Failover & Đấu nối FastAPI",
        description: "Dựng giao diện Chatbot streaming token realtime, Generative UI, graceful error handling/failovers, đấu nối FastAPI và deploy Vercel.",
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
        description: "Khóa học chính thức từ Vercel Academy (Eve Porcello): Xây dựng, tối ưu chi phí (use cache), structured outputs (Zod) và deploy AI app với Next.js & Vercel AI SDK.",
        url: "https://vercel.com/academy/ai-summary-app-with-nextjs",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-1",
        title: "freeCodeCamp: Build Support Agent with Vercel AI SDK",
        type: "course",
        description: "Hướng dẫn video xây dựng AI Support Agent với Vercel AI SDK, RAG & Tool Calling.",
        url: "https://www.youtube.com/watch?v=WKIjkxxNH0c",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-2",
        title: "Developers Digest: Agents 101 Tutorial",
        type: "course",
        description: "Hướng dẫn dựng Full-stack Next.js AI App kết hợp Vercel AI Gateway.",
        url: "https://www.developersdigest.tech/tutorials/eWs50bhFvMY",
        moduleId: "mod-11",
        isFree: true
      },
      {
        id: "res-m11-3",
        title: "Vercel AI SDK Documentation",
        type: "docs",
        description: "Trang tài liệu tra cứu chính thức của Vercel AI SDK.",
        url: "https://sdk.vercel.ai/docs",
        moduleId: "mod-11",
        isFree: true
      }
    ]
  },
  {
    id: "mod-12",
    moduleNum: 12,
    title: "Module 12 (Tùy chọn): MCP Masterclass (Anthropic Official Curriculum)",
    subtitle: "Anthropic Official MCP Masterclass: 3 Core Primitives, Sampling, Progress, Roots & StreamableHTTP",
    statusColor: "#f43f5e",
    duration: "5.7 Ngày (34 Pomodoros / 28.3h)",
    objectives: [
      "Làm chủ 3 Primitives cốt lõi: Tools, Resources, Prompts & Kiểm thử với MCP Inspector",
      "Làm chủ Advanced Primitives: Sampling (Server-initiated LLM calls), Progress Notifications, Roots",
      "Triển khai Transports: stdio vs StreamableHTTP cho Cloud/Serverless",
      "Nắm vững Enterprise Specification: OAuth CIMD, Header routing (Mcp-Method) & MCP Apps"
    ],
    knowledgeToLoad: [
      "Anthropic Official Course 1: Introduction to Model Context Protocol",
      "Anthropic Official Course 2: Model Context Protocol: Advanced Topics",
      "MCP 2026 Specification & Enterprise Security"
    ],
    deliverables: [
      {
        id: "m12-t1",
        title: "Thực hành MCP Core: Tools, Resources, Prompts & MCP Inspector",
        description: "Viết MCP Server với Python SDK hỗ trợ 3 Primitives cốt lõi và kiểm thử bằng MCP Inspector.",
        hoursEstimate: 8.3,
        pomodoros: 10,
        tags: ["MCP-Primitives", "Inspector", "Anthropic"]
      },
      {
        id: "m12-t2",
        title: "Thực hành Advanced Primitives: Sampling, Progress Notifications & Roots",
        description: "Cài đặt Sampling callbacks, phát thông báo tiến độ tác vụ và giới hạn phạm vi truy cập hệ thống tệp.",
        hoursEstimate: 10,
        pomodoros: 12,
        tags: ["Sampling", "Progress", "Roots"]
      },
      {
        id: "m12-t3",
        title: "Triển khai Transports (stdio vs StreamableHTTP) & Enterprise Specification",
        description: "Cấu hình StreamableHTTP transport cho Cloud/Serverless, OAuth CIMD và Header-based routing.",
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
        description: "Khóa học miễn phí từ Anthropic dạy 3 Core Primitives, Python SDK & MCP Inspector.",
        url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
        moduleId: "mod-12",
        isFree: true
      },
      {
        id: "res-m12-2",
        title: "Anthropic Official Course 2: MCP Advanced Topics",
        type: "course",
        description: "Khóa học miễn phí từ Anthropic dạy Sampling, Progress Notifications, Roots & StreamableHTTP.",
        url: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
        moduleId: "mod-12",
        isFree: true
      },
      {
        id: "res-m12-3",
        title: "Model Context Protocol Specification & Enterprise Architecture",
        type: "docs",
        description: "Trang tài liệu chuẩn kỹ thuật nâng cao MCP, Transports, Roots & Enterprise Specification.",
        url: "https://modelcontextprotocol.io/",
        moduleId: "mod-12",
        isFree: true
      }
    ]
  },
  {
    id: "mod-13",
    moduleNum: 13,
    title: "Module 13 (Tùy chọn): Advanced Async Python & System Concurrency",
    subtitle: "Low-level Futures, Synchronization Primitives, TaskGroup, Timeout & Queue Shutdown",
    statusColor: "#8b5cf6",
    duration: "2.7 Ngày (16 Pomodoros / 13.3h)",
    objectives: [
      "Làm chủ bản chất Low-level Futures, Loop Callbacks & Cấu trúc phân cấp Task -> Future -> Awaitable",
      "Điều phối tài nguyên dùng chung & tránh Race Conditions với Lock, Semaphore, Barrier & Event",
      "Structured Concurrency hiện đại với asyncio.TaskGroup & asyncio.timeout() (Python 3.11+)",
      "Xử lý lỗi nâng cao với ExceptionGroup (except*) & Queue Producer-Consumer (Queue.shutdown)"
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
        title: "Nạp lý thuyết Futures & Synchronization Primitives (Lock, Semaphore, Barrier)",
        description: "Hiểu bản chất asyncio.Future, sử dụng Lock, Semaphore, Barrier và Event để đồng bộ hóa tác vụ.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["Futures", "Lock", "Semaphore", "Barrier"]
      },
      {
        id: "m13-t2",
        title: "Thực hành Structured Concurrency (TaskGroup, timeout) & Queue Producer-Consumer",
        description: "Quản lý nhóm task với TaskGroup, giới hạn thời gian chạy bằng timeout() và viết pipeline Producer-Consumer.",
        hoursEstimate: 6.7,
        pomodoros: 8,
        tags: ["TaskGroup", "Timeout", "AsyncQueue"]
      },
      {
        id: "m13-t3",
        title: "Thực hành ExceptionGroup (except*), Queue.shutdown, Refactoring & Flashcards",
        description: "Bắt lỗi trong TaskGroup với except*, đóng hàng đợi an toàn với Queue.shutdown(), ôn tập Flashcards và commit Git.",
        hoursEstimate: 3.3,
        pomodoros: 4,
        tags: ["ExceptionGroup", "QueueShutdown", "Flashcards"]
      }
    ],
    resources: [
      {
        id: "res-m13-1",
        title: "Hướng Dẫn Async Python Hiện Đại (Up-to-Date) - Phần B",
        type: "docs",
        description: "Tài liệu tóm tắt nội bộ về Advanced Async Python (Chap 3, 4, 5 & 6).",
        url: "docs/content/async_python_guide.md#-phần-b-kỹ-thuật-async-nâng-cao-dành-cho-module-12-tùy-chọn",
        moduleId: "mod-13",
        isFree: true
      },
      {
        id: "res-m13-2",
        title: "Async Python Playground (Ali Gheshlaghi)",
        type: "docs",
        description: "Trang web học và thực hành Async Python tương tác cho Chapters 3, 4, 5 & 6.",
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
    description: "Giao diện web người dùng, streaming response token-by-token, tự động hóa low-code và trải nghiệm tương tác.",
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
    description: "Khung điều phối suy luận lặp, quản lý trạng thái, protocol giao tiếp và multi-agent ecosystem.",
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
    description: "Mô hình ngôn ngữ lớn thương mại API, mô hình mã nguồn mở và high-throughput serving engine.",
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
    description: "Cơ sở dữ liệu lưu trữ ngữ nghĩa Vector và tìm kiếm kết hợp Hybrid Search.",
    items: [
      { name: "ChromaDB", role: "Default Lightweight Open-Source Vector Database for RAG", isPrimaryChoice: true },
      { name: "PostgreSQL (pgvector)", role: "Enterprise Vector DB & Hybrid Search (HNSW / IVFFlat Index)", isPrimaryChoice: true },
      { name: "Qdrant", role: "Dedicated High-Performance Vector DB (Rust)", usageShare: "Dedicated Option" }
    ]
  },
  {
    layerNum: 5,
    name: "5. LLMOps & Observability & Security",
    description: "Theo dõi luồng suy luận (Tracing), bảo mật LLM Guard, kiểm soát chi phí token và kiểm thử chất lượng.",
    items: [
      { name: "LangSmith", role: "Deep Tracing, Datasets & Latency / Token Cost Debugging", isPrimaryChoice: true },
      { name: "LLM Guard (Smart Bouncer)", role: "PII Detection & Prompt Injection Defense Layer", isPrimaryChoice: true },
      { name: "Arize AI / Ragas", role: "Automated Evaluation (Faithfulness, Relevance, LLM-as-a-Judge)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 6,
    name: "6. Data Ingestion & Document AI",
    description: "Xử lý, trích xuất tài liệu phức tạp PDF/Markdown và cắt đoạn văn bản.",
    items: [
      { name: "LlamaParse", role: "Complex Document Parsing (Tables, Scanned PDF to Markdown)", isPrimaryChoice: true },
      { name: "LangChain Loaders & Splitters", role: "RecursiveCharacterTextSplitter, CodeSplitter, MarkdownSplitter", isPrimaryChoice: true },
      { name: "PyPDFLoader & WebBaseLoader", role: "Document Extraction & Lazy Loading", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 7,
    name: "7. Languages & Cloud Deployment",
    description: "Môi trường thực thi backend/frontend và hạ tầng triển khai Cloud.",
    items: [
      { name: "Python 3.11+", role: "Backend AI Engine & FastAPI", usageShare: "58% Dominant", isPrimaryChoice: true },
      { name: "TypeScript / Node 20+", role: "Frontend Web UI & Type Safety", usageShare: "44%", isPrimaryChoice: true },
      { name: "Docker & Docker MCP", role: "Containerization cho MCP & Multi-services", isPrimaryChoice: true },
      { name: "Render Cloud", role: "Production Web Service & API Cloud Hosting", isPrimaryChoice: true }
    ]
  }
];

export const QUIT_CRITERIA_DATA: QuitCriteriaData = {
  title: "Quit Criteria & Decision Matrix",
  subtitle: "Ma Trận Tra Cứu Ngưỡng Cảnh Báo (Trigger) & Hành Động Xoay Trục (Pivot Action) Cho 14 Modules",
  docPath: "docs/content/quit_criteria_guide.md",
  dailyProcess: [
    {
      stepNum: 1,
      title: "Rà soát Đầu Ca",
      description: "Kiểm tra định mức Pomodoro cho bài tập / task hiện tại.",
      iconName: "clipboardCheck"
    },
    {
      stepNum: 2,
      title: "Đo đạc Pomodoro",
      description: "Đếm chính xác số Pomodoro thực tế đã tiêu tốn cho task.",
      iconName: "timer"
    },
    {
      stepNum: 3,
      title: "Đối chiếu Trigger",
      description: "Nếu chạm ngưỡng > 150% định mức hoặc bị lỗi > 3 Poms, kích hoạt cảnh báo.",
      iconName: "alertTriangle"
    },
    {
      stepNum: 4,
      title: "Thực thi Pivot",
      description: "Tra cứu Ma trận Quyết định và thực hiện ngay hành động xoay trục không do dự.",
      iconName: "cornerUpRight"
    }
  ],
  decisionMatrix: [
    {
      moduleId: "mod-0",
      moduleNum: 0,
      moduleName: "Module 0: Python AsyncIO Foundations",
      quotaPoms: 6,
      trigger: "Mắc kẹt syntax async/await / Event Loop > 2 Poms",
      pivotAction: "Đọc tóm tắt async_python_guide.md & học tập trung code mẫu Chap 1-2, bỏ qua tự viết từ đầu."
    },
    {
      moduleId: "mod-1",
      moduleNum: 1,
      moduleName: "Module 1: LangChain Foundations",
      quotaPoms: 24,
      trigger: "Mắc kẹt setup API Keys / LCEL > 4 Poms",
      pivotAction: "Chuyển sang dùng OpenAI / Anthropic SDK thuần hoặc Google Colab."
    },
    {
      moduleId: "mod-2",
      moduleNum: 2,
      moduleName: "Module 2: Chain Patterns & LCEL",
      quotaPoms: 16,
      trigger: "Lỗi chuỗi đa nhánh RunnableParallel > 3 Poms",
      pivotAction: "Dùng code mẫu Runnable Sequence tuyến tính đơn giản."
    },
    {
      moduleId: "mod-3",
      moduleNum: 3,
      moduleName: "Module 3: Docker Essentials",
      quotaPoms: 16,
      trigger: "Mắc kẹt setup Dockerfile/Compose > 4 Poms",
      pivotAction: "Dùng template Docker Compose có sẵn hoặc Neon Cloud."
    },
    {
      moduleId: "mod-4",
      moduleNum: 4,
      moduleName: "Module 4: Data Ingestion & LlamaParse",
      quotaPoms: 23,
      trigger: "LlamaParse API lỗi parse PDF > 3 Poms",
      pivotAction: "Dùng PyPDFLoader mặc định, bỏ qua parse bảng phức tạp."
    },
    {
      moduleId: "mod-5",
      moduleNum: 5,
      moduleName: "Module 5: Advanced RAG & pgvector",
      quotaPoms: 43,
      trigger: "Lỗi CSDL PostgreSQL / pgvector > 6 Poms",
      pivotAction: "Dùng Neon Postgres Cloud hoặc quay lại ChromaDB local."
    },
    {
      moduleId: "mod-6",
      moduleNum: 6,
      moduleName: "Module 6: LangGraph Deep Dive",
      quotaPoms: 30,
      trigger: "Lỗi State Schema / Reducers > 5 Poms",
      pivotAction: "Dùng MessageState mặc định của LangGraph."
    },
    {
      moduleId: "mod-7",
      moduleNum: 7,
      moduleName: "Module 7: Multi-Agent Architectures",
      quotaPoms: 52,
      trigger: "Supervisor Agent bị lặp vô tận > 6 Poms",
      pivotAction: "Giảm số Worker Agents xuống 2, bỏ Blackboard Pattern."
    },
    {
      moduleId: "mod-8",
      moduleNum: 8,
      moduleName: "Module 8: Production LLMOps & Security",
      quotaPoms: 66,
      trigger: "Docker / Render Cloud deploy lỗi > 8 Poms",
      pivotAction: "Triển khai FastAPI Local + ngrok demo, bỏ Render Cloud."
    },
    {
      moduleId: "mod-9",
      moduleNum: 9,
      moduleName: "Module 9: MCP Quickstart",
      quotaPoms: 16,
      trigger: "FastMCP Transport SSE lỗi > 3 Poms",
      pivotAction: "Chỉ dùng Stdio Transport đơn giản."
    },
    {
      moduleId: "mod-10",
      moduleNum: 10,
      moduleName: "Module 10: Open-Source LLMs (vLLM)",
      quotaPoms: 20,
      trigger: "Máy local không đủ VRAM chạy vLLM > 3 Poms",
      pivotAction: "Dùng Ollama local hoặc Groq API (Free Cloud Inference)."
    },
    {
      moduleId: "mod-11",
      moduleNum: 11,
      moduleName: "Module 11: Full-Stack Web AI (Next.js)",
      quotaPoms: 27,
      trigger: "Next.js App Router / Tailwind lỗi > 5 Poms",
      pivotAction: "Dùng Streamlit hoặc FastAPI HTML UI."
    },
    {
      moduleId: "mod-12",
      moduleNum: 12,
      moduleName: "Module 12 (Tùy chọn): MCP Masterclass",
      quotaPoms: 34,
      trigger: "Bị chậm tiến độ tổng hợp > 1 tuần",
      pivotAction: "HỦY BỎ MODULE 12 (OPTIONAL), tập trung hoàn thiện Project 4.",
      isOptional: true
    },
    {
      moduleId: "mod-13",
      moduleNum: 13,
      moduleName: "Module 13 (Tùy chọn): Advanced Async Python",
      quotaPoms: 16,
      trigger: "Bị chậm tiến độ tổng hợp > 1 tuần",
      pivotAction: "HỦY BỎ MODULE 13 (OPTIONAL), tập trung hoàn thiện Project 4.",
      isOptional: true
    }
  ]
};
