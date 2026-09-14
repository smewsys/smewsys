import {
  Brain,
  Database,
  FileSearch,
  Lock,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const aiSolutionsDetail: ServiceDetail = {
  id: "ai-solutions",
  slug: "ai-solutions",
  title: "AI Solutions",
  badge: "Service Discipline",
  heroHeadline: "Pragmatic AI engineering and intelligent systems for real business impact",
  heroSubheadline:
    "We design, build, and deploy production-grade AI solutions, Retrieval-Augmented Generation (RAG) pipelines, and custom machine learning workflows embedded directly into your core business systems.",
  metaDescription:
    "SMEWSYS delivers enterprise AI solutions: custom LLM integrations, Retrieval-Augmented Generation (RAG) architectures, intelligent document extraction, and autonomous agent workflows. Pragmatic, secure, and hallucination-resistant.",

  summary: {
    headline: "Moving beyond AI novelty to measurable enterprise value",
    description:
      "Generative AI and machine learning are powerful transformative tools when engineered with technical discipline, private domain boundaries, and strict data governance. SMEWSYS bridges the gap between foundational AI models and real business operations. We build private knowledge assistants, automated document extraction pipelines, and intelligent search systems that eliminate hallucination risks, safeguard proprietary data, and generate measurable ROI.",
    highlights: [
      {
        title: "Enterprise Data Privacy & Sovereignty",
        description: "Zero training on your proprietary data. All inference runs through private enterprise endpoints or self-hosted open-weights models.",
        metric: "100% Data Confidentiality",
      },
      {
        title: "Hallucination-Resistant RAG",
        description: "Vector embeddings, hybrid lexical search, and multi-stage re-ranking algorithms that anchor model answers strictly to verified corporate documents.",
        metric: "Citations & Evidence Verified",
      },
      {
        title: "Deterministic API Integration",
        description: "Structured JSON schemas and automated function calling that convert unstructured model outputs into reliable inputs for your ERP, CRM, and databases.",
        metric: "Type-Safe Automation",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Exploring practical AI integrations for your business workflows?",
    description: "Whether building an internal knowledge search engine, automating complex data extraction, or embedding smart copilots, our AI engineers can guide your architecture.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "Overcoming the hurdles of enterprise AI adoption",
    description:
      "Most enterprise AI experiments stall in proof-of-concept stages due to data privacy concerns, hallucinations, and lack of integration with existing systems.",
    items: [
      {
        title: "Hallucinations & Erroneous Answers",
        description:
          "Generic consumer AI tools invent facts when uncertain, creating massive compliance, financial, and reputational risk for commercial enterprises.",
        impact: "Grounded Retrieval-Augmented Generation (RAG) ensures answers cite exact source documents.",
      },
      {
        title: "Data Leakage & Privacy Violations",
        description:
          "Pasting confidential business data, contracts, or customer records into public AI chats risks violating GDPR, HIPAA, and IP agreements.",
        impact: "Zero-retention enterprise agreements and private VPC deployments safeguard proprietary intelligence.",
      },
      {
        title: "Unstructured Data Locked in Documents",
        description:
          "Valuable organizational intelligence trapped inside millions of PDFs, invoices, emails, and legacy documents remains unreachable by search.",
        impact: "Automated OCR and multimodal parsing convert unstructured PDFs into searchable structured databases.",
      },
      {
        title: "Disconnected AI That Doesn't Take Action",
        description:
          "Chatbots that can only generate prose without triggering real actions in your ERP, CRM, or database fail to create meaningful productivity gains.",
        impact: "Function-calling agent workflows execute real backend transactions with automated human approval gates.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Practical AI systems engineered for enterprise workflows",
    description:
      "We design and build bespoke AI applications that deliver measurable productivity improvements, accurate answers, and automated data operations.",
    items: [
      {
        title: "Intelligent Search & RAG Knowledge Bases",
        description:
          "Custom search engines that allow internal employees or clients to query vast corporate documentation and receive instant, source-cited answers.",
        features: [
          "Hybrid vector + keyword search with cross-encoder re-ranking",
          "Exact document citation and source passage highlighting",
          "Role-based permission filtering (users only see docs they have access to)",
        ],
      },
      {
        title: "Automated Document & Invoice Extraction",
        description:
          "Vision and multimodal AI pipelines that ingest scanned PDFs, receipts, contracts, and claims, extracting structured JSON into operational databases.",
        features: [
          "High-accuracy optical character recognition (OCR) and layout parsing",
          "Automated schema validation and confidence scoring thresholds",
          "Human-in-the-loop review interface for borderline confidence scores",
        ],
      },
      {
        title: "Custom Domain Copilots & Assistants",
        description:
          "Specialized AI assistants embedded within web apps that help users complete complex technical tasks, draft responses, and analyze data.",
        features: [
          "Strict system prompts, guardrails, and toxic output filtering",
          "Context-aware user session memory and conversation management",
          "One-click action execution into connected backend APIs",
        ],
      },
      {
        title: "Predictive Analytics & Classification Pipelines",
        description:
          "Machine learning models that analyze historical operational data to predict demand, categorize tickets, and detect anomalous activity.",
        features: [
          "Automated customer support ticket categorization and routing",
          "Predictive churn scoring and proactive retention triggers",
          "Time-series operational forecasting and anomaly detection",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Our AI engineering capabilities",
    description:
      "We engineer reliable, end-to-end AI pipelines — from data ingestion and embedding vectorization to low-latency model inference and safety guardrails.",
    items: [
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Architecting enterprise knowledge retrieval systems that ground LLM outputs in verified internal corporate data repositories.",
        icon: FileSearch,
        details: [
          "Vector databases (Pinecone, Qdrant, pgvector)",
          "Chunking strategies (semantic, recursive, hierarchical)",
          "Cohere / BGE cross-encoder re-ranking",
        ],
      },
      {
        title: "LLM Orchestration & Function Calling",
        description:
          "Connecting language models to business databases and external APIs using structured outputs and deterministic validation schemas.",
        icon: Workflow,
        details: [
          "LangChain, LlamaIndex, and custom orchestration",
          "Deterministic JSON schema enforcement (Zod / Pydantic)",
          "Parallel tool execution and error handling",
        ],
      },
      {
        title: "Private & Open-Weights Model Hosting",
        description:
          "Deploying open-source models (Llama 3, Mistral) in private VPCs for organizations with strict compliance or air-gapped requirements.",
        icon: Brain,
        details: [
          "vLLM and TensorRT-LLM inference engines",
          "AWS Bedrock / Google Cloud Vertex AI private endpoints",
          "Quantization and GPU memory optimization",
        ],
      },
      {
        title: "Multimodal & Vision Document Parsing",
        description:
          "Extracting structured business data from complex visual documents, tables, diagrams, and handwriting with near-zero error rates.",
        icon: Sparkles,
        details: [
          "Multimodal vision models (GPT-4o, Claude 3.5 Sonnet)",
          "Table structure preservation and markdown transformation",
          "Automated data normalization into SQL tables",
        ],
      },
      {
        title: "Enterprise AI Security & Guardrails",
        description:
          "Implementing safety filters, prompt injection defenses, and PII anonymization to safeguard compliance and data confidentiality.",
        icon: Lock,
        details: [
          "Prompt injection and jailbreak detection layers",
          "Automated PII detection and redaction pipelines",
          "Comprehensive request/response audit logging",
        ],
      },
      {
        title: "Vector Database Architecture",
        description:
          "Designing high-performance vector search architectures that scale to millions of document embeddings with sub-50ms latency.",
        icon: Database,
        details: [
          "pgvector (PostgreSQL native vector search)",
          "HNSW indexing and distance metric tuning",
          "Metadata filtering and multi-tenant partitioning",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We apply engineering rigor to AI projects, systematically measuring baseline accuracy, minimizing costs, and preventing hallucinations.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Use case viability & data readiness audit",
        description:
          "We assess your data quality, document formats, compliance requirements, and business goals to determine if AI is the optimal solution.",
        deliverables: [
          "AI feasibility and ROI assessment report",
          "Data inventory and quality audit",
          "Security, privacy, and compliance framework",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Architecture & evaluation benchmark design",
        description:
          "We define the retrieval architecture, model selection, embedding strategy, and establish an automated evaluation dataset to benchmark accuracy.",
        deliverables: [
          "RAG and system architecture topology",
          "Gold-standard evaluation dataset (Ground truth Q&A)",
          "Latency, cost, and accuracy target metrics",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "Interaction flows & guardrail rules",
        description:
          "We design intuitive user interfaces for AI interactions, citation display styles, confidence ratings, and human-in-the-loop review screens.",
        deliverables: [
          "Conversational and copilot UI wireframes",
          "Source citation and verification UI components",
          "Safety policy rules and escalation guidelines",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Data pipelines & model orchestration",
        description:
          "Our engineers build document parsing ETL pipelines, chunking and embedding systems, vector database schemas, and API tool integrations.",
        deliverables: [
          "Automated document ingestion and embedding pipeline",
          "Type-safe LLM orchestration layer with tool execution",
          "Private endpoint configurations on AWS / GCP",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Automated eval testing & hallucination checks",
        description:
          "We run automated evaluations (Ragas, TruLens) testing retrieval precision, factual consistency, prompt injection resilience, and latency.",
        deliverables: [
          "RAG accuracy, recall, and hallucination benchmark report",
          "Security penetration and prompt injection audit",
          "Inference latency and token cost analysis",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Production deployment & continuous telemetry",
        description:
          "We deploy the solution with real-time token tracking, user feedback monitoring, model latency instrumentation, and team training.",
        deliverables: [
          "Production deployment with live observability (Langfuse / Datadog)",
          "End-user feedback capture (thumbs up/down with feedback tags)",
          "Operator runbooks and maintenance documentation",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "AI technologies and engineering standards",
    description:
      "We build on leading foundational model providers, vector indexing engines, and open-source orchestration frameworks.",
    stack: [
      {
        category: "Foundational Models",
        technologies: [
          "OpenAI (GPT-4o, o1)",
          "Anthropic (Claude 3.5 Sonnet)",
          "Meta Llama 3 (Self-Hosted)",
          "Google Vertex AI (Gemini 1.5)",
          "Mistral AI",
        ],
      },
      {
        category: "Vector Databases",
        technologies: [
          "pgvector (PostgreSQL)",
          "Pinecone",
          "Qdrant",
          "Weaviate",
          "ChromaDB",
        ],
      },
      {
        category: "Orchestration & ETL",
        technologies: [
          "LangChain & LangGraph",
          "LlamaIndex",
          "Unstructured.io",
          "vLLM Inference Engine",
          "FastAPI & Python",
        ],
      },
      {
        category: "Evaluation & Observability",
        technologies: [
          "Langfuse / Arize Phoenix",
          "Ragas Evaluation Framework",
          "OpenTelemetry",
          "Cohere Re-Ranker",
          "Zod / Pydantic Schema Guards",
        ],
      },
    ],
    considerations: [
      {
        title: "Source Grounding & Citations",
        description:
          "Every generated response from our RAG systems includes direct page-level citations and excerpts from verified internal source documents.",
        standard: "Zero Uncited Claims",
      },
      {
        title: "Data Sovereignty & Zero Training",
        description:
          "We utilize enterprise zero-data-retention APIs and private VPC endpoints ensuring client data is never used to train public models.",
        standard: "Zero Public Training Retainers",
      },
      {
        title: "Strict Type-Safe Outputs",
        description:
          "Model generations destined for database writes must pass strict runtime schema validation before any operational actions execute.",
        standard: "100% Schema Validated Outputs",
      },
      {
        title: "Automated Hallucination Testing",
        description:
          "Continuous CI/CD evaluation suites test response accuracy against hundreds of synthetic and ground-truth questions before every prompt update.",
        standard: ">95% Factual Consistency Benchmark",
      },
    ],
  },

  relevantWork: {
    headline: "AI engineering case studies",
    description:
      "Explore how SMEWSYS has helped organizations implement pragmatic, hallucination-resistant AI systems that generate tangible ROI.",
    projects: [
      {
        title: "Enterprise Legal & Regulatory Knowledge Engine",
        category: "RAG & Intelligent Search",
        description:
          "Built a private RAG search engine indexing 50,000+ compliance documents, contracts, and regulatory filings for a multinational consultancy.",
        outcome: "Decreased research turnaround from 4 hours to under 30 seconds with 100% source-cited accuracy.",
        technologies: ["Claude 3.5 Sonnet", "pgvector", "FastAPI", "Cohere Re-Rank", "Next.js"],
        href: "/work",
      },
      {
        title: "Automated Medical Claims Extraction Pipeline",
        category: "Multimodal AI & OCR",
        description:
          "Developed an automated multimodal vision pipeline that ingests complex medical billing forms and extracts structured ICD-10 data into core databases.",
        outcome: "Processed 120,000+ monthly documents with 99.4% extraction accuracy, reducing processing backlog by 85%.",
        technologies: ["GPT-4o Vision", "Python", "AWS SQS", "PostgreSQL", "Zod"],
        href: "/work",
      },
      {
        title: "Customer Support Diagnostic Copilot",
        category: "Domain Assistant",
        description:
          "Engineered an internal support agent copilot that summarizes client ticket history, queries technical runbooks, and drafts verified diagnostic solutions.",
        outcome: "Cut first-response resolution time by 52% and reduced escalation rates by a third.",
        technologies: ["LangGraph", "Pinecone", "OpenAI", "React", "TypeScript"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "software-development",
    "automation",
    "cloud-solutions",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Clear, honest answers to common business, security, and technical questions about enterprise AI implementation.",
    items: [
      {
        question: "How do you prevent AI models from hallucinating or providing inaccurate information?",
        answer:
          "We use Retrieval-Augmented Generation (RAG). Instead of asking the model to answer from its general memory, our system first performs a hybrid vector search across your verified corporate knowledge base, retrieves the exact relevant passages, and instructs the model to answer using only those provided excerpts. Every answer includes verifiable citations and document page numbers. If the required information is not found in your documents, the model is strictly instructed to state that the answer is unavailable rather than guessing.",
      },
      {
        question: "Will our proprietary business data be used to train public AI models?",
        answer:
          "No. We enforce enterprise zero-data-retention agreements with commercial model providers (such as OpenAI, Anthropic, and Google Cloud Vertex AI), which legally guarantee that your prompts and data are never used for model training or retained beyond the inference request. For clients with sovereign or highly regulated data requirements, we deploy open-weights models (like Llama 3 or Mistral) inside your own private, isolated AWS or GCP virtual private cloud (VPC).",
      },
      {
        question: "How do you evaluate and benchmark the accuracy of an AI system?",
        answer:
          "We establish a curated evaluation benchmark dataset during the Planning stage containing real business questions, expected answers, and source document references. We run automated evaluation frameworks (such as Ragas and TruLens) across the dataset to systematically measure retrieval context recall, context precision, and faithfulness (absence of hallucinations) before deploying any system to production.",
      },
      {
        question: "Can an AI assistant trigger real actions in our CRM or ERP system?",
        answer:
          "Yes. Using deterministic function calling and tool execution, the AI model generates strictly typed JSON payloads (validated by schemas like Zod or Pydantic). These payloads are then passed to your backend APIs to perform tasks like updating CRM lead statuses, generating invoices, or sending automated notifications, with human-in-the-loop confirmation for high-stakes actions.",
      },
      {
        question: "What are the ongoing operational costs (inference tokens, hosting) for an AI solution?",
        answer:
          "Ongoing costs typically consist of model inference API fees (charged per million input and output tokens) and vector database hosting fees. Because modern LLMs are dramatically more cost-effective than previous generations, a typical business knowledge base handling thousands of queries per day often costs less than a few hundred dollars per month in API charges. During our Discovery phase, we provide a transparent cost model based on your projected query volume.",
      },
      {
        question: "How long does it take to implement a production-ready AI solution?",
        answer:
          "A targeted RAG knowledge base or automated document extraction pipeline typically takes 6 to 10 weeks from initial discovery through benchmark validation and production rollout. Complex multi-agent systems with deep cross-system integrations generally span 10 to 14 weeks.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to implement pragmatic, production-grade AI?",
    description:
      "Transform proprietary documentation into actionable intelligence. Contact our AI engineering team today to discuss your use case and evaluate technical feasibility.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

