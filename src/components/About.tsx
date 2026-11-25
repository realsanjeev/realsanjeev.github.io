import { SKILLS, SkillItem } from '@/data/portfolio';
import { FaBrain, FaCode } from 'react-icons/fa';
import { FiBriefcase, FiFolder, FiBookOpen } from 'react-icons/fi';

const STATS = [
  { value: '3+', label: 'Years Experience', icon: FiBriefcase },
  { value: '20+', label: 'ML & Web Projects', icon: FiFolder },
  { value: '10+', label: 'Technical Articles', icon: FiBookOpen },
];

const About = () => {
  return (
    <section className="py-20 sm:py-28 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Background &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Content - Bio & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm space-y-5">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a <span className="font-semibold text-foreground">Machine Learning Engineer</span> dedicated to turning cutting-edge AI research into reliable, production-grade software.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Combining strong theoretical foundations with hands-on systems engineering, I specialize in{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">computer vision</span>,{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">natural language processing</span>, and{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">parameter-efficient LLM fine-tuning</span>.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Beyond training models and building APIs, I write deep-dive engineering articles on Medium, explore systems programming in C and Rust, and build open-source developer utilities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group text-center p-4 sm:p-5 bg-card rounded-2xl shadow-sm border border-border hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2.5">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="lg:col-span-6 space-y-6">
            {/* Research Interests */}
            <div className="bg-card rounded-2xl p-6 sm:p-7 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl text-white shadow-xs">
                  <FaBrain className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{SKILLS[0].category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS[0].items.map((item) => {
                  const interest = typeof item === 'string' ? item : item.name;
                  return (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs sm:text-sm font-medium border border-emerald-500/20"
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-card rounded-2xl p-6 sm:p-7 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl text-white shadow-xs">
                  <FaCode className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{SKILLS[1].category}</h3>
              </div>
              <div className="space-y-4">
                {(SKILLS[1].items as SkillItem[]).map((skill) => {
                  const individualSkills = skill.value.split(',').map((s) => s.trim());
                  return (
                    <div key={skill.name} className="pt-3 first:pt-0 border-t first:border-t-0 border-border/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                        {skill.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {individualSkills.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 bg-muted text-foreground/90 rounded-lg text-xs font-medium border border-border/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
