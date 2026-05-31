export type ProductStatus = "Active" | "Coming Soon";

export type Accent = "blue" | "amber" | "green" | "orange";

export type Category =
  | "AI Platform"
  | "Internal Operations"
  | "Consumer Brand"
  | "Retail AI"
  | "Sales & CRM"
  | "Hiring"
  | "Healthcare AI";

export interface Product {
  id: string;
  name: string;
  /** short symbol used in the logo tile */
  mark: string;
  category: Category;
  status: ProductStatus;
  description: string;
  features: string[];
  url?: string;
  cta: string;
  accent: Accent;
}

/**
 * Source of truth for the ecosystem. The Admin page can override the live
 * URLs/status at runtime (persisted to localStorage); see lib/use-products.ts.
 */
export const PRODUCTS: Product[] = [
  {
    id: "irookee",
    name: "Irookee",
    mark: "Ir",
    category: "AI Platform",
    status: "Active",
    description:
      "An AI chatbot platform that lets businesses build, train, and deploy intelligent conversational agents across every channel.",
    features: [
      "Custom Chatbots",
      "Knowledge Base Training",
      "Multi-Channel Deployment",
      "Analytics Dashboard",
    ],
    url: "https://irookee-phi.vercel.app/",
    cta: "Launch Application",
    accent: "blue",
  },
  {
    id: "onboarding",
    name: "Internal Onboarding",
    mark: "On",
    category: "Internal Operations",
    status: "Active",
    description:
      "Employee onboarding and internal operations platform for team management, onboarding workflows, and organizational processes.",
    features: [
      "Employee Onboarding",
      "HR Workflows",
      "Team Management",
      "Internal Documentation",
    ],
    url: "https://grevya-onboarding.vercel.app/",
    cta: "Launch Application",
    accent: "amber",
  },
  {
    id: "naturals",
    name: "Grevya Naturals",
    mark: "Na",
    category: "Consumer Brand",
    status: "Active",
    description:
      "The digital home for Grevya Naturals products, wellness solutions, and consumer engagement — from catalog to checkout.",
    features: [
      "Product Catalog",
      "Wellness Solutions",
      "Customer Engagement",
      "Online Store Experience",
    ],
    url: "https://grevyanaturals.vercel.app/",
    cta: "Visit Platform",
    accent: "green",
  },
  {
    id: "virtualtryon",
    name: "Grevya Virtual Try-On",
    mark: "Vt",
    category: "Retail AI",
    status: "Active",
    description:
      "AI-powered virtual try-on that lets shoppers preview products on themselves in real time — boosting confidence and conversion before checkout.",
    features: [
      "Virtual Try-On",
      "AR Preview",
      "Product Visualization",
      "Shopper Conversion",
    ],
    url: "https://grevya-virtualtryon.vercel.app/",
    cta: "Launch Application",
    accent: "orange",
  },
  {
    id: "crm",
    name: "Grevya CRM",
    mark: "Cr",
    category: "Sales & CRM",
    status: "Coming Soon",
    description:
      "Customer relationship management built for sales velocity, customer engagement, and connected business operations.",
    features: ["Pipeline", "Customer 360", "Automation", "Revenue Insights"],
    cta: "Coming Soon",
    accent: "orange",
  },
  {
    id: "interviewer",
    name: "Grevya AI Video Interviewer",
    mark: "Vi",
    category: "Hiring",
    status: "Active",
    description:
      "AI-powered hiring and candidate screening that runs structured video interviews and surfaces the strongest applicants.",
    features: ["Video Screening", "Scoring", "Candidate Insights", "ATS Sync"],
    url: "https://grevya-ai-video-interviewer.vercel.app/",
    cta: "Launch Application",
    accent: "blue",
  },
  {
    id: "patientpilot",
    name: "Grevya PatientPilot AI",
    mark: "Pp",
    category: "Healthcare AI",
    status: "Active",
    description:
      "An AI hospital concierge and intelligent patient-routing platform — a 24/7 digital receptionist that recognizes returning patients, assesses symptoms by voice or text, and routes them to the right specialist.",
    features: [
      "Patient Recognition",
      "AI Symptom Assessment",
      "Intelligent Routing",
      "Self-Service Kiosks",
    ],
    url: "https://grevya-patientcare.vercel.app/",
    cta: "Launch Application",
    accent: "green",
  },
  {
    id: "radiology",
    name: "Grevya Radiology AI",
    mark: "Rx",
    category: "Healthcare AI",
    status: "Coming Soon",
    description:
      "Medical imaging and diagnostic AI that assists radiologists with faster, more consistent reads.",
    features: ["Image Analysis", "Diagnostic Assist", "Worklist Triage", "Reporting"],
    cta: "Coming Soon",
    accent: "green",
  },
];

export const CATEGORIES: Category[] = [
  "AI Platform",
  "Internal Operations",
  "Consumer Brand",
  "Retail AI",
  "Sales & CRM",
  "Hiring",
  "Healthcare AI",
];

export const accentVar: Record<Accent, string> = {
  blue: "var(--grevya-blue)",
  amber: "var(--grevya-amber)",
  green: "var(--grevya-green)",
  orange: "var(--grevya-orange)",
};

export interface Stat {
  label: string;
  value: string;
  detail: string;
}

export const STATS: Stat[] = [
  { label: "Total Products", value: "8", detail: "6 live · 2 on the roadmap" },
  { label: "Active Platforms", value: "6", detail: "Shipping to production" },
  { label: "Team Members", value: "60", detail: "Across 5 business units" },
];

export interface Activity {
  product: string;
  accent: Accent;
  event: string;
  time: string;
}

export const ACTIVITY: Activity[] = [
  { product: "Grevya PatientPilot AI", accent: "green", event: "PatientPilot AI went live at partner hospitals", time: "30m ago" },
  { product: "Grevya Virtual Try-On", accent: "orange", event: "Virtual Try-On launched to production", time: "1h ago" },
  { product: "Irookee", accent: "blue", event: "New analytics dashboard deployed", time: "2h ago" },
  { product: "Grevya Naturals", accent: "green", event: "Spring wellness collection went live", time: "5h ago" },
  { product: "Internal Onboarding", accent: "amber", event: "12 new hires completed onboarding", time: "Yesterday" },
  { product: "Grevya CRM", accent: "orange", event: "Private beta opened to design partners", time: "2d ago" },
  { product: "Irookee", accent: "blue", event: "Multi-channel deployment shipped", time: "4d ago" },
];
