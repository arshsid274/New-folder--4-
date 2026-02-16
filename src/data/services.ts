export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  turnaround: string;
  idealFor: string;
};

export const services: Service[] = [
  {
    id: "local-currency-exchange",
    title: "Local Currency Exchange",
    summary:
      "Fast exchange between major and emerging market currencies at transparent rates.",
    description:
      "Our local desk supports walk-in and scheduled currency exchange with live pricing and secure handling. Each transaction is logged, reviewed, and confirmed instantly.",
    highlights: [
      "Real-time rate display before you confirm",
      "In-branch and scheduled exchange windows",
      "Receipt-backed transactions with full traceability",
    ],
    turnaround: "Same-day settlement",
    idealFor: "Individuals, travelers, and retail clients",
  },
  {
    id: "international-money-transfers",
    title: "International Money Transfers",
    summary:
      "Reliable cross-border remittance services to key banking corridors worldwide.",
    description:
      "Send money overseas with full beneficiary validation, clear transfer timelines, and transaction status updates. We support both urgent and planned transfer schedules.",
    highlights: [
      "Bank-to-bank transfer routing with tracking",
      "Transparent fees and FX conversion summary",
      "Support for personal and business remittances",
    ],
    turnaround: "Within 24-48 business hours",
    idealFor: "Families, professionals, and growing businesses",
  },
  {
    id: "medical-transfers",
    title: "Medical Transfers",
    summary:
      "Priority international payments for treatment, surgery, and urgent healthcare expenses.",
    description:
      "Our medical transfer service is designed for urgent healthcare timelines. We coordinate documentation checks quickly so hospitals and providers receive funds without unnecessary delays.",
    highlights: [
      "Priority processing for time-sensitive cases",
      "Support for hospital invoices and treatment documents",
      "Dedicated client manager for critical requests",
    ],
    turnaround: "Priority same-day initiation",
    idealFor: "Patients, guardians, and healthcare sponsors",
  },
  {
    id: "study-abroad-transfers",
    title: "Study Abroad Transfers",
    summary:
      "Tuition and living-expense transfers aligned with academic deadlines.",
    description:
      "We help students and guardians remit tuition, accommodation fees, and monthly expenses to universities and service providers abroad while maintaining compliance documentation.",
    highlights: [
      "University fee and tuition remittance support",
      "Recurring transfer setup for living expenses",
      "Document-ready transaction statements",
    ],
    turnaround: "1-2 business days",
    idealFor: "Students, parents, and education consultants",
  },
  {
    id: "tourism-transfers",
    title: "Tourism Transfers",
    summary:
      "Convenient foreign currency and trip-related transfer services for international travel.",
    description:
      "Prepare for travel with pre-trip FX conversion and partner-payment transfers for hotels, tour operators, and travel agencies. We keep rates clear and confirmations immediate.",
    highlights: [
      "Travel-focused currency bundles",
      "Vendor transfer support for bookings",
      "Quick access to transaction confirmations",
    ],
    turnaround: "Same day for standard requests",
    idealFor: "Tourists, travel planners, and agencies",
  },
  {
    id: "corporate-transfers",
    title: "Corporate Transfers",
    summary:
      "Structured FX and payment solutions for payroll, vendors, and global operations.",
    description:
      "Our corporate desk provides high-value transfer controls, approval workflows, and reporting support for finance teams handling international payments and treasury operations.",
    highlights: [
      "Multi-user approval and transfer controls",
      "Dedicated account manager and reporting cadence",
      "FX planning support for recurring obligations",
    ],
    turnaround: "Same day to 24 hours based on corridor",
    idealFor: "SMEs, exporters, and enterprise finance teams",
  },
];
