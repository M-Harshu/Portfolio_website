import { Briefcase, Users, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Vice Chair',
    organization: 'IEEE Women in Engineering (WIE), RV University',
    period: 'April 2025 – Present',
    type: 'Leadership',
    description: [
      'Leading IEEE technical programs focused on skill development and mentorship for engineering students',
      'Coordinating cross-functional teams to execute workshops, hackathons, and networking events',
      'Promoting inclusive engineering leadership and fostering a supportive community for women in tech',
    ],
    icon: Users,
  },
  {
    title: 'Student Intern – AI Research',
    organization: 'RV University',
    period: 'June 2025 – July 2025',
    type: 'Internship',
    description: [
      'Worked on AI-Based Generative Design of Launch Vehicle Payload Fairing project',
      'Applied NSGA-II optimization algorithm for multi-objective aerospace design optimization',
      'Utilized NASA-based synthetic datasets to train and validate generative design models',
    ],
    icon: Briefcase,
  },
  {
    title: 'Student Intern – Quantum Computing',
    organization: 'Centre for Quantum Science & Technology',
    period: 'June 2024 – July 2024',
    type: 'Internship',
    description: [
      'Completed Quantum Computing courses from Linux Foundation and Microsoft',
      'Gained hands-on experience with Q# and quantum programming fundamentals',
      'Developed understanding of quantum algorithms and quantum system concepts',
    ],
    icon: Briefcase,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-surface-sunken">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">Experience</span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Experience & Leadership</h2>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.organization}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="card-elevated">
                    {/* Header */}
                    <div className="mb-4 flex items-start gap-3">
                      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <exp.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {exp.type}
                        </span>
                        <h3 className="heading-card mt-2">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-secondary-foreground">
                          <span className="mt-2 accent-dot flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
