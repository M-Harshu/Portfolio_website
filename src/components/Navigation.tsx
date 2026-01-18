import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="font-outfit text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            HM<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`nav-link ${
                  activeSection === item.href.slice(1)
                    ? 'active text-foreground'
                    : ''
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle (Desktop) */}
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-ghost md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 right-0 top-full overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[420px] opacity-100'
              : 'max-h-0 opacity-0 border-b-0'
          }`}
        >
          <div className="section-container py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Theme Toggle (Mobile) */}
              <div className="flex items-center gap-2 md:hidden">
  {/* Theme Toggle (Mobile - always visible) */}
  <button
    onClick={toggleTheme}
    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
  </button>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="btn-ghost"
    aria-label="Toggle menu"
  >
    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
