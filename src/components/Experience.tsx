import { EXPERIENCES } from "@/data/portfolio";
import { FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/35 dark:bg-muted/15 border-y border-border/60" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Work <span className="text-emerald-600 dark:text-emerald-400">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
            My professional progression building production computer vision, NLP, and RAG systems
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-600 via-cyan-600 to-teal-600/30 transform md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`group relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full border-4 border-card shadow-md transform -translate-x-1/2 md:-translate-x-1/2 mt-7 z-10 group-hover:scale-125 group-hover:ring-4 group-hover:ring-emerald-500/20 transition-all duration-300"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className={`pl-11 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-card rounded-2xl p-6 sm:p-7 shadow-sm border border-border hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo && (
                        <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-border shadow-2xs bg-muted">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/20">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {exp.techStack.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 bg-muted text-foreground/90 rounded-lg text-xs font-medium border border-border/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <div className="pt-4 border-t border-border/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                        <FiCheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" aria-hidden="true" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
