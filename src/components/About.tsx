import { SKILLS, SkillItem } from '@/data/portfolio';
import { FaBrain, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            About <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="font-semibold text-foreground">machine learning engineer</span> with a deep passion for advancing the field of artificial intelligence.
              My work focuses on developing innovative ML solutions that bridge the gap between cutting-edge research
              and real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in both theoretical foundations and practical implementation, I enjoy tackling
              complex challenges in <span className="font-semibold text-emerald-600">computer vision</span>, <span className="font-semibold text-emerald-600">natural language processing</span>, and <span className="font-semibold text-emerald-600">deep learning</span>. I believe
              that AI has the potential to transform industries and improve lives worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or training models, you'll find me writing technical articles on Medium, diving into the latest research papers, experimenting with low-level programming, and continuously exploring new technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-card rounded-2xl shadow-sm border border-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-sm border border-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-sm border border-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">4</div>
                <div className="text-sm text-muted-foreground mt-1">Publications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            {/* Research Interests */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl text-white">
                  <FaBrain className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{SKILLS[0].category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS[0].items.map((item) => {
                  const interest = typeof item === 'string' ? item : item.name;
                  return (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/20 hover:shadow-md transition-shadow cursor-default"
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl text-white">
                  <FaCode className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{SKILLS[1].category}</h3>
              </div>
              <div className="space-y-4">
                {(SKILLS[1].items as SkillItem[]).map((skill) => (
                  <div key={skill.name} className="group">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground bg-muted rounded-lg px-3 py-2 group-hover:bg-accent/50 transition-colors">
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
