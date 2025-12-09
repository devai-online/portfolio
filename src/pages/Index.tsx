import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import IEEESection from '@/components/IEEESection';
import GallerySection from '@/components/GallerySection';
import StatementSection from '@/components/StatementSection';
import VisitorStats from '@/components/VisitorStats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <IEEESection />
      <GallerySection />
      <StatementSection />
      <VisitorStats />
      <Footer />
    </main>
  );
};

export default Index;
