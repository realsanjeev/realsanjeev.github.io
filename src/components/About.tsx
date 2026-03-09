
import { SKILLS } from '@/data/portfolio';
import { FaBrain, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const skillIcons = [FaBrain, FaCode, FaLaptopCode];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a <span className="font-semibold text-gray-900">machine learning engineer</span> with a deep passion for advancing the field of artificial intelligence.
              My work focuses on developing innovative ML solutions that bridge the gap between cutting-edge research
              and real-world applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a background in both theoretical foundations and practical implementation, I enjoy tackling
              complex challenges in <span className="font-semibold text-emerald-600">computer vision</span>, <span className="font-semibold text-emerald-600">natural language processing</span>, and <span className="font-semibold text-emerald-600">deep learning</span>. I believe
              that AI has the potential to transform industries and improve lives worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding or training models, you'll find me writing technical articles on Medium, diving into the latest research papers, experimenting with low-level programming, and continuously exploring new technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-gray-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-500 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">4</div>
                <div className="text-sm text-gray-500 mt-1">Publications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            {/* Research Interests */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl text-white">
                  <FaBrain className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{SKILLS[0].category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(SKILLS[0].items as string[]).map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-xl text-sm font-medium border border-emerald-100 hover:shadow-md transition-shadow cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl text-white">
                  <FaCode className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{SKILLS[1].category}</h3>
              </div>
              <div className="space-y-4">
                {(SKILLS[1].items as { name: string, value: string }[]).map((skill, index) => (
                  <div key={skill.name} className="group">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 group-hover:bg-gray-100 transition-colors">
                      {skill.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
