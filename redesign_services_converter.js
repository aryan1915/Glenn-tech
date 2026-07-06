const fs = require('fs');
const path = require('path');

const serviceConfigs = {
  'cloud-computing': {
    badge: 'Cloud & Infrastructure',
    heroTitle: 'Cloud Computing Services',
    heroDesc: 'Accelerate digital transformation, reduce infrastructure costs, and build secure, highly scalable cloud architectures.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`,
        title: 'Cloud-Native Architecture',
        desc: 'Design and deploy modern, microservices-based cloud systems utilizing Docker, Kubernetes, and serverless compute.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
        title: 'Multi-Cloud Management',
        desc: 'Seamlessly orchestrate hybrid environments across AWS, Google Cloud, and Microsoft Azure without provider lock-in.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
        title: 'Cost & Ops Optimization',
        desc: 'Leverage FinOps tools and automated monitoring pipelines to monitor resources, scale dynamically, and reduce waste.'
      }
    ],
    timeline: [
      { title: 'Infrastructure Audit', desc: 'We audit your existing servers, workloads, and database configurations to identify bottlenecks.' },
      { title: 'Architecture Mapping', desc: 'Our cloud architects design high-availability, auto-scaling network topologies.' },
      { title: 'Migration Execution', desc: 'Deploy workloads safely with automated zero-downtime database cutovers.' },
      { title: 'Optimization & Handover', desc: 'Configure resource alerts, security firewalls, and handover standard IaC scripts.' }
    ],
    stats: [
      { value: '45%', label: 'Infrastructure Savings' },
      { value: '99.99%', label: 'Uptime Achieved' },
      { value: '3.5x', label: 'Faster Deploy Cycles' },
      { value: '24/7', label: 'Proactive Monitoring' }
    ]
  },
  'cloud-migration-services': {
    badge: 'Migration & Optimization',
    heroTitle: 'Cloud Migration Services',
    heroDesc: 'Migrate legacy workloads and enterprise infrastructure to the cloud safely with minimal downtime and zero data loss.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        title: 'Zero-Downtime Migration',
        desc: 'Execute application and database shifts safely using background replication and staged data cutovers.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`,
        title: 'Application Refactoring',
        desc: 'Containerize and rebuild monoliths into cloud-native microservices during migration to unlock performance benefits.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        title: 'Security & Compliance Audits',
        desc: 'Implement zero-trust security firewalls, resource policies, and complete enterprise compliance standards.'
      }
    ],
    timeline: [
      { title: 'Dependency Discovery', desc: 'Ingest database mappings, API links, and configuration files to prevent transfer disruptions.' },
      { title: 'Migration Blueprinting', desc: 'Select AWS/Azure/GCP target profiles and formulate resource migration scripts.' },
      { title: 'Staged Execution', desc: 'Migrate non-critical systems, then data tiers, with background synchronization.' },
      { title: 'Validation & Audit', desc: 'Perform penetrative security audits and latency tests before final DNS cutover.' }
    ],
    stats: [
      { value: 'Zero', label: 'Data Loss Recorded' },
      { value: '60%', label: 'Migration Speed Boost' },
      { value: '99.95%', label: 'Cutover SLA' },
      { value: '100%', label: 'Secure Compliance' }
    ]
  },
  'crm-consulting': {
    badge: 'CRM Integrations',
    heroTitle: 'CRM Consulting Services',
    heroDesc: 'Customize, integrate, and automate your Salesforce, Microsoft Dynamics, or custom CRM to boost sales efficiency and customer satisfaction.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        title: 'Workflow Customization',
        desc: 'Tailor pipeline views, user dashboards, automated notifications, and customer categories to match your actual sales team.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>`,
        title: 'Omnichannel Integration',
        desc: 'Connect CRM seamlessly with phone lines, email pipelines, custom website database logs, and support desks.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        title: 'Predictive Analytics',
        desc: 'Utilize automated machine learning models to forecast monthly revenue, deal probabilities, and customer churn.'
      }
    ],
    timeline: [
      { title: 'Workflow Audit', desc: 'Shadow your sales reps and support agents to catalog manual tasks and data entry loops.' },
      { title: 'CRM Design', desc: 'Design database relationships, page layouts, and automated actions in Salesforce/Dynamics.' },
      { title: 'API Integration', desc: 'Link ERP, payment processors, and email channels directly into the CRM database.' },
      { title: 'User Handover', desc: 'Conduct employee onboarding workshops and deliver custom user reference decks.' }
    ],
    stats: [
      { value: '35%+', label: 'Sales Efficiency Gain' },
      { value: '-40%', label: 'Manual Input Time' },
      { value: '100%', label: 'Data Sync Accuracy' },
      { value: '2.5x', label: 'Pipeline Visibility' }
    ]
  },
  'custom-application-development': {
    badge: 'Custom Engineering',
    heroTitle: 'Custom Application Development',
    heroDesc: 'Build high-performance, robust, and custom-tailored software products designed to scale alongside your business growth.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
        title: 'Full-Stack Development',
        desc: 'Deploy resilient frontend screens using React/Next.js alongside hyper-fast backend microservices built in Go, Node.js, or Java.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>`,
        title: 'Scalable Architecture',
        desc: 'Design elastic network environments with multi-region replication, redis caching layers, and decoupled messaging queues.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
        title: 'CI/CD Automation',
        desc: 'Accelerate cycle time through automated unit tests, quality gatekeepers, containerization pipelines, and staged deployments.'
      }
    ],
    timeline: [
      { title: 'Requirements Ingestion', desc: 'Collate your system requirements, API specifications, and performance targets.' },
      { title: 'System Blueprinting', desc: 'Establish the database schemas, API contracts, and high-level cloud architecture.' },
      { title: 'Iterative Engineering', desc: 'Deploy features in continuous agile sprints with transparent bi-weekly sprint demos.' },
      { title: 'Quality Assurance', desc: 'Run automated end-to-end user tests, loading diagnostics, and launch compliance checklists.' }
    ],
    stats: [
      { value: '500k+', label: 'Active Users Scaled' },
      { value: '99.95%', label: 'Platform Availability' },
      { value: '100%', label: 'Custom Tailored' },
      { value: '2-Week', label: 'Agile Release Cycles' }
    ]
  },
  'cyber-security-services': {
    badge: 'Security & Compliance',
    heroTitle: 'Cyber Security Services',
    heroDesc: 'Protect your enterprise applications, customer data, and cloud infrastructure from threats with state-of-the-art security consulting.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        title: 'Vulnerability Assessment',
        desc: 'Execute automated network penetration tests and codebase scanning to spot exploits, key leakages, and vulnerabilities.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        title: 'Zero-Trust Architecture',
        desc: 'Implement secure identity management (IAM), multi-factor authentication (MFA), role-based control, and encrypted networks.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        title: 'Continuous SecOps',
        desc: 'Configure automated intrusion detection alerts, database logs monitoring, and fast incident response playbooks.'
      }
    ],
    timeline: [
      { title: 'Security Audit', desc: 'Run complete automated scans and manual audits to assess your software risk surface.' },
      { title: 'Threat Modeling', desc: 'Create concrete scenarios of possible threat attacks to target the most crucial entry flaws.' },
      { title: 'Remediation Sprints', desc: 'Secure database encryptions, upgrade dependencies, and lock network access lists.' },
      { title: 'Continuous Guard', desc: 'Setup automated security scanners and firewalls to block runtime anomalies.' }
    ],
    stats: [
      { value: 'Zero', label: 'Security Breaches' },
      { value: '100%', label: 'Compliance Reached' },
      { value: '24/7', label: 'Threat Alerting' },
      { value: '< 1hr', label: 'Incident Response Time' }
    ]
  },
  'enterprise-applications': {
    badge: 'Enterprise Software',
    heroTitle: 'Enterprise Applications Development',
    heroDesc: 'Design, develop, and integrate resilient software systems built to streamline enterprise operations and improve collaboration.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
        title: 'Enterprise Integrations',
        desc: 'Connect decoupled CRM, ERP, and operational databases together using high-throughput event buses and API gateways.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`,
        title: 'Workflow Automation',
        desc: 'Eliminate manual handovers, email approvals, and file uploads using secure, script-based trigger systems.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        title: 'Enterprise Compliance',
        desc: 'Develop secure software that conforms to HIPAA, GDPR, SOC2, and localized financial auditing guidelines.'
      }
    ],
    timeline: [
      { title: 'Context Discovery', desc: 'Identify data isolation boundaries, operational stakeholders, and process dependencies.' },
      { title: 'Architecture Blueprinting', desc: 'Draft database relationships, network access controls, and modular microservices.' },
      { title: 'Development & Integration', desc: 'Build the core business rules engine and sync external systems via APIs.' },
      { title: 'UAT & Compliance Check', desc: 'Obtain stakeholder confirmation through user testing and execute security auditing.' }
    ],
    stats: [
      { value: '45%+', label: 'Operational Efficiency' },
      { value: '100%', label: 'Auditable Log Capture' },
      { value: '99.99%', label: 'System Uptime' },
      { value: '10M+', label: 'Daily Data Records' }
    ]
  },
  'erp-consulting': {
    badge: 'ERP Customization',
    heroTitle: 'ERP Consulting Services',
    heroDesc: 'Optimize your supply chain, financials, and inventory tracking by customizing and automating Microsoft Dynamics, SAP, or Odoo ERP platforms.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
        title: 'ERP Custom Module Coding',
        desc: 'Build customized dashboard plugins, invoice templates, data triggers, and specialized calculators inside your ERP.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>`,
        title: 'ETL & Clean Data Migration',
        desc: 'Deduplicate, map, and import decades of enterprise vendor records, invoices, and product data safely.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        title: 'Unified BI Analytics',
        desc: 'Establish executive visibility dashboards, margins tracking, dynamic demand forecasts, and operational analytics.'
      }
    ],
    timeline: [
      { title: 'Operational Mapping', desc: 'Catalogue financial ledger entries, material SKUs, and inventory flows.' },
      { title: 'ERP Configuration', desc: 'Set user permissions, custom fields, and ledger rules in Microsoft/SAP.' },
      { title: 'Legacy Data Migration', desc: 'Run ETL scripts to transfer files, clean invoices, and map schemas.' },
      { title: 'Staff Onboarding', desc: 'Run team walkthrough workshops and deliver dynamic reference documentation.' }
    ],
    stats: [
      { value: '30%+', label: 'Inventory Cost Saved' },
      { value: '100%', label: 'Tax/Audit Alignment' },
      { value: '-50%', label: 'Closing Ledger Time' },
      { value: '3x', label: 'Report Generation Speed' }
    ]
  },
  'legacy-software-modernization-services': {
    badge: 'Software Modernization',
    heroTitle: 'Legacy Software Modernization',
    heroDesc: 'Refactor outdated monoliths, optimize infrastructure cost, and upgrade legacy user screens to modern, fast responsive web platforms.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline></svg>`,
        title: 'Monolith to Microservices',
        desc: 'Safely deconstruct massive codebase monoliths into modular cloud APIs using the strangler fig pattern.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
        title: 'Modern UI/UX Refactoring',
        desc: 'Rebuild old desktop screens into responsive, fast mobile and web interfaces with seamless visual workflows.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        title: 'Stack & Dependency Upgrade',
        desc: 'Migrate obsolete framework languages (.NET Framework, PHP 5, Python 2) to current LTS versions.'
      }
    ],
    timeline: [
      { title: 'Codebase Inspection', desc: 'Analyze class structures, circular references, and dead dependencies.' },
      { title: 'Migration Mapping', desc: 'Determine target frameworks, API endpoints, and data routing paths.' },
      { title: 'Strangled Refactoring', desc: 'Rebuild subsystems piece by piece while redirecting live traffic.' },
      { title: 'Visual Upgrade', desc: 'Deliver a responsive web layout and migrate database systems.' }
    ],
    stats: [
      { value: '5x', label: 'Performance Speedup' },
      { value: '-65%', label: 'Design & Code Debt' },
      { value: '100%', label: 'LTS Stack Security' },
      { value: 'Zero', label: 'Operational Disruptions' }
    ]
  },
  'poc-development': {
    badge: 'Concept Validation',
    heroTitle: 'PoC Development Services',
    heroDesc: 'Validate your most innovative ideas, demonstrate technical feasibility, and launch lightweight prototypes quickly with minimal risk.',
    pillars: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        title: 'Technical Feasibility',
        desc: 'Validate third-party API performance, hardware interfaces, and complex mathematical algorithms before high investment.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        title: 'Rapid Prototype',
        desc: 'Construct clean frontend screens with mock database data to pitch concept designs to stakeholders and early users.'
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline></svg>`,
        title: 'MVP Roadmap Outlining',
        desc: 'Translate key learnings from the PoC to design the full minimum viable product (MVP) scope and backlogs.'
      }
    ],
    timeline: [
      { title: 'Validation Scope', desc: 'Identify critical technical unknowns, integrations, and target milestones.' },
      { title: 'Interface Sketching', desc: 'Map simple wireframes and user interaction click paths.' },
      { title: 'Sprint Coding', desc: 'Construct a lightweight app structure focused exclusively on the critical hypothesis.' },
      { title: 'Validation Handover', desc: 'Present feasibility performance results and map out the MVP roadmap.' }
    ],
    stats: [
      { value: '4-Week', label: 'Average Timeline' },
      { value: '95%+', label: 'Investment Risk Mitigated' },
      { value: '100%', label: 'Technical Clarity' },
      { value: '3x', label: 'Faster Executive Signoff' }
    ]
  }
};

const pagesDir = path.join(__dirname, 'pages', 'services');

function parseField(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function extractFormAndIframe(content) {
  const formStart = content.indexOf("<div class='gf_browser_unknown gform_wrapper");
  if (formStart === -1) return '';
  
  const iframeEndTag = "</iframe>";
  const iframeStart = content.indexOf("<iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1'");
  if (iframeStart === -1) return '';
  
  const iframeEnd = content.indexOf(iframeEndTag, iframeStart);
  if (iframeEnd === -1) return '';
  
  return content.substring(formStart, iframeEnd + iframeEndTag.length);
}

function redesignPage(file) {
  const filePath = path.join(pagesDir, file);
  const slug = file.replace('.js', '');
  const config = serviceConfigs[slug];
  if (!config) return;

  console.log(`Processing: ${file}`);
  const content = fs.readFileSync(filePath, 'utf-8');

  const title = parseField(content, /title="([^"]+)"/);
  const description = parseField(content, /description="([^"]+)"/);
  const bodyClass = parseField(content, /bodyClass="([^"]+)"/);
  
  // Extract form
  const formHtml = extractFormAndIframe(content);
  if (!formHtml) {
    console.warn(`No form found in ${file}. Skipping form block...`);
  }

  // Generate redesigned html content
  const redesignedHtml = `
\${headerHtml}

<style>
/* Modern styling custom overrides for the redesigned page */
.rd-body {
  font-family: var(--font-sans);
  background-color: var(--bg-dark-1);
  color: var(--text-gray-200);
}

.rd-hero {
  position: relative;
  overflow: hidden;
  padding: 160px 0 100px;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(0, 229, 255, 0.06) 0%, transparent 50%);
}

