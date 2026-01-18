import { ArrowDown, FileText, FolderOpen, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--muted)/0.5),transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status badge */}
          <div className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to Internship Opportunities
          </div>

          {/* Main heading */}
          <h1 className="fade-in-up stagger-1 font-outfit text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Harshitha M
          </h1>

          {/* Tagline */}
          <p className="fade-in-up stagger-2 mt-6 font-outfit text-xl font-light text-muted-foreground md:text-2xl">
            AI/ML Student{' '}
            <span className="mx-2 text-accent">•</span>{' '}
            Passionate About AI, Data & Real-World Systems
          </p>

          {/* Subtitle */}
          <p className="fade-in-up stagger-3 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            B.Tech Computer Science (AI/ML) student exploring the intersection of 
            artificial intelligence, systems optimization, and product engineering. 
            Building solutions that matter.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
  href="/Harshitha_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary inline-flex items-center gap-2"
>
  <FileText size={18} />
  View Resume
</a>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary"
            >
              <FolderOpen size={18} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-ghost"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-in stagger-5 absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};
