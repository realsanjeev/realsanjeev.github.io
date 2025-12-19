
import { SKILLS } from '@/data/portfolio';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a machine learning engineer with a deep passion for advancing the field of artificial intelligence.
                My work focuses on developing innovative ML solutions that bridge the gap between cutting-edge research
                and real-world applications.
              </p>
              <p>
                With a background in both theoretical foundations and practical implementation, I enjoy tackling
                complex challenges in computer vision, natural language processing, and deep learning. I believe
                that AI has the potential to transform industries and improve lives worldwide.
              </p>
              <p>
                When I'm not coding or training models, you'll find me writing technical articles on Medium, diving into the latest research papers, experimenting with low-level programming, and continuously exploring new technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Research Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{SKILLS[0].category}</h3>
              <div className="flex flex-wrap gap-2">
                {(SKILLS[0].items as string[]).map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{SKILLS[1].category}</h3>
              <div className="grid grid-cols-1 gap-4 text-gray-700">
                {(SKILLS[1].items as { name: string, value: string }[]).map((skill) => (
                  <div key={skill.name}>
                    <h4 className="font-medium mb-2">{skill.name}</h4>
                    <p className="text-sm">{skill.value}</p>
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