.rd-hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.rd-hero-badge {
  color: var(--primary-accent);
  background: var(--primary-accent-glow);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 24px;
  border: 1px solid rgba(0, 229, 255, 0.25);
  display: inline-block;
}

.rd-hero-title {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 24px;
  font-family: var(--font-display);
  background: linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
}

@media (max-width: 768px) {
  .rd-hero-title {
    font-size: 2.75rem;
  }
}

.rd-hero-desc {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-gray-400);
  margin-bottom: 40px;
  max-width: 780px;
}

.rd-cta-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

@media (max-width: 480px) {
  .rd-cta-group {
    flex-direction: column;
    width: 100%;
  }
}

.rd-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.rd-btn-primary {
  background-color: var(--text-white);
  color: var(--bg-dark-1);
}

.rd-btn-primary:hover {
  background-color: var(--primary-accent);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  transform: translateY(-2px);
}

.rd-btn-secondary {
  background-color: transparent;
  color: var(--text-white);
  border: 1px solid var(--border-color);
}

.rd-btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: var(--text-white);
  transform: translateY(-2px);
}

/* Card grids & Glassmorphism */
.rd-section {
  padding: 100px 0;
  border-top: 1px solid var(--border-color);
}

.rd-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  font-family: var(--font-display);
}

