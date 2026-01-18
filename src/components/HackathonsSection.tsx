import { Trophy, Award, BookOpen } from "lucide-react";

const hackathons = [
  {
    event: "HacXerve",
    level: "National Level Hackathon",
    achievement: "Finalist",
    project: "Pre-Crop & Post-Harvest Smart Agriculture System",
    description:
      "Developed an IoT-based agricultural solution addressing both pre-crop planning and post-harvest optimization.",
  },
  {
    event: "Hackfinity",
    level: "National Level Hackathon",
    achievement: "Finalist",
    project: "InsureGenius – Intelligent Insurance Platform",
    description:
      "Built a full-stack insurance platform with AI-powered risk assessment and personalized policy recommendations.",
  },
];

// Badges (Linux Foundation)
const badges = [
  {
    title: "Linux Foundation",
    subtitle: "Quantum Computing",
    image: "/linux-badge.png",
  },
];

const certifications = [
  {
    title: "Design & Implementation of Human Interface",
    issuer: "NPTEL",
    icon: BookOpen,
    link: "/NPTEL_HCI_Certificate.pdf",
  },
];

export const HackathonsSection = () => {
  return (
    <section id="hackathons" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">
              Achievements
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Hackathons, Badges & Certifications</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Hackathons */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {hackathons.map((hackathon) => (
              <div key={hackathon.event} className="card-elevated group">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Trophy size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <Award size={12} />
                    {hackathon.achievement}
                  </span>
                </div>

                <h3 className="heading-card">{hackathon.event}</h3>
                <p className="text-caption mb-3">{hackathon.level}</p>

                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="mb-1 text-sm font-medium text-foreground">
                    {hackathon.project}
                  </p>
                  <p className="text-caption">{hackathon.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="heading-card mb-6 text-center">Badges</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="card-elevated flex w-48 flex-col items-center text-center"
                >
                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="mb-3 h-24 w-24 object-contain"
                  />
                  <p className="text-sm font-semibold text-foreground">
                    {badge.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {badge.subtitle}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    Verified Digital Badge
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="heading-card mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-subtle flex items-center gap-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <cert.icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
