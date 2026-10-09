import React from 'react';
import { initialProjects, type ProjectCardData } from '../config/site';
import { TechIcon } from './TechIcon';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectCardData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card-terminal p-6 bg-surface border border-border-token space-y-4 flex flex-col justify-between reveal-up">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-primary-glow border border-primary/20 text-primary">
            <FolderGit2 className="w-5 h-5" />
          </div>
          {project.category && (
            <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-glow border border-primary/30">
              {project.category}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-text-primary font-display">{project.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed font-sans">{project.description}</p>

        {/* Metrics highlight */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.metrics.map((m, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-success-glow text-success border border-success/30"
              >
                {m}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 border-t border-border-token/60">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-elevated border border-border-token text-text-primary"
            >
              <TechIcon name={tech} size={12} />
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 font-mono text-xs pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-pad border-t border-border-token bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3 reveal-up">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <span>04. Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
            Infrastructure & Automation Projects
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Hands-on architecture implementations, GitOps workflows, and automation repositories.
          </p>
        </div>

        {initialProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialProjects.map((p, idx) => (
              <ProjectCard key={idx} project={p} />
            ))}
          </div>
        ) : (
          <div className="card-terminal p-8 sm:p-10 bg-surface border border-dashed border-border-token text-center space-y-4 max-w-2xl mx-auto reveal-up">
            <div className="w-12 h-12 rounded-xl bg-primary-glow text-primary flex items-center justify-center mx-auto">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-text-primary font-display">Project Showcase</h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                Featured architecture implementations and GitOps workflows.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