.rd-section-desc {
  font-size: 1.1rem;
  color: var(--text-gray-500);
  text-align: center;
  max-width: 650px;
  margin: 0 auto 60px;
}

.rd-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1024px) {
  .rd-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .rd-grid-3 {
    grid-template-columns: 1fr;
  }
}

.rd-card {
  background: var(--card-bg-1);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.rd-card:hover {
  border-color: rgba(0, 229, 255, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.rd-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-accent), #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.rd-card:hover::before {
  opacity: 1;
}

.rd-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  color: var(--primary-accent);
  border: 1px solid var(--border-color);
}

.rd-card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-card-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-gray-400);
}

/* Timeline/Process styles */
.rd-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.rd-timeline::before {
  content: '';
  position: absolute;
  left: 31px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: var(--border-color);
}

.rd-timeline-item {
  display: flex;
  margin-bottom: 48px;
  position: relative;
}

.rd-timeline-item:last-child {
  margin-bottom: 0;
}

.rd-timeline-dot {
  flex: 0 0 64px;
  height: 64px;
  border-radius: 50px;
  background: var(--card-bg-2);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary-accent);
  z-index: 2;
  transition: all 0.3s ease;
  font-family: var(--font-display);
  font-size: 1.25rem;
}

.rd-timeline-item:hover .rd-timeline-dot {
  border-color: var(--primary-accent);
  box-shadow: 0 0 15px var(--primary-accent-glow);
}

