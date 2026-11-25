import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiFileText, FiGithub, FiLink, FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import { MAJOR_PROJECTS, GITHUB_PROJECTS } from "@/data/portfolio";
import {
  FaGraduationCap,
  FaProjectDiagram,
  FaPython,
  FaJava,
  FaPenNib,
  FaTeamspeak,
  FaGamepad,
  FaBorderStyle,
  FaCameraRetro,
  FaChrome,
  FaFirefox,
} from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiJavascript, SiRust, SiImmersivetranslate } from "react-icons/si";
import { toast } from "@/components/ui/sonner";

const getLanguageIcon = (tag: string) => {
  const normalizedTag = tag.toLowerCase();
  if (normalizedTag === 'python') return <FaPython className="h-5 w-5" />;
  if (normalizedTag === 'pytorch') return <SiPytorch className="h-5 w-5" />;
  if (normalizedTag === 'tensorflow') return <SiTensorflow className="h-5 w-5" />;
  if (normalizedTag.includes('javascript')) return <SiJavascript className="h-5 w-5" />;
  if (normalizedTag === 'java') return <FaJava className="h-5 w-5" />;
  if (normalizedTag === 'rust') return <SiRust className="h-5 w-5" />;
  if (normalizedTag === 'translation') return <SiImmersivetranslate className="h-5 w-5" />;
  if (normalizedTag === 'writer') return <FaPenNib className="h-5 w-5" />;
  if (normalizedTag === 'whisper') return <FaTeamspeak className="h-5 w-5" />;
  if (normalizedTag === 'game ai') return <FaGamepad className="h-5 w-5" />;
  if (normalizedTag === 'computer vision') return <FaBorderStyle className="h-5 w-5" />;
  if (normalizedTag === 'sam') return <FaCameraRetro className="h-5 w-5" />;
  if (normalizedTag === 'chrome extension' || normalizedTag === 'browser extension') return <FaChrome className="h-5 w-5" />;
  return <FiGithub className="h-5 w-5" />;
};

const Projects = () => {
  const [copiedPip, setCopiedPip] = useState(false);

  const handleCopyPip = () => {
    navigator.clipboard.writeText("pip install nepali-unicoder").then(() => {
      setCopiedPip(true);
      toast("Copied to clipboard", {
        description: "pip install nepali-unicoder",
      });
      setTimeout(() => setCopiedPip(false), 2500);
    });
  };

  const getProjectTypeConfig = (type?: string) => {
    switch (type) {
      case 'major':
        return { color: 'from-emerald-600 to-cyan-600', label: 'Major Project', icon: FaGraduationCap };
      case 'minor':
        return { color: 'from-teal-600 to-emerald-600', label: 'Minor Project', icon: FaProjectDiagram };
      case 'internship':
        return { color: 'from-cyan-600 to-sky-600', label: 'Internship Project', icon: FaProjectDiagram };
      default:
        return { color: 'from-slate-600 to-slate-700', label: 'Project', icon: FaProjectDiagram };
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-background" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Portfolio &amp; Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
            Academic research, production machine learning systems, and open-source developer tools
          </p>
        </div>

        {/* Major Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {MAJOR_PROJECTS.map((project, index) => {
            const typeConfig = getProjectTypeConfig(project.type);
            const Icon = typeConfig.icon;

            return (
              <article
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.alt || `${project.name} - ${project.description}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${typeConfig.color} text-white text-xs font-semibold rounded-full shadow-sm`}
                      >
                        <Icon className="h-3 w-3" aria-hidden="true" />
                        {typeConfig.label}
                      </span>
                      <span className="px-2.5 py-1 bg-black/55 backdrop-blur-md text-white/95 rounded-full text-[11px] font-medium">
                        {project.description}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col grow">
                  <div className="grow">
                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {project.name}
                    </h3>

                    {/* Detailed Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.detailedDescription}
                    </p>

                    {/* Tech Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-muted text-foreground/85 rounded-lg text-xs font-medium border border-border/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-border/60 mt-auto">
                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Download PDF for ${project.name}`}
                      >
                        <Button variant="outline" size="sm">
                          <FiFileText className="mr-1.5 h-4 w-4" aria-hidden="true" />
                          Report PDF
                        </Button>
                      </a>
                    )}
                    {project.url && project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          project.type === 'internship'
                            ? `Read article about ${project.name}`
                            : `View GitHub repository for ${project.name}`
                        }
                      >
                        <Button variant="outline" size="sm">
                          {project.type === 'internship' ? (
                            <>
                              <FiLink className="mr-1.5 h-4 w-4" aria-hidden="true" />
                              Read Article
                            </>
                          ) : (
                            <>
                              <FiGithub className="mr-1.5 h-4 w-4" aria-hidden="true" />
                              View Source
                            </>
                          )}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub Projects Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl text-white shadow-xs">
                <FiGithub className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Open Source &amp; Libraries</h3>
                <p className="text-sm text-muted-foreground">Tools, extensions, and experiments published on GitHub &amp; PyPI</p>
              </div>
            </div>
            <a
              href="https://github.com/realsanjeev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              View All Repositories
              <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GITHUB_PROJECTS.map((project, idx) => {
              const primaryTag = project.tags?.[0] || 'Code';

              return (
                <article
                  key={idx}
                  className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Card Top Bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
                      {getLanguageIcon(primaryTag)}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${project.name} on GitHub`}
                      aria-label={`Open ${project.name}`}
                      className="p-2 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-muted rounded-xl transition-colors"
                    >
                      <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="grow flex flex-col">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Special Widget: Browser Extensions */}
                    {project.name.toLowerCase() === "read-aloud-extension" && (
                      <div className="mb-4 p-3 bg-muted/60 rounded-xl border border-border/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                            Available Stores
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold rounded-full">
                            Published
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href="https://chromewebstore.google.com/detail/read-aloud-extension/albdidadjkmkoieokamkkdhpidmjgpea?authuser=0&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-2 bg-card hover:bg-emerald-500/10 border border-border hover:border-emerald-500/40 rounded-lg text-xs font-medium text-foreground flex items-center justify-center gap-1.5 transition-colors"
                            title="Install from Chrome Web Store"
                          >
                            <FaChrome className="text-sky-500 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>Chrome</span>
                          </a>
                          <a
                            href="https://addons.mozilla.org/en-US/firefox/addon/read-aloud-extension/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-2 bg-card hover:bg-emerald-500/10 border border-border hover:border-emerald-500/40 rounded-lg text-xs font-medium text-foreground flex items-center justify-center gap-1.5 transition-colors"
                            title="Install from Firefox Add-ons"
                          >
                            <FaFirefox className="text-amber-500 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>Firefox</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Special Widget: PyPI Package */}
                    {project.name.toLowerCase() === "nepali_unicoder" && (
                      <div className="mb-4 p-3 bg-muted/60 rounded-xl border border-border/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                            PyPI Package
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold rounded-full">
                            Stable
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyPip}
                          className="w-full px-3 py-2 bg-card hover:bg-emerald-500/10 border border-border hover:border-emerald-500/40 rounded-lg font-mono text-xs text-foreground flex items-center justify-between transition-colors"
                          title="Copy pip install command"
                          aria-label="Copy pip install nepali-unicoder command"
                        >
                          <span className="truncate">
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold mr-1.5">$</span>
                            pip install nepali-unicoder
                          </span>
                          {copiedPip ? (
                            <FiCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" aria-hidden="true" />
                          ) : (
                            <FiCopy className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-2" aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    )}

                    {/* Tech Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/60">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
