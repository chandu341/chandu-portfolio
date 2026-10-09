import React from 'react';

// Map skill names to SVG asset paths in public/technologies/
const iconMap: Record<string, string> = {
  docker: '/technologies/docker.svg',
  kubernetes: '/technologies/kubernetes.svg',
  helm: '/technologies/helm.svg',
  terraform: '/technologies/terraform.svg',
  aws: '/technologies/aws.svg',
  'amazon eks': '/technologies/aws.svg',
  'azure aks': '/technologies/azure.svg',
  azure: '/technologies/azure.svg',
  jenkins: '/technologies/jenkins.svg',
  'github actions': '/technologies/github-actions.svg',
  'argo cd': '/technologies/argocd.svg',
  'argo cd (gitops)': '/technologies/argocd.svg',
  git: '/technologies/git.svg',
  'gitlab ci/cd': '/technologies/gitlab.svg',
  bitbucket: '/technologies/bitbucket.svg',
  ansible: '/technologies/ansible.svg',
  dynatrace: '/technologies/dynatrace.svg',
  grafana: '/technologies/grafana.svg',
  prometheus: '/technologies/prometheus.svg',
  catchpoint: '/technologies/catchpoint.svg',
  'elastic stack': '/technologies/elastic.svg',
  'elastic stack (elk)': '/technologies/elastic.svg',
  sonarqube: '/technologies/sonarqube.svg',
  trivy: '/technologies/trivy.svg',
  linux: '/technologies/linux.svg',
  python: '/technologies/python.svg',
  'python script': '/technologies/python.svg',
  'shell/bash': '/technologies/bash.svg',
  apache: '/technologies/apache.svg',
  nginx: '/technologies/nginx.svg',
  mysql: '/technologies/mysql.svg',
  selenium: '/technologies/selenium.svg',
  jira: '/technologies/jira.svg',
  servicenow: '/technologies/servicenow.svg'
};

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4', size = 16 }) => {
  const normalizedKey = name.toLowerCase().trim();
  const rawPath = iconMap[normalizedKey];
  const iconSrc = rawPath ? `${import.meta.env.BASE_URL}${rawPath.replace(/^\//, '')}` : null;

  if (!iconSrc) {
    // Terminal fallback icon for items without an SVG
    return (
      <span
        className={`inline-flex items-center justify-center font-mono text-[10px] text-primary/80 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        #
      </span>
    );
  }

  return (
    <img
      src={iconSrc}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={`inline-block object-contain flex-shrink-0 ${className}`}
      loading="lazy"
    />
  );
};
