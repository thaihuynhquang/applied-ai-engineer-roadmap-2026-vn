# 🚀 Hướng Dẫn Lộ Trình Tự Học Agentic AI Master Curriculum (2026)
## Khóa Packt LangChain/LangGraph + Các Khóa Học Bổ Sung

Hướng dẫn này cung cấp khung lộ trình học tập **Master Curriculum (12 Module Cốt Lõi + 2 Module Tùy Chọn)** được tích hợp hoàn chỉnh giữa:
1. 📹 **Khóa Packt (Core Engine & Production)**: [Agentic AI Systems: Build & Deploy with LangChain/LangGraph](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814) (Packt Publishing).
2. 📹 **Khóa Udemy (Docker Essentials)**: [Docker & Kubernetes: The Practical Guide](https://www.udemy.com/course/docker-kubernetes-the-practical-guide/) (Maximilian Schwarzmüller - Sections 1–7, 9 [lọc], 10).
3. 🆓 **Các Khóa Học Miễn Phí Bổ Sung (Free Supplemental Courses)** từ **Anthropic Academy**, **DeepLearning.AI**, **Vercel Academy**, **freeCodeCamp**, **Hugging Face**, **Neon Postgres**, **Async Python Playground (Ali Gheshlaghi)** và **MCP Official Docs** để bù đắp các khoảng trống công nghệ (Async Python, Web UI, `pgvector`, vLLM, LlamaParse, MCP Masterclass, RAG Evals).

Lộ trình bao gồm **12 Module cốt lõi (Module 0–11) + 2 Module nâng cao tùy chọn (Module 12 & Module 13)**, kết hợp giữa **Lý thuyết bài giảng** $\rightarrow$ **Hands-on Demos & Bài tập** $\rightarrow$ **4 Dự án thực tế lớn (Projects)**.

---

## 🗺️ Bức Tranh Tổng Quan Lộ Trình (14 Modules Overview)

```
[Module 0: AsyncIO] ──► [Module 1: LangChain] ──► [Module 2: LCEL Patterns] ──► [Module 3: Docker Essentials]
                                                                                            │
[Module 6: LangGraph] ◄── [Module 5: Advanced RAG & pgvector] ◄── [Module 4: Data Ingestion & LlamaParse] ◄─┘
       │
       ▼
[Module 7: Multi-Agent] ──► [Module 8: Production & Deploy] ──► [Module 9: MCP Quickstart]
                                                                            │
                                                                            ▼
[Module 13 (Tùy chọn): Advanced Async] ◄── [Module 12 (Tùy chọn): MCP Masterclass] ◄── [Module 11: Web AI] ◄── [Module 10: vLLM]
```

---

## 📚 Hướng Dẫn Chi Tiết Theo Các Module

### ⚡ Module 0: Python AsyncIO Foundations (Nền Tảng Căn Bản)
> **Mục tiêu**: Làm chủ các khái niệm bất đồng bộ căn bản trong Python (Coroutine, `async/await`, Event Loop, Task creation) kết hợp các cập nhật mới nhất chuẩn Python 3.11–3.14+ để sẵn sàng tiến vào xây dựng AI Engineering Backend.

* **1. Nội dung Kiến thức Cần nạp (Tập trung Chapters 1 & 2 + Tích hợp Python 3.11-3.14+)**:
  * **Chapter 1: Intro to Async Programming**: Phân biệt Synchronous vs Asynchronous, I/O-bound vs CPU-bound, Thread vs Process, tại sao AI/LLM Backend cần Async.
  * **Tích hợp GIL Update (PEP 703 - Python 3.13+)**: Tổng quan kiến thức Free-threaded CPython (`python3.13t` / `--disable-gil`), gỡ bỏ GIL giúp multithreading chạy song song thực sự.
  * **Chapter 2: Getting Started with `asyncio`**: Khai báo coroutine với `async def`, ngắt/chờ với `await`, nguyên lý Event Loop, khởi chạy với `asyncio.run()` & `asyncio.Runner()` (Python 3.11+).
  * **Tạo Task & Giữ tham chiếu (Garbage Collection Safety - Python 3.11+)**: Giữ strong reference cho biến task tạo từ `asyncio.create_task()`.
  * **Event Loop Lookup & Eager Task (`eager_task_factory` - Python 3.12+)**: Sử dụng `asyncio.get_running_loop()`, bật eager task factory giúp tăng tốc 2x-5x cho coroutine thực thi nhanh.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * ⚡ **Tài liệu tóm tắt nội bộ**: [Hướng Dẫn Async Python Hiện Đại (Up-to-Date)](./async_python_guide.md) (Xem **Phần A: Module 0 Essentials** chuẩn Python 3.11–3.14+).
  * 📖 **Tài liệu học chính (Miễn phí)**: [Async Python Playground (Ali Gheshlaghi)](https://aligheshlaghi97.github.io/asynchronous-python/) (Học Chapters 1 & 2).
  * 📖 **Tài liệu tra cứu chính thức**: [Python Official Docs - `asyncio`](https://docs.python.org/3/library/asyncio.html).
* **3. Nhiệm vụ Thực hành**:
  * **Phương pháp**: Đọc hiểu lý thuyết và thực hành chạy các ví dụ code mẫu trực tiếp từ *Async Python Playground* (Chap 1-2).
  * 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Synchronous vs Asynchronous`, `I/O-bound vs CPU-bound`, `Coroutine (async/await)`, `Event Loop`, `asyncio.run()`, `asyncio.create_task() (GC safety)`, `asyncio.get_running_loop()`, `Free-threaded GIL (PEP 703)`.

---

### 🟢 Module 1: LangChain & Agentic Foundations
> **Mục tiêu**: Nắm vững kiến trúc LangChain v1.0, LCEL, Runnable Chains, quản lý Multi-LLM provider, Prompt Templates và Output Parsers.

* **1. Nội dung Kiến thức Cần nạp**:
  * Tổng quan hệ sinh thái LangChain v1.0 & Thiết lập môi trường phát triển (Python, API Keys OpenAI & Anthropic) (*Khóa Packt - Chapter 1-2*).
  * Kiến trúc LCEL (LangChain Expression Language) & Runnable Chains: Batch execution, Realtime streaming, Schema inspection, Pipe operator (`|`).
  * Cấu hình Đa nhà cung cấp LLM (Multi Providers), Prompt Templates, Structured Outputs & Output Parsers.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Overview](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814) (Chapter 1-2).
  * 📖 **LangChain Overview**: [https://python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - Bài tập tự giải: *Build Your First Chain* & *Create a Multi-model Setup*.
  - 🛠️ **Project 1: Smart Q&A Bot** — Xây dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ đa mô hình và structured output.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `LCEL`, `RunnableSequence`, `RunnableParallel`, `Batch vs Streaming`, `Pipe operator (|)`, `Schema Inspection`, `Multi-LLM Setup`, `PromptTemplates`, `Structured Output`.

---

### 🟡 Module 2: Chain Patterns & Advanced LCEL
> **Mục tiêu**: Làm chủ các mẫu thiết kế chuỗi xử lý phức tạp (Parallel Chains, Passthrough, Branching) và kỹ thuật Debugging chuỗi.

* **1. Nội dung Kiến thức Cần nạp**:
  * Basic Chains & Parallel Chains (Chạy song song nhiều nhánh LLM) (*Khóa Packt - Chapter 3*).
  * `RunnablePassthrough`, Chain Branching & Kỹ thuật Debugging chuỗi LangChain.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 3](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 📖 **LCEL Concepts**: [https://python.langchain.com/docs/concepts/#lcel](https://python.langchain.com/docs/concepts/#lcel).
* **3. Nhiệm vụ Thực hành**:
  - Viết chuỗi xử lý đa nhánh kết hợp `RunnablePassthrough` và `RunnableParallel`.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `RunnablePassthrough`, `RunnableParallel`, `RunnableLambda`, `RunnableBranch`, `Chain Fallbacks`, `Dynamic Chain Composition`, `Callbacks & Handlers`, `Chain Debugging`, `Async Execution`.

---

### 🐋 Module 3: Docker & Containerization Essentials
> **Mục tiêu**: Làm chủ Docker & Docker Compose để đóng gói ứng dụng Python/AI Services và tạo môi trường làm việc local (Vector DB ChromaDB/PostgreSQL, Redis) sẵn sàng cho các Module dữ liệu tiếp theo.

* **1. Nội dung Kiến thức Cần nạp (Lọc từ 10 Sections Docker khóa Udemy)**:
  * **Section 1 (Getting Started)**: Khái niệm Docker Engine, Docker vs VM, cài đặt Docker Desktop. Lý do AI Backend cần Docker (tránh xung đột môi trường Python/CUDA/CSDL).
  * **Section 2 (Images & Containers)**: Phân biệt Image vs Container, viết `Dockerfile` tối ưu layer caching (`python:3.11-slim`), quản lý `requirements.txt`, các lệnh CLI (`docker build`, `run`, `stop`, `ps`, `rm`).
  * **Section 3 (Managing Data & Volumes)**: Named Volumes (lưu trữ dữ liệu bền vững cho CSDL/Vector DB, local models cache) & Bind Mounts (sync source code live-reload khi dev Agent).
  * **Section 4 (Networking)**: Host-to-Container port mapping (`-p`), Custom Docker Networks cho phép Python App kết nối trực tiếp với PostgreSQL qua DNS container name.
  * **Section 5 (Multi-Container Apps)**: Hiểu quy trình và sự cồng kềnh khi chạy nhiều container bằng CLI thủ công trước khi dùng Docker Compose.
  * **Section 6 (Docker Compose - Trọng tâm)**: Viết file `docker-compose.yaml` (`services`, `build`, `ports`, `volumes`, `environment`, `networks`, `depends_on`), quản lý với `docker compose up/down`.
  * **Section 7 (Utility Containers & Exec)**: Dùng `docker exec -it` vào container kiểm tra CSDL; dùng Utility Container chạy script Python/migration 1 lần rồi xóa (`--rm`).
  * **Section 9 (Deploying - Lọc 50%)**: Khái niệm Docker Registry (Docker Hub), biến môi trường Production, cấu hình `docker-compose.prod.yml` (Bỏ qua bài setup AWS EC2/ECS rườm rà).
  * **Section 10 (Docker Summary)**: Tổng kết toàn bộ kiến thức Docker Compose & Best Practices.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Udemy - Docker & Kubernetes: The Practical Guide (Maximilian Schwarzmüller)](https://www.udemy.com/course/docker-kubernetes-the-practical-guide/) (Học Sections 1–7, 9 [lọc], 10).
  * 📖 **Docs Tra cứu chính thức**: [Docker Official Documentation](https://docs.docker.com/) | [Docker Compose Specification](https://docs.docker.com/compose/).
* **3. Nhiệm vụ Thực hành**:
  * Viết `Dockerfile` đóng gói ứng dụng Python Starter & file `docker-compose.yml` kết nối ứng dụng với PostgreSQL database.
  * 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Docker Engine`, `Image vs Container`, `Dockerfile (Multi-stage/Layer Caching)`, `Named Volumes vs Bind Mounts`, `Docker Custom Networks`, `Docker Compose (docker-compose.yml)`, `docker exec`, `Docker Hub Registry`.

---

### 🟠 Module 4: Data Ingestion, Complex Document AI & Vector Stores
> **Mục tiêu**: Xử lý đa dạng định dạng tài liệu (bao gồm PDF/Tables phức tạp với LlamaParse), kỹ thuật Text Splitting và lưu trữ vector với ChromaDB.

* **1. Nội dung Kiến thức Cần nạp**:
  * Document Loaders: `TextLoader`, `WebLoader`, `LazyLoader`, PDF Loader (*Khóa Packt - Chapter 4*).
  * Parse tài liệu phức tạp: Sử dụng **LlamaParse** trích xuất bảng biểu, dạng scan/PDF nhiều cột sang Markdown.
  * Text Splitting Deep Dive: `RecursiveCharacterTextSplitter`, Chunk Overlap, `MarkdownHeaderSplitter`, `CodeSplitter`.
  * Embeddings & Vector Store: OpenAI Embedding, Free Embeddings, ChromaDB (Similarity Search with Scores, Metadata Filtering, Persistence).
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 4](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Building Agentic RAG with LlamaIndex](https://learn.deeplearning.ai/courses/building-agentic-rag-with-llamaindex) (Dạy LlamaParse & Complex Document Parsing).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Vector Stores Exercise & Solution*.
  - Viết pipeline Ingestion trích xuất bảng từ PDF bằng LlamaParse và lưu vào Vector Database.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Document Loaders`, `LlamaParse (Multimodal/Tables)`, `Text Splitting (Recursive/Overlap/Markdown/Code)`, `ChromaDB`, `Similarity Search vs MMR`, `Metadata Filtering`.

---

### 🔴 Module 5: Advanced RAG, Production `pgvector` & Memory Systems
> **Mục tiêu**: Xây dựng hệ thống RAG nâng cao (Multi-Query, Compression, Hybrid, Parent Doc), tích hợp CSDL Vector Production `pgvector` và quản lý bộ nhớ.

* **1. Nội dung Kiến thức Cần nạp**:
  * RAG Pipeline Architecture: Basic RAG, Fallback, Structured Outputs (*Khóa Packt - Chapter 5*).
  * Advanced RAG Strategies: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Document Retriever.
  * **Production Vector DB (`pgvector`)**: Cấu hình PostgreSQL với extension `pgvector` chạy trên Docker container, HNSW/IVFFlat Indexing, kết hợp SQL & Vector search.
  * Memory Patterns: Conversation Memory, Multiple Sessions Memory, Message Trimming, Windowed Memory, Summary Memory, Persistent Memory.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 5](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 📹 **Khóa học bổ sung miễn phí**: BugBytes — [LangChain and PGVector - Retrieval Augmented Generation](https://youtu.be/GYwhDkwCdt8) & [Tài liệu hướng dẫn kèm Code](https://bugbytes.io/posts/retrieval-augmented-generation-with-langchain-and-pgvector/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 2: AI Research Assistant** — Xây dựng trợ lý nghiên cứu AI hoàn chỉnh với Document Indexing, Memory đa phiên, Multi-Query Retrieval và `pgvector` backend.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Multi-Query Retriever`, `Contextual Compression`, `Hybrid Search`, `Parent Doc Retriever`, `pgvector (HNSW/IVFFlat)`, `Distance Metrics`, `Memory Patterns`.

---

### 🔵 Module 6: LangGraph - A Full Deep Dive
> **Mục tiêu**: Chuyển đổi từ chuỗi tuyến tính sang đồ thị luồng điều khiển (StateGraph), quản lý trạng thái, vòng lặp tự sửa lỗi và can thiệp từ con người.

* **1. Nội dung Kiến thức Cần nạp**:
  * Trụ cột LangGraph: `StateGraph`, Reducers, Accumulating State, Message State (*Khóa Packt - Chapter 6*).
  * Multi-Node Pipelines & Routing: Edges, Conditional Edges, Literal Routing, Multipath Routing.
  * Vòng lặp & Tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer, Iterative Research Agent.
  * Human in the Loop & Persistence: Interrupt for Approval, Checkpointing Deep Dive, Checkpoint Internals.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 6](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 📖 **LangGraph Official Docs**: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Build Your First Node*.
  - Xây dựng luồng Agent tự sửa mã nguồn (Self-Correcting Code Writer) với tính năng Human Interrupt.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `StateGraph`, `State Schema`, `Reducers`, `Nodes & Edges`, `Conditional Edges`, `Cycles & Self-Correcting Pattern`, `Human-in-the-Loop`, `Checkpointing`.

---

### 🟣 Module 7: Multi-Agent Architectures (CrewAI + LangGraph Multi-Agent)
> **Mục tiêu**: Thiết kế hệ thống Đa Agent linh hoạt — so sánh giữa CrewAI (phân vai tác nhiệm nhanh) và LangGraph Multi-Agent (đồ thị phân cấp chi tiết).

* **1. Nội dung Kiến thức Cần nạp**:
  * Đa Agent với **CrewAI**: Agents, Tasks, Crew, Sequential & Hierarchical Processes.
  * Đa Agent với **LangGraph**: Supervisor Agent, Agent Handoffs, Map-Reduce Strategy, Message Passing, Shared Field State, Blackboard Refinement (*Khóa Packt - Chapter 7*).
  * Kiến trúc phân cấp (Hierarchical Architecture) & Tracing.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 7](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Multi AI Agent Systems with crewAI](https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai) (giảng dạy trực tiếp bởi João Moura - Sáng lập CrewAI).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 4: Sub-agents)](https://huggingface.co/learn/context-course/unit4/introduction) (Thiết kế và điều phối sub-agents chuyên biệt).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 3: Multi-Agent Research System** — Xây dựng hệ thống nghiên cứu đa agent từ con số 0 với State Schema custom và Send API.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `CrewAI Framework`, `LangGraph Multi-Agent`, `Supervisor Agent`, `Agent Handoffs`, `Map-Reduce`, `Message Passing & Shared State`, `Blackboard Pattern`.

---

### 🟤 Module 8: Production Deployment, LLMOps, Security & Evaluation
> **Mục tiêu**: Bảo mật hệ thống, đánh giá chất lượng RAG/Agent (Ragas/Arize), giám sát với LangSmith, tối ưu chi phí và triển khai API Production (FastAPI + Docker + Render).

* **1. Nội dung Kiến thức Cần nạp**:
  * Observability: LangSmith Setup & Testing Traces (*Khóa Packt - Chapter 8*).
  * Security & Defense in Depth: PII Detection, Prompt Injection Attack Defense, LLM Guard (Smart Bouncer), Output Validator.
  * **RAG & Agent Evaluation**: Sử dụng **Arize AI / Ragas / TruLens** đánh giá Faithfulness, Answer Relevance, Context Recall và LLM-as-a-Judge.
  * Resilience & Error Handling: Circuit Breaker, Fallback Chain, Graph-Based Retry, Model Router, Semantic Caching.
  * Triển khai API Production: Đóng gói ứng dụng Full AI Stack bằng Docker Compose (`FastAPI + LangGraph Agent + pgvector + Redis + Next.js UI`) và deploy lên Cloud (Render).
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 8](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Evaluating AI Agents](https://learn.deeplearning.ai/courses/evaluating-ai-agents) (với Arize AI).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 5: Hooks)](https://huggingface.co/learn/context-course/unit5/introduction) (Tự động hóa & giám sát vòng đời Agent) & [AI Agents Course (Bonus Unit 2: Agent Observability)](https://huggingface.co/learn/agents-course/bonus-unit2/introduction).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 4: Production-Ready Full-Stack AI System (Final Project)** — Đóng gói LangGraph Agent + FastAPI + Security Layer + Dockerization + Triển khai thành công lên Cloud **Render**.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `LangSmith Tracing`, `Prompt Injection Defense`, `PII Detection`, `LLM Guardrails`, `RAG/Agent Evaluation (Ragas/Arize)`, `LLM-as-a-Judge`, `Docker & Render Deployment`.

---

### 🔌 Module 9: Model Context Protocol (MCP) Integration Quickstart
> **Mục tiêu**: Tích hợp nhanh giao thức kết nối công cụ mở Model Context Protocol (MCP) vào luồng phát triển AI Agent, tạo cầu nối kết nối Agent với các công cụ & nguồn dữ liệu bên ngoài.

* **1. Nội dung Kiến thức Cần nạp**:
  * Khái niệm cơ bản MCP Client/Server & vị trí của MCP trong hệ sinh thái AI Agent.
  * Thực hành tích hợp MCP Tool vào chuỗi Agent qua Stdio & SSE Transports bằng FastMCP SDK.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 2: MCP)](https://huggingface.co/learn/context-course/unit2/introduction) (Thực hành kết nối công cụ qua Model Context Protocol).
  * 📖 **Docs & SDK**: [MCP Official Docs](https://modelcontextprotocol.io/) | [FastMCP Python SDK](https://github.com/jlowin/fastmcp).
* **3. Nhiệm vụ Thực hành**:
  - Viết 1 FastMCP Server đơn giản cung cấp Tool kết nối hệ thống/API.
  - Tích hợp Agent gọi MCP Tool trong luồng xử lý LangChain.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `MCP Integration`, `FastMCP SDK`, `MCP Tools & Resources`, `Stdio / SSE Transports`, `Agent Tool Connection`.

---

### ⚡ Module 10: Open-Source LLMs & High-Throughput Serving (vLLM & Ollama)
> **Mục tiêu**: Làm chủ các mô hình AI mã nguồn mở (Llama 3.3, DeepSeek-R1), tự phục vụ local với Ollama và triển khai high-throughput server với vLLM.

* **1. Nội dung Kiến thức Cần nạp**:
  * Chạy mô hình mã nguồn mở dưới Local/Offline với **Ollama**.
  * Kiến trúc **vLLM (PagedAttention, Continuous Batching)**: Phục vụ inference thông lượng gấp 6 lần cho môi trường production.
  * Tích hợp mô hình mã nguồn mở vào chuỗi LangChain/LangGraph.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI & Red Hat — [Fast & Efficient LLM Inference with vLLM](https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm) & [vLLM Docs](https://docs.vllm.ai/).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [AI Agents Course: smolagents](https://huggingface.co/learn/agents-course/unit2/smolagents/introduction) (Làm chủ framework smolagents) & [Bonus Unit 1: Fine-tuning for Function Calling](https://huggingface.co/learn/agents-course/bonus-unit1/introduction).
* **3. Nhiệm vụ Thực hành**:
  - Cài đặt Ollama chạy mô hình DeepSeek/Llama local.
  - Cấu hình vLLM Server và tạo LangChain LLM Client kết nối vLLM endpoint.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Open-Source LLMs (Llama 3.3/DeepSeek)`, `Ollama Local`, `vLLM Architecture`, `PagedAttention`, `Continuous Batching`, `Quantization`, `smolagents`.

---

### 🌐 Module 11: Full-Stack Web AI Interface (Next.js & Vercel AI SDK)
> **Mục tiêu**: Xây dựng, tối ưu hóa và triển khai ứng dụng Web AI chuẩn Production (Product Review Summarizer & Chatbot UI) sử dụng Next.js App Router, Vercel AI SDK (`generateText`, `generateObject`, `useChat`), Zod Schema, Vercel AI Gateway và caching directive `use cache`.

* **1. Nội dung Kiến thức Cần nạp**:
  * **Next.js & Server Components**: Khởi tạo dự án Next.js (App Router, Server Components, Dynamic Routes, Static Generation, TypeScript, TailwindCSS, Shadcn/ui).
  * **Vercel AI SDK Core**:
    - Text generation trong Server Components với `generateText`.
    - Trích xuất Structured Outputs (Pros, Cons, Key Themes) với `generateObject` kết hợp schema validation bằng Zod.
    - Kỹ thuật Prompt Engineering: Few-shot examples, Tone guidance & Output cleanup.
    - Streaming UI & Hooks tương tác realtime (`useChat`, `useCompletion`), HTTP Streaming (SSE), Generative UI & Tool Calling UI.
  * **Tối ưu Hiệu Năng, Chi Phí & Production Readiness**:
    - Áp dụng directive `use cache` thông minh giúp giảm tới 97% chi phí API calls.
    - Vercel AI Gateway: Cấu hình API keys/env, Automatic model failover, Observability (structured logging, analytics, alerts).
    - Kết nối Frontend Next.js với Backend Agent FastAPI / LangGraph và triển khai Production trực tiếp lên Vercel Platform.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🎓 **Khóa Vercel Academy Official (Khuyên dùng)**: [Creating an AI Summary App with Next.js](https://vercel.com/academy/ai-summary-app-with-nextjs) (Instructor: Eve Porcello — Khóa học chính thức từ Vercel: Dựng ứng dụng AI Product Review Summarizer hoàn chỉnh với Next.js 16, Vercel AI SDK `generateText`/`generateObject`, Zod, directive `use cache`, AI Gateway & Vercel deploy).
  * 📹 **Khóa freeCodeCamp**: [Build a Support Agent with Vercel AI SDK](https://www.youtube.com/watch?v=WKIjkxxNH0c) (Hướng dẫn tự dựng AI Support Agent với RAG, Tool Calling và Web Search).
  * 📹 **Khóa 2 (Developers Digest)**: [Agents 101: Build and Deploy Anything with AI Agents](https://www.developersdigest.tech/tutorials/eWs50bhFvMY) (Hướng dẫn dựng Full-stack Next.js AI App + Vercel AI Gateway + CI/CD Deployment).
  * 📖 **Docs Tra cứu**: [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) | [Next.js App Router Docs](https://nextjs.org/docs).
* **3. Nhiệm vụ Thực hành**:
  - Dựng ứng dụng **AI Review Summarization App & Chatbot UI** chuyên nghiệp: trích xuất structured outputs (Pros/Cons/Themes) với Zod, caching tiết kiệm chi phí với `use cache`, streaming token realtime và kết nối API với FastAPI/LangGraph Backend.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `Next.js App Router & Server Components`, `Vercel AI SDK (generateText/generateObject/useChat)`, `Zod Structured Output`, `Directive use cache`, `Vercel AI Gateway & Model Failover`, `HTTP Streaming (SSE)`, `Generative UI & Tool Calling UI`, `FastAPI Integration`, `Vercel Deployment`.

---

### 🎓 Module 12 (Tùy chọn / Optional): Model Context Protocol (MCP) Masterclass (Anthropic Official Curriculum)
> 💡 **Lưu ý giảm tải khối lượng**: Module này là **Tùy chọn (Optional)**. Kiến thức MCP cơ bản tích hợp vào Agent đã được phủ ở **Module 9**. Bạn có thể tạm thời bỏ qua Module 12 để hoàn thành lộ trình cốt lõi nhanh hơn và quay lại khi cần đào sâu chuẩn MCP nâng cao từ Anthropic.
>
> **Mục tiêu**: (Tùy chọn) Làm chủ toàn diện chuẩn giao thức kết nối công cụ Model Context Protocol (MCP) từ kiến trúc nền tảng đến kỹ thuật nâng cao Production (Sampling, Roots, Progress, Transports & Security) dựa trên 2 khóa học chính thức từ Anthropic.

* **1. Nội dung Kiến thức Cần nạp**:
  * **Phần 1: MCP Core & 3 Primitives (Anthropic Intro Course)**:
    * Kiến trúc Host/Client/Server, cơ chế giao tiếp JSON-RPC & kiểm thử qua **MCP Inspector**.
    * **3 Primitives cốt lõi**: `Tools` (hàm thực thi), `Resources` (truy xuất dữ liệu chuẩn hóa), `Prompts` (reusable prompt templates).
    * Thực hành viết MCP Server & Client với Python SDK & FastMCP framework.
  * **Phần 2: Advanced Primitives & Transports (Anthropic Advanced Course)**:
    * **Advanced Primitives**: `Sampling` (Server-initiated LLM completions), `Progress Notifications` (thông báo tiến độ tác vụ), `Roots` (kiểm soát phạm vi truy cập hệ thống tệp).
    * **Transports**: So sánh và triển khai giữa `stdio` (local process) và `StreamableHTTP` (giao tiếp qua mạng cho Cloud/Serverless).
  * **Phần 3: Enterprise Auth & 2026 Specification**:
    * Chuẩn OAuth Client ID Metadata Documents (CIMD), Header-based routing (`Mcp-Method`, `Mcp-Name`), MCP Apps (iframe UIs) và `io.modelcontextprotocol/tasks` extension.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🎓 **Khóa Anthropic Official 1 (Free)**: [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) (Học 3 Primitives cốt lõi, Client/Server Python SDK, MCP Inspector).
  * 🎓 **Khóa Anthropic Official 2 (Free)**: [Model Context Protocol: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) (Học Sampling, Progress, Roots, stdio vs StreamableHTTP).
  * 📖 **Docs & Spec**: [MCP Official Spec](https://modelcontextprotocol.io/) | [FastMCP Python SDK](https://github.com/jlowin/fastmcp).
* **3. Nhiệm vụ Thực hành**:
  - Xây dựng 1 MCP Server hoàn chỉnh bằng Python SDK hỗ trợ full 3 Primitives (`Tools`, `Resources`, `Prompts`) kết hợp với **Sampling callback** và hỗ trợ `StreamableHTTP` transport.
  - Sử dụng **MCP Inspector** để kiểm tra và debug toàn bộ các luồng giao tiếp tin nhắn.


---

### ⚡ Module 13 (Tùy chọn / Optional): Advanced Async Python & System Concurrency
> 💡 **Lưu ý giảm tải khối lượng**: Module này là **Tùy chọn (Optional)** nằm ở cuối lộ trình học. Sau khi tốt nghiệp 12 Module Cốt Lõi, bạn có thể học tiếp Module này để làm chủ hoàn toàn các kỹ thuật bất đồng bộ low-level, đồng bộ hóa tài nguyên nâng cao và điều phối hệ thống.

* **1. Nội dung Kiến thức Cần nạp (Tập trung Chapters 3, 4, 5 & Chap 6 Advanced)**:
  * **Chapter 3: Low-Level Futures**: Cấu trúc `Task` -> `Future` -> `Awaitable`, kết nối callback legacy với async code qua `set_result()` / `set_exception()`.
  * **Chapter 4: Synchronization Primitives**: Quản lý race conditions & rate-limit với `asyncio.Lock`, `asyncio.Semaphore`, `asyncio.Barrier`, `asyncio.Event`.
  * **Chapter 5: Advanced Async & Structured Concurrency**: `asyncio.TaskGroup`, `asyncio.timeout()`, lan truyền exception với `ExceptionGroup` (`except*`), Task cancellation message, Hàng đợi `asyncio.Queue` (Producer-Consumer).
  * **Chapter 6 Advanced**: API đóng hàng đợi `asyncio.Queue.shutdown()` (Python 3.13+), mặc định start method POSIX `spawn`/`forkserver` cho `multiprocessing` (Python 3.14+).
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * ⚡ **Tài liệu tóm tắt nội bộ**: [Hướng Dẫn Async Python Hiện Đại (Up-to-Date)](./async_python_guide.md) (Xem **Phần B: Module 13 Optional Advanced**).
  * 📖 **Tài liệu học chính (Miễn phí)**: [Async Python Playground (Ali Gheshlaghi)](https://aligheshlaghi97.github.io/asynchronous-python/) (Chapters 3, 4, 5 & 6).
* **3. Nhiệm vụ Thực hành**:
  - Viết pipeline Producer-Consumer đa luồng với `asyncio.Queue` hỗ trợ `TaskGroup` và `asyncio.Semaphore`.
  - 🗂️ **Mock Interview bằng Flashcards (Gemini Notebook)**: Keywords: `asyncio.Future`, `asyncio.Lock`, `asyncio.Semaphore`, `asyncio.Barrier`, `asyncio.TaskGroup`, `asyncio.timeout()`, `ExceptionGroup (except*)`, `asyncio.Queue (Producer-Consumer)`.
