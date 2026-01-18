import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ResearchSection } from "@/components/ResearchSection";
import { HackathonsSection } from '@/components/HackathonsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Harshitha M | AIML Student & Aspiring Engineer</title>
      <meta 
        name="description" 
        content="Portfolio of Harshitha M - B.Tech Computer Science (AIML) student passionate about AI, machine learning, and building real-world systems. Open to internship opportunities." 
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <HackathonsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
