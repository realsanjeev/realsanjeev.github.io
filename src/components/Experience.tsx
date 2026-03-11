import { EXPERIENCES } from "@/data/portfolio";
import { FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey in machine learning and AI development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-cyan-600 to-teal-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo && (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-100 shadow-sm">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <div className="flex items-center justify-between gap-4 mt-1">
                          <p className="text-emerald-600 font-semibold">{exp.company}</p>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.techStack.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 justify-start">
                        <FiCheckCircle className="h-4 w-4 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
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
