import { GraduationCap, Target, Lightbulb } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface-sunken">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">About</span>
            <div className="accent-line" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Main intro */}
          <div className="mb-12 text-center">
            <p className="text-body text-balance">
              I'm <span className="font-medium text-foreground">Harshitha M</span>, 
              a Computer Science undergraduate at RV University, specializing in Artificial Intelligence 
              and Machine Learning. I am a research-oriented student and a conference presenter, currently 
              presenting my paper at <span className="font-medium text-foreground">AIDE 2026</span>. 
              I enjoy transforming complex real-world problems into intelligent, scalable systems.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Academic Background */}
            <div className="card-elevated group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <GraduationCap size={24} />
              </div>
              <h3 className="heading-card mb-2">Academic Focus</h3>
              <p className="text-caption">
                B.Tech in Computer Science with specialization in Artificial Intelligence & Machine Learning 
                and a minor in Innovation, Entrepreneurship & Product Development (IEPD), with strong 
                interests in research and emerging technologies.
              </p>
            </div>

            {/* Passion */}
            <div className="card-elevated group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Lightbulb size={24} />
              </div>
              <h3 className="heading-card mb-2">Core Interests</h3>
              <p className="text-caption">
                Artificial Intelligence, IoT systems, Quantum Computing, research methodology, 
                and building intelligent solutions that have real-world social impact.
              </p>
            </div>

            {/* Goal */}
            <div className="card-elevated group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Target size={24} />
              </div>
              <h3 className="heading-card mb-2">Career Goal</h3>
              <p className="text-caption">
                To grow as a research-driven engineer by contributing to impactful projects in AI, 
                IoT, and Quantum Computing, and by working in environments that value innovation 
                and problem-solving.
              </p>
            </div>
          </div>

          {/* Quote/Statement */}
          <div className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
            <p className="font-outfit text-lg font-medium text-foreground md:text-xl">
              "I believe in building solutions that are not just technically sound, 
              but research-driven and genuinely useful to society."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
