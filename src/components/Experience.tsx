import { EXPERIENCES } from "@/data/portfolio";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  const experiences = EXPERIENCES;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey in machine learning and AI development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        <FiBriefcase className="h-5 w-5" />
                      </div>
                      <div className={index % 2 !== 0 ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        <span className="inline-block mt-1 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className={index % 2 !== 0 ? 'md:text-right' : ''}>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FiCheckCircle className="h-4 w-4 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
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
