import { BookOpen, Calendar } from "lucide-react";

export const ResearchSection = () => {
  return (
    <section id="research" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">
              Research
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Research & Publications</h2>
        </div>

        {/* Research Card */}
        <div className="mx-auto max-w-3xl">
          <div className="card-elevated">
            {/* Header */}
            <div className="mb-4 flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen size={20} />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  Conference Paper
                </span>
                <h3 className="heading-card mt-2">
                  IoT and Machine Learning-Based Road Condition Monitoring and
                  Pothole Detection System
                </h3>
                <p className="text-sm text-muted-foreground">
                  🎤 Presenting at AIDE 2026 Conference • 5–7 Feb 2026
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>5–7 February 2026</span>
            </div>

            {/* Description */}
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-secondary-foreground">
                <span className="mt-2 accent-dot flex-shrink-0" />
                <span>
                  Developed an IoT system using ESP32, MPU6050, Ultrasonic sensor,
                  and GPS for real-time road condition monitoring.
                </span>
              </li>
              <li className="flex gap-2 text-sm text-secondary-foreground">
                <span className="mt-2 accent-dot flex-shrink-0" />
                <span>
                  Implemented a Random Forest classifier achieving 84.7% accuracy
                  in classifying potholes, speed bumps, rough and smooth roads.
                </span>
              </li>
              <li className="flex gap-2 text-sm text-secondary-foreground">
                <span className="mt-2 accent-dot flex-shrink-0" />
                <span>
                  Designed a low-cost, scalable smart-city solution with real-time
                  GPS mapping and cloud-based data storage.
                </span>
              </li>
              <li className="flex gap-2 text-sm text-secondary-foreground">
                <span className="mt-2 accent-dot flex-shrink-0" />
                <span>
                  Focused on multi-sensor fusion and AI-driven automation for
                  intelligent road maintenance systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
