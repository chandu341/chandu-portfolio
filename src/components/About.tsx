import React from 'react';
import { siteConfig } from '../config/site';
import { Cloud, Server, Boxes, Cpu, User, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const platforms = [
    {
      id: 'aws',
      name: 'Amazon Web Services',
      tag: 'Cloud Platform',
      badge: 'AWS',
      accent: 'text-primary border-primary/30 bg-primary-glow',
      icon: <Cloud className="w-5 h-5" />,
      description:
        'Architected and automated multi-AZ VPCs, EC2 auto-scaling, ALB load balancers, S3 storage, and RDS databases with Terraform. Migrated 50+ on-premise VMs and workloads to AWS with zero downtime.'
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      tag: 'Cloud Platform',
      badge: 'Azure',
      accent: 'text-secondary border-secondary/30 bg-secondary-glow',
      icon: <Server className="w-5 h-5" />,
      description:
        'Engineered enterprise Azure cloud solutions, configuring Virtual Networks, storage, role-based access control, and hybrid telemetry pipelines with Azure Monitor and Elastic Stack.'
    },
    {
      id: 'eks',
      name: 'Amazon EKS',
      tag: 'Container Orchestration',
      badge: 'EKS',
      accent: 'text-primary border-primary/30 bg-primary-glow',
      icon: <Boxes className="w-5 h-5" />,
      description:
        'Managed production and QA EKS clusters supporting 12+ containerized microservices. Handled Helm packaging, ALB Ingress Controller, node group scaling, and Argo CD GitOps synchronization.'
    },
    {
      id: 'aks',
      name: 'Azure Kubernetes Service',
      tag: 'Container Orchestration',
      badge: 'AKS',
      accent: 'text-secondary border-secondary/30 bg-secondary-glow',
      icon: <Cpu className="w-5 h-5" />,
      description:
        'Deployed and maintained AKS container workloads with namespace segregation, container networking, zero-downtime rollouts, and multi-tier log aggregation using Elastic Stack.'
    }
  ];

  return (
    <section id="about" className="section-pad border-t border-border-token bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3 reveal-up">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <span>01. About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
            About
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Multi-cloud infrastructure engineering, Kubernetes container orchestration, and continuous release automation.
          </p>
        </div>

        {/* Main Overview Card */}
        <div className="card-terminal p-6 sm:p-8 bg-surface border border-border-token mb-8 reveal-up">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-primary flex items-center gap-2.5 font-display">
              <User className="w-5 h-5 text-primary" />
              <span>Professional Profile</span>
            </h3>
            <p className="text-base text-text-secondary leading-relaxed font-sans">
              {siteConfig.summary}
            </p>
            <p className="text-base text-text-secondary leading-relaxed pt-1 font-sans">
              In production environments across AWS and Azure, I automate infrastructure using Terraform, set up GitOps workflows with Argo CD and GitHub Actions, and monitor live workloads using Dynatrace, Catchpoint, and Elastic Stack to catch issues early and speed up root-cause analysis.
            </p>
          </div>

          {/* Core At-A-Glance Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-border-token/60 font-mono text-xs">
            <div className="p-3 rounded-lg bg-surface-elevated border border-border-token space-y-0.5">
              <span className="text-text-muted block text-[11px]">Experience</span>
              <span className="text-text-primary font-bold text-sm">5+ Years</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-border-token space-y-0.5">
              <span className="text-text-muted block text-[11px]">Cloud Platforms</span>
              <span className="text-primary font-bold text-sm">AWS · Azure</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-border-token space-y-0.5">
              <span className="text-text-muted block text-[11px]">Orchestration</span>
              <span className="text-secondary font-bold text-sm">EKS · AKS</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-border-token space-y-0.5">
              <span className="text-text-muted block text-[11px]">IaC & Delivery</span>
              <span className="text-primary font-bold text-sm">Terraform · Argo CD</span>
            </div>
          </div>
        </div>

        {/* Highlighted Cloud Platforms & Orchestration Tools Grid */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-2 reveal-up">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>Core Cloud Platforms & Container Orchestration</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="card-terminal p-6 bg-surface border border-border-token space-y-3 reveal-up flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border-token mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`p-2 rounded-lg border ${platform.accent}`}>
                        {platform.icon}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-text-primary font-display">{platform.name}</h4>
                        <span className="font-mono text-[11px] text-text-muted">{platform.tag}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold border ${platform.accent}`}>
                      {platform.badge}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
