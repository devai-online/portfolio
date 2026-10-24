import Sidebar from '@/components/Sidebar';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Leadership from '@/components/sections/Leadership';
import Accreditation from '@/components/sections/Accreditation';
import Education from '@/components/sections/Education';
import Research from '@/components/sections/Research';
import Teaching from '@/components/sections/Teaching';
import Ieee from '@/components/sections/Ieee';
import Talks from '@/components/sections/Talks';
import Industry from '@/components/sections/Industry';
import Honours from '@/components/sections/Honours';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* Offset for the fixed sidebar (desktop) and mobile top bar */}
      <main className="pt-16 lg:pl-72 lg:pt-0">
        <Home />
        <About />
        <Leadership />
        <Accreditation />
        <Education />
        <Research />
        <Teaching />
        <Ieee />
        <Talks />
        <Industry />
        <Honours />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
