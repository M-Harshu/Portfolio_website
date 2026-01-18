import { useState } from 'react';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'mharshu2415@gmail.com',
    href: 'mailto:mharshu2415@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'harshitha2415',
    href: 'https://www.linkedin.com/in/harshitha2415',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'M-Harshu',
    href: 'https://github.com/M-Harshu',
    icon: Github,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-surface-sunken">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">Contact</span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about AI and technology.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Links */}
            <div>
              <h3 className="heading-card mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-elevated flex items-center gap-4 group"
                  >
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <link.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{link.value}</p>
                    </div>
                    <ArrowUpRight 
                      size={16} 
                      className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="heading-card mb-6">Send a Message</h3>
              <form
  action="https://formspree.io/f/xqezlaaa"
  method="POST"
  className="space-y-4"
>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
