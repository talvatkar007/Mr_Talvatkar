export const profile = {
  name: 'Ajay Narayan Talvatkar',
  firstName: 'Ajay',
  role: 'Python Developer · AI Systems Engineer',
  city: 'Mumbai, India',
  email: 'talvatkar.ajay98@gmail.com',
  github: 'https://github.com/talvatkar007',
  linkedin: 'https://www.linkedin.com/in/ajay-narayan-talvatkar-667068214/',
  headline: 'Engineering intelligent systems for the real world.',
  bio: 'I design, build, and deliver production-focused software at the intersection of backend engineering, enterprise AI, cloud infrastructure, and automation. From a proof of concept to a dependable platform, I work across the full delivery lifecycle.',
};

export const capabilities = [
  { id: '01', title: 'AI & intelligent automation', description: 'Agentic workflows, enterprise assistants, AI-assisted matching, intelligent operations.', icon: 'brain', tags: ['AI Agents', 'LLM integration', 'Automation'] },
  { id: '02', title: 'Backend & system architecture', description: 'Secure FastAPI services, event-driven integrations, high-volume APIs, databases and caching.', icon: 'server', tags: ['Python', 'FastAPI', 'PostgreSQL'] },
  { id: '03', title: 'Cloud & observability', description: 'Containerized deployments, cloud monitoring, application telemetry and system reliability.', icon: 'cloud', tags: ['Azure', 'AWS', 'Kubernetes'] },
];

export const featuredProjects = [
  {
    number:'01',slug:'enterprise-ai',type:'Enterprise platform',name:'Enterprise AI Automation Platform',
    summary:'An enterprise AI foundation connecting assistants, automation workflows, analytics and operational systems.',
    details:'Developed microservices, dashboards, identity-aware APIs, caching, enterprise integration flows and AI assistants for supply-chain use cases.',
    stack:['FastAPI','Next.js','PostgreSQL','Redis','Kubernetes'],tone:'violet',symbol:'◈',public:false
  },
  {
    number:'02',slug:'reconciliation',type:'Fintech · AI automation',name:'AI-Powered Bank Reconciliation',
    summary:'AI-assisted matching of bank transactions and ERP general ledger records with auditability and exception review.',
    details:'Built reconciliation APIs, ERP synchronization, validation, processing history, exception handling and review workflows.',
    stack:['Python','AI Matching','Pandas','Oracle JDE'],tone:'mint',symbol:'≋',public:false
  },
  {
    number:'03',slug:'c3-observability',type:'Observability · Platform engineering',name:'C3 — Command & Control Center',
    summary:'A unified operational view of AI services and enterprise applications, designed for visibility across distributed systems.',
    details:'Built health dashboards, monitoring APIs, telemetry integrations and anomaly-oriented operational intelligence.',
    stack:['Grafana','Prometheus','OpenTelemetry','Azure'],tone:'blue',symbol:'⌘',public:false
  },
  {
    number:'04',slug:'erp-connector',type:'Enterprise integration',name:'ERP Connector Hub',
    summary:'Reliable data exchange between Oracle JDE and downstream enterprise applications.',
    details:'Implemented scheduled synchronization, data validation, audit logging, retries and failure recovery.',
    stack:['FastAPI','Oracle JDE','PostgreSQL'],tone:'amber',symbol:'⇄',public:false
  },
];

export const openSource = [
  {name:'Excel Automation',description:'Python tooling for automating spreadsheet processing workflows.',url:'https://github.com/talvatkar007/Excel_Automation',tag:'Python'},
  {name:'Ecommerce Website',description:'A public frontend web development project.',url:'https://github.com/talvatkar007/Eccomerce_website',tag:'HTML'},
  {name:'Diwali Sales EDA',description:'Exploratory data analysis focused on sales patterns and insights.',url:'https://github.com/talvatkar007/EDA_Diwali_data_analysis',tag:'Data Analysis'},
  {name:'Web Scraping with Beautiful Soup',description:'Data collection and web parsing with Python tooling.',url:'https://github.com/talvatkar007/Webscrapping_python_bs4',tag:'Python'},
  {name:'Excel → PostgreSQL Automation',description:'Dynamic spreadsheet-to-database automation using Python, Pandas and SQLAlchemy.',url:'https://github.com/talvatkar007/Auto_excel_data_python_pandas_sqlalchemy',tag:'SQLAlchemy'},
];

export const experience = [
  {company:'Prodware Solutions',role:'Python Developer (AI)',period:'Feb 2026 — Present',detail:'Enterprise AI products, agentic automation, C3 observability, ERP integrations and production-oriented services.'},
  {company:'Brisa Technologies',role:'Backend Python Developer',period:'Sep 2025 — Jan 2026',detail:'High-performance APIs, supply-chain data pipelines and database optimization for enterprise delivery.'},
  {company:'HERE Technologies',role:'Python Developer / SDS1',period:'Oct 2021 — May 2025',detail:'Backend services, geospatial data workflows, automation, SQL performance and cloud-based engineering.'},
];

export const skills = [
  {name:'Core engineering',items:['Python','TypeScript','Next.js','React','FastAPI','Flask','aiohttp']},
  {name:'AI & data',items:['AI Agents','LLM Integrations','Pandas','NumPy','SQLAlchemy','Forecasting']},
  {name:'Cloud & platform',items:['AWS','Azure','Docker','Kubernetes','Grafana','Prometheus','OpenTelemetry']},
  {name:'Data & security',items:['PostgreSQL','Redis','REST APIs','JWT','RBAC','API Integration']},
];