.rd-timeline-content {
  padding-left: 32px;
  padding-top: 12px;
}

.rd-timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-timeline-desc {
  font-size: 0.95rem;
  color: var(--text-gray-400);
  line-height: 1.6;
}

/* Featured panel / Lead banner */
.rd-panel {
  background: linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(9,9,9,0.9) 100%);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .rd-panel {
    padding: 32px;
  }
}

.rd-panel::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.rd-panel-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
}

.rd-panel-badge {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.rd-panel-title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-panel-desc {
  font-size: 1.05rem;
  color: var(--text-gray-400);
  margin-bottom: 32px;
  line-height: 1.6;
}

/* Metric Stats Grid */
.rd-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 20px;
}

@media (max-width: 960px) {
  .rd-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .rd-stats-grid {
    grid-template-columns: 1fr;
  }
}

.rd-stat-card {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.rd-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-accent);
  margin-bottom: 8px;
  font-family: var(--font-display);
}

.rd-stat-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-gray-500);
}

/* Gravity Forms Overrides for Redesign Theme */
.form-container-wrapper {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

@media (max-width: 640px) {
  .form-container-wrapper {
    padding: 24px;
  }
}

.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
.form textarea {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 8px !important;
  color: var(--text-white) !important;
  padding: 16px 20px !important;
  font-size: 0.95rem !important;
  margin-bottom: 12px !important;
  transition: all 0.3s ease !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.form input:focus, .form textarea:focus {
  border-color: var(--primary-accent) !important;
  background: rgba(0, 229, 255, 0.01) !important;
  outline: none !important;
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.15) !important;
}

.form .gfield_label {
  color: var(--text-gray-200) !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  position: static !important;
  display: block !important;
  transform: none !important;
  opacity: 1 !important;
}

.formrowlist {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 24px !important;
}

@media (max-width: 640px) {
  .formrowlist {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
}

.formrow__company, .formrow__message, .formrow__attach, .formrow--checkbox {
  grid-column: span 2 !important;
}

@media (max-width: 640px) {
  .formrow__company, .formrow__message, .formrow__attach, .formrow--checkbox {
    grid-column: span 1 !important;
  }
}

.form .gform_wrapper .gform_footer input[type=submit] {
  background-color: var(--text-white) !important;
  color: var(--bg-dark-1) !important;
  border-radius: 30px !important;
  padding: 16px 40px !important;
  font-weight: 700 !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 0.95rem !important;
  transition: all 0.3s ease !important;
  background-image: none !important;
  line-height: 1 !important;
}

.form .gform_wrapper .gform_footer input[type=submit]:hover {
  background-color: var(--primary-accent) !important;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4) !important;
  color: var(--bg-dark-1) !important;
}

.formrow--checkbox .gfield_checkbox label {
  color: var(--text-gray-400) !important;
  font-size: 0.85rem !important;
}
</style>

<div class="rd-body">
  <!-- Hero Section -->
  <section class="rd-hero">
    <div class="rd-hero-container">
      <span class="rd-hero-badge">${config.badge}</span>
      <h1 class="rd-hero-title">${config.heroTitle}</h1>
      <p class="rd-hero-desc">
        ${config.heroDesc}
      </p>
      <div class="rd-cta-group">
        <a href="#workshop" class="rd-btn rd-btn-primary">Explore Workflow</a>
        <a href="#contact" class="rd-btn rd-btn-secondary">Get in Touch</a>
      </div>
    </div>
  </section>

  <!-- Metrics / Business Outcomes -->
  <section class="rd-section" style="background-color: var(--bg-dark-2);">
    <div class="container-n">
      <h2 class="rd-section-title">Design that Drives Growth</h2>
      <p class="rd-section-desc">Measurable business values created through expert research, visual excellence, and user-centric architecture.</p>
      
      <div class="rd-stats-grid">
        ${config.stats.map(stat => `
        <div class="rd-stat-card">
          <div class="rd-stat-number">${stat.value}</div>
          <div class="rd-stat-label">${stat.label}</div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Three Pillars -->
  <section class="rd-section">
    <div class="container-n">
      <h2 class="rd-section-title">Our Three Core Pillars</h2>
      <p class="rd-section-desc">A comprehensive strategy built to transform your complex software concepts into elegant digital experiences.</p>
      
      <div class="rd-grid-3">
        ${config.pillars.map(pillar => `
        <div class="rd-card">
          <div class="rd-card-icon">
            ${pillar.icon}
          </div>
          <h3 class="rd-card-title">${pillar.title}</h3>
          <p class="rd-card-desc">
            ${pillar.desc}
          </p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="rd-section" style="background-color: var(--bg-dark-2);">
    <div class="container-n">
      <h2 class="rd-section-title">Our Delivery Journey</h2>
      <p class="rd-section-desc">Our end-to-end design and execution process ensures high precision, transparency, and risk mitigation at every milestone.</p>
      
      <div class="rd-timeline">
        ${config.timeline.map((step, idx) => `
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">0${idx + 1}</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">${step.title}</h3>
            <p class="rd-timeline-desc">
              ${step.desc}
            </p>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Signature Workshop Banner -->
  <section class="rd-section" id="workshop">
    <div class="container-n">
      <div class="rd-panel">
        <div class="rd-panel-content">
          <span class="rd-panel-badge">High-Value Workshop</span>
          <h2 class="rd-panel-title">Define Your Vision in a Single Day</h2>
          <p class="rd-panel-desc">
            Bring your product concepts to our hands-on Collaborative Workshop. In just one day, our directors and technology architects will help you align user goals, outline visual direction, and sketch high-level architectures.
          </p>
          <a href="#contact" class="rd-btn rd-btn-primary">Book Your Session</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials & Contact Form -->
  <section class="rd-section" id="contact" style="background-color: var(--bg-dark-3); border-top: 1px solid var(--border-color);">
    <div class="container-n">
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: start;">
        
        <!-- Contact Form Wrapper -->
        <div>
          <h2 class="rd-panel-title" style="margin-bottom: 16px;">Redesign Your Digital Experience</h2>
          <p style="color: var(--text-gray-400); margin-bottom: 40px;">
            Let's build something exceptional. Share your goal and get expert feedback within 24 hours.
          </p>
          
          <div class="form-container-wrapper">
            ${formHtml}
          </div>
        </div>

        <!-- Sidebar Testimonials -->
        <div style="background-color: var(--card-bg-1); border: 1px solid var(--border-color); border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
          <span style="color: var(--primary-accent); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 24px;">What Our Clients Say</span>
          
          <div style="margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 32px;">
            <p style="font-style: italic; color: var(--text-gray-200); font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">
              "Working with the team in Glenn Tech has given us a leading edge in bringing our new products to the market. Their team's technical knowledge, support and customer service is outstanding."
            </p>
            <div>
              <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">Maranda Walsh</div>
              <div style="font-size: 0.85rem; color: var(--text-gray-500);">Director of Engineering, Wellair</div>
            </div>
          </div>

          <div>
            <p style="font-style: italic; color: var(--text-gray-200); font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">
              "Right from the start, we liked Glenn Tech' commitment and engagement. They came to us with their best people to try to understand our context, our business idea, and developed the first prototype with us."
            </p>
            <div>
              <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">Caroline Aumeran</div>
              <div style="font-size: 0.85rem; color: var(--text-gray-500);">Head of Product Development, appygas</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>

\${footerHtml}
`;

  const newCode = `import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

const bodyHtml = \`${redesignedHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

export default function Page() {
  return (
    <PageWrapper
      title="${title}"
      description="${description}"
      bodyClass="${bodyClass}"
      html={bodyHtml}
    />
  );
}
`;

  fs.writeFileSync(filePath, newCode, 'utf-8');
  console.log(`Successfully Redesigned: ${file}`);
}

function main() {
  const files = fs.readdirSync(pagesDir);
  for (const file of files) {
    if (file.endsWith('.js') && file !== '[slug].js' && file !== 'product-design.js') {
      redesignPage(file);
    }
  }
}

main();
