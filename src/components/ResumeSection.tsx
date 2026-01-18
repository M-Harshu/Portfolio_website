import { FileText, Download, ExternalLink } from 'lucide-react';

export const ResumeSection = () => {
  const resumeUrl = '/Harshitha_Resume.pdf';

  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">Resume</span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">My Resume</h2>
        </div>

        {/* Resume Card */}
        <div className="mx-auto max-w-xl">
          <div className="card-elevated text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <FileText size={32} />
            </div>

            {/* Title */}
            <h3 className="heading-card mb-2">Harshitha M – Resume</h3>
            <p className="text-body mb-8">
              Download or view my complete resume with detailed information about 
              my education, projects, experience, and skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={18} />
                View Resume
              </a>
              <a
                href={resumeUrl}
                download
                className="btn-secondary"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>

            {/* Note */}
            <p className="mt-6 text-xs text-muted-foreground">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
