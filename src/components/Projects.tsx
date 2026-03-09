import React from "react";
import { Button } from "@/components/ui/button";
import { FiFileText, FiGithub, FiLink, FiArrowRight } from "react-icons/fi";
import { MAJOR_PROJECTS, GITHUB_PROJECTS } from "@/data/portfolio";
import { FaGraduationCap, FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  const getProjectTypeConfig = (type?: string) => {
    switch (type) {
      case 'major':
        return { color: 'from-blue-500 to-indigo-600', label: 'Major Project', icon: FaGraduationCap };
      case 'minor':
        return { color: 'from-green-500 to-emerald-600', label: 'Minor Project', icon: FaProjectDiagram };
      case 'internship':
        return { color: 'from-purple-500 to-pink-600', label: 'Internship Project', icon: FaProjectDiagram };
      default:
        return { color: 'from-gray-500 to-slate-600', label: 'Project', icon: FaProjectDiagram };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A collection of my academic and personal projects showcasing ML and software development skills
          </p>
        </div>

        {/* Major Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {MAJOR_PROJECTS.map((project, index) => {
            const typeConfig = getProjectTypeConfig(project.type);
            const Icon = typeConfig.icon;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${typeConfig.color}`} />
                
                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${typeConfig.color} text-white text-xs font-medium rounded-full`}>
                      <Icon className="h-3 w-3" />
                      {typeConfig.label}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.detailedDescription}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                          <FiFileText className="mr-2 h-4 w-4" />
                          PDF
                        </Button>
                      </a>
                    )}
                    {project.url && project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="hover:bg-gray-900 hover:text-white hover:border-gray-900">
                          {project.type === 'internship' ? (
                            <>
                              <FiLink className="mr-2 h-4 w-4" />
                              Read Article
                            </>
                          ) : (
                            <>
                              <FiGithub className="mr-2 h-4 w-4" />
                              View Code
                            </>
                          )}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gray-900 rounded-lg text-white">
              <FiGithub className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">More on GitHub</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {GITHUB_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-3 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-200 group-hover:-translate-y-1"
                  >
                    <FiArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
