import { Code, Heart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: ['Java', 'Python', 'C', 'C++', 'DSA', 'HTML/CSS', 'DBMS', 'MongoDB', 'Agile', 'React JS'],
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    skills: ['Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Decision Making'],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface-sunken">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">Skills</span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Technical Expertise</h2>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title} className="card-elevated">
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <category.icon size={20} />
                  </div>
                  <h3 className="heading-card">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-accent/50 hover:bg-accent/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
