// ============================================================
// SITE CONFIGURATION & SINGLE SOURCE OF TRUTH
// All placeholders and URLs are consolidated here for easy updates
// ============================================================

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  philosophy: string;
  summary: string;
  location: string;
  experienceYears: string;
  availability: string;
  email: string;
  phone: string;
  showPhone: boolean;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export const siteConfig: SiteConfig = {
  name: 'Chandu Venna',
  title: 'DevOps & Cloud Engineer',
  role: 'DevOps & Cloud Engineer',
  tagline:
    'I build resilient cloud infrastructure and automate release pipelines across AWS and Azure so production runs reliably and recovery is fast.',
  philosophy:
    'I focus on reliability, automation, and measurable delivery speed.',
  summary:
    'Over 5 years of experience building and managing cloud infrastructure and CI/CD pipelines across AWS and Azure. Hands-on orchestrating containerized microservices on Kubernetes platforms including Amazon EKS and Azure AKS. Skilled in Infrastructure as Code with Terraform and automated delivery pipelines with Jenkins, GitHub Actions, and Argo CD. Focuses on system reliability, proactive telemetry, and rapid incident response.',
  location: 'Bengaluru, India',
  experienceYears: '5+ Years',
  availability: 'Looking for DevOps, Cloud, and SRE roles',
  email: 'chanduv4378@gmail.com',
  phone: '+91 9666032664',
  showPhone: true,
  linkedin: 'https://www.linkedin.com/in/im-chanduvenna/',
  github: 'https://github.com/chandu341',
  resumeUrl: '/resume.pdf'
};

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export const impactMetrics: MetricItem[] = [
  { value: '12+', label: 'Microservices', detail: 'Production and QA on Amazon EKS' },
  { value: '60%', label: 'Faster Deployments', detail: 'Jenkins and GitHub Actions CI/CD velocity' },
  { value: '<30m', label: 'Provisioning Time', detail: 'Down from several hours via Terraform IaC' },
  { value: '50+', label: 'Workloads Migrated', detail: 'On-prem VMs & DBs to AWS with zero downtime' },
  { value: '99.9%', label: 'Availability', detail: 'Multi-AZ ALB architecture' },
  { value: '20+', label: 'Incidents Resolved', detail: 'Kubernetes P1/P2 production issues' }
];

export interface ExperienceItem {
  role: string;
  company: string;
  client?: string;
  location: string;
  dates: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'DevOps & Observability/Monitoring',
    company: 'Genpact',
    client: 'Honeywell',
    location: 'Bengaluru, India',
    dates: 'Oct 2023 – Present',
    bullets: [
      'Managed containerized microservices on Amazon EKS across production and QA, supporting 12+ services with Docker, Kubernetes, and Helm to maintain high availability, scalability, and reliable release cadence.',
      'Built and maintained Jenkins and GitHub Actions CI/CD pipelines, improving deployment speed by 60%; implemented Argo CD GitOps workflows for zero-downtime deployments across environments.',
      'Provisioned AWS infrastructure with Terraform (VPCs, EKS clusters, node groups, IAM roles), cutting environment provisioning time from several hours to under 30 minutes via reusable IaC workflows.',
      'Tracked SLIs (availability, error rate, latency) against SLA/SLO targets, using Error Budgets to prioritize reliability work.',
      'Owned P1/P2 incident response and RCA for Kubernetes and application issues by correlating Dynatrace, Catchpoint, Elastic Stack, and cluster telemetry to identify root causes, restore service quickly, and implement preventive fixes.',
      'Built synthetic monitoring in Catchpoint using Selenium for critical web apps, business transactions, APIs, and SSL health checks to detect availability and performance issues proactively.',
      'Analyzed application and infrastructure logs across AKS using Elastic Stack for troubleshooting and faster RCA.',
      'Troubleshot production and QA Kubernetes clusters, resolving pod failures, scaling bottlenecks, and 20+ incidents via Jira and ServiceNow as part of the on-call rotation.',
      'Administered Kubernetes Deployments, Services, StatefulSets, and Ingress alongside AWS ALB Ingress and Route 53 for reliable, standardized application connectivity.',
      'Integrated SonarQube and Trivy into CI/CD for automated code-quality checks and container vulnerability scanning pre-release.'
    ],
    technologies: [
      'AWS EKS',
      'Kubernetes',
      'Docker',
      'Helm',
      'Argo CD',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Dynatrace',
      'Catchpoint',
      'Elastic Stack',
      'SonarQube',
      'Trivy',
      'Azure AKS'
    ]
  },
  {
    role: 'Cloud Engineer',
    company: 'Genpact',
    client: 'GE',
    location: 'Bengaluru, India',
    dates: 'Jun 2021 – Oct 2023',
    bullets: [
      'Migrated 50+ on-prem VMs and databases to AWS using rehost and replatform strategies with zero downtime, covering assessment, workload validation, and post-migration performance tuning.',
      'Automated AWS infrastructure with Terraform across multi-AZ VPCs, EC2, ALB, S3, and RDS, improving infrastructure performance by 35% to 40% and reducing manual provisioning effort by 50% to 80%.',
      'Automated Ubuntu EC2 provisioning with Terraform user-data scripts for Apache configuration, application bootstrapping, and deployment validation to cut release cycle time by 70%.',
      'Implemented internet-facing ALBs with listeners, target groups, and health checks to achieve 99.9% availability across multiple AZs.',
      'Provisioned and managed S3 and RDS via Terraform using Git-based IaC workflows for secure, consistent, cost-controlled infrastructure.'
    ],
    technologies: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'S3', 'RDS', 'Linux', 'Apache', 'Git']
  },
  {
    role: 'Internship Trainee',
    company: 'MNP Technologies',
    location: 'Bengaluru, India',
    dates: 'Oct 2020 – Mar 2021',
    bullets: [
      'Managed AWS resources (EC2, EBS, VPC, Security Groups) for dev/test environments.',
      'Configured IAM users, groups, and access policies with role-based access control.',
      'Wrote Terraform configurations to provision core AWS resources, establishing foundational hands-on Infrastructure as Code workflows.',
      'Set up a Kubernetes environment and deployed test applications to learn orchestration and app lifecycle management.',
      'Built and managed Docker images/containers for app testing and deployment.',
      'Administered Linux systems with responsibilities spanning user accounts, package installations, service monitoring, and troubleshooting.'
    ],
    technologies: ['AWS', 'EC2', 'EBS', 'VPC', 'IAM', 'Terraform', 'Docker', 'Kubernetes', 'Linux']
  }
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Version Control & Config Management',
    skills: ['Git (GitHub, Bitbucket)', 'Branching Strategy', 'Repository Management']
  },
  {
    category: 'CI/CD & Build Automation',
    skills: ['Jenkins', 'GitHub Actions', 'Azure DevOps Pipelines', 'GitLab CI/CD', 'Argo CD (GitOps)']
  },
  {
    category: 'Containerization & Orchestration',
    skills: ['Docker', 'Kubernetes', 'Helm']
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS (EC2, EKS, ECS, S3, RDS, DynamoDB)', 'Azure (AKS)']
  },
  {
    category: 'Infrastructure as Code',
    skills: ['Terraform', 'CloudFormation', 'Ansible']
  },
  {
    category: 'Scripting/Config Languages',
    skills: ['Shell/Bash', 'YAML', 'JSON', 'Python']
  },
  {
    category: 'Web & Application Servers',
    skills: ['Apache', 'Nginx', 'Tomcat']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Amazon RDS', 'DynamoDB']
  },
  {
    category: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'Dynatrace', 'Catchpoint', 'Elastic Stack (ELK)']
  },
  {
    category: 'DevSecOps',
    skills: ['SonarQube', 'Trivy']
  },
  {
    category: 'Collaboration & Project Tools',
    skills: ['Jira', 'ServiceNow', 'Confluence', 'Agile']
  },
  {
    category: 'Operating Systems',
    skills: ['Linux', 'Windows']
  },
  {
    category: 'AI & Automation',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI-Assisted Troubleshooting/Log Analysis', 'Python Automation']
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'AWS Solution Architect Certification',
    issuer: 'Edureka'
  },
  {
    title: 'Terraform Certification',
    issuer: 'Percipio SkillSoft'
  },
  {
    title: 'AWS and DevOps Internship',
    issuer: 'MNP Technologies'
  }
];

