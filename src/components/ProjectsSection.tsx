import { ArrowUpRight, Rocket, TrendingUp, Globe, Users, Radio, TrafficCone, Music, BookOpen } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Generative Design of Launch Vehicle Payload Fairing',
    icon: Rocket,
    problem: 'Traditional payload fairing design involves extensive manual calculations and iterative simulations, slowing down design-space exploration and limiting optimal solution discovery.',
    solution: 'Developed an AI-based generative design system using NSGA-II algorithm with NASA synthetic datasets.',
    outcome: 'Achieved optimized fairing designs with improved structural efficiency and reduced development time.',
    tags: ['AI/ML', 'NSGA-II', 'Aerospace', 'Optimization'],
  },
  {
    title: 'Stock Market Analysis & Prediction Platform',
    icon: TrendingUp,
    problem: 'Investors struggle to analyze market trends and make data-driven decisions.',
    solution: 'Built a predictive analytics platform using machine learning models for stock price forecasting.',
    outcome: 'Delivered actionable insights with visualization dashboards for informed investment decisions.',
    tags: ['Python', 'ML', 'Data Analysis', 'Finance'],
  },
  {
    title: 'Astronomad – Mars Rover Prototype',
    icon: Globe,
    problem: 'Planetary exploration requires autonomous navigation in challenging terrains.',
    solution: 'Designed and built a functional Mars rover prototype with sensors and autonomous capabilities.',
    outcome: 'Successfully demonstrated terrain navigation and data collection in simulated conditions.',
    tags: ['Robotics', 'IoT', 'Embedded Systems', 'C'],
  },
  {
    title: 'Customer Churn Prediction System',
    icon: Users,
    problem: 'Businesses lose customers without understanding the underlying causes.',
    solution: 'Developed a machine learning model to predict customer churn and identify at-risk customers.',
    outcome: 'Enabled proactive retention strategies with high prediction accuracy.',
    tags: ['ML', 'Python', 'Data Science', 'Analytics'],
  },
  {
    title: 'IoT-Based Pothole Detection System',
    icon: Radio,
    problem: 'Road maintenance is reactive rather than preventive, causing safety issues.',
    solution: 'Created an IoT system with sensors to detect and report potholes in real-time.',
    outcome: 'Provided accurate pothole mapping for efficient road maintenance prioritization.',
    tags: ['IoT', 'Sensors', 'Embedded', 'Python'],
  },
  {
    title: 'Smart Traffic Light System',
    icon: TrafficCone,
    problem: 'Static traffic signals cause congestion and inefficient traffic flow.',
    solution: 'Developed an adaptive traffic light system that responds to real-time traffic density.',
    outcome: 'Reduced average wait times and improved traffic flow efficiency.',
    tags: ['IoT', 'Algorithms', 'Embedded', 'Optimization'],
  },
  {
    title: 'SocioDrift – Brand Jingle Generator',
    icon: Music,
    problem: 'Creating unique brand jingles is time-consuming and requires specialized skills.',
    solution: 'Built an AI-powered platform that generates custom brand jingles based on input parameters.',
    outcome: 'Delivered creative audio branding solutions with minimal user effort.',
    tags: ['AI', 'Audio', 'Creative Tech', 'Python'],
  },
  {
    title: 'EduMas – Student & Mentor Dashboard',
    icon: BookOpen,
    problem: 'Managing student-mentor relationships and tracking progress is fragmented.',
    solution: 'Created a comprehensive dashboard for tracking mentorship sessions, progress, and goals.',
    outcome: 'Streamlined communication and improved visibility into student development.',
    tags: ['Full Stack', 'Dashboard', 'EdTech', 'Web'],
  },
];

const otherProjects = [
  'Dark Activated LED',
  'Unseen India',
  'Food Tracker',
  'Engineering Explorations',
  'Rover Prototype (Early Version)',
  'Student Management System',
  'Priority Scheduler – Preemptive & Non-Preemptive',
  'Restaurant Menu Rating System',
  'Pre-Crop & Post-Harvest Smart Agriculture System',
  'InsureGenius',
  'SEAL Board Game',
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="accent-line" />
            <span className="text-caption uppercase tracking-widest">Projects</span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section">Featured Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            A selection of projects showcasing problem-solving, technical depth, and impact.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="card-elevated group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <project.icon size={20} />
                </div>
                <ArrowUpRight 
                  size={18} 
                  className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" 
                />
              </div>

              {/* Title */}
              <h3 className="heading-card mb-4">{project.title}</h3>

              {/* Problem → Solution → Outcome */}
              <div className="mb-4 flex-1 space-y-3">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">Problem</span>
                  <p className="mt-1 text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">Solution</span>
                  <p className="mt-1 text-sm text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">Outcome</span>
                  <p className="mt-1 text-sm text-muted-foreground">{project.outcome}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <h3 className="heading-card mb-6 text-center">Other Projects</h3>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <div
                  key={project}
                  className="card-subtle flex items-center gap-3"
                >
                  <div className="accent-dot flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
