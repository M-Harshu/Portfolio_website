import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          {/* Logo/Name */}
          <div className="font-outfit text-lg font-semibold tracking-tight text-foreground">
            Harshitha M<span className="text-accent">.</span>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            © {currentYear} Harshitha M. Built with{' '}
            <Heart size={14} className="text-accent" fill="currentColor" />
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