export interface AchievementItem {
  text: string;
}

export const achievements: AchievementItem[] = [
  {
    text: 'Promoted from entry-level to Consultant based on performance, technical growth, and demonstrated expertise.'
  },
  {
    text: 'Received positive client feedback for consistently delivering high-quality work and meeting project requirements.'
  },
  {
    text: 'Recognized with "Cheers Points" for dedication, ownership, and contributions to key client projects.'
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

export const education: EducationItem = {
  degree: 'B.Tech, Computer Science and Engineering',
  institution: 'Aditya University',
  location: 'Surampalam',
  graduationDate: 'May 2019'
};

export interface ProjectCardData {
  title: string;
  category?: string;
  description: string;
  stack: string[];
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNodes?: string[];
}

export const initialProjects: ProjectCardData[] = [
  {
    title: "Three-Tier Microservices Deployment on AWS EKS",
    category: "Personal Project",
    description:
      "Deployed Stan's Robot Shop, a polyglot microservices sample app (Node.js, Java/Spring Boot, Python/Flask, Golang, PHP, AngularJS) backed by MongoDB, Redis, MySQL, and RabbitMQ, as a hands-on Kubernetes lab. Shipped the full three-tier architecture to AWS EKS using the project's Helm chart, with Nginx handling ingress and Prometheus scraping custom metrics from the cart and payment services. Built to gain deep hands-on practice orchestrating a multi-language service mesh end-to-end from Docker builds through cluster deployment and monitoring.",
    stack: [
      'AWS EKS',
      'Kubernetes',
      'Helm',
      'Docker',
      'Nginx',
      'Prometheus',
      'MongoDB',
      'Redis',
      'MySQL',
      'RabbitMQ'
    ]
  },
  {
    title: 'Cloud Kubernetes Reliability & Observability',
    description:
      'Set up and ran EKS-based microservices infrastructure across production and QA, covering 12+ services with Docker, Kubernetes, and Helm. Built CI/CD pipelines in Jenkins and GitHub Actions with Argo CD GitOps for zero-downtime deployments, and provisioned the underlying AWS infrastructure with Terraform, cutting environment setup from hours to under 30 minutes. Handled incident response and root-cause analysis by correlating Dynatrace, Catchpoint, and Elastic Stack data against Kubernetes metrics.',
    stack: [
      'AWS EKS',
      'Kubernetes',
      'Docker',
      'Helm',
      'Argo CD',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'Dynatrace',
      'Catchpoint',
      'Elastic Stack'
    ]
  },
  {
    title: 'AWS Infrastructure Automation & Cloud Migration',
    description:
      'Automated AWS infrastructure provisioning with Terraform across multi-AZ VPCs, EC2, ALB, S3, and RDS, and migrated 50+ on-premises VMs and databases to AWS with zero downtime. Built internet-facing load balancers with health checks across multiple availability zones, and automated EC2 provisioning end-to-end with Terraform user-data scripts to cut release cycle time significantly.',
    stack: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'S3', 'RDS', 'Linux']
  }
];
