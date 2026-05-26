import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ToastProvider } from '@/components/ui/Toast';
import { WaFab } from '@/components/ui/WaFab';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Courses } from '@/components/Courses/Courses';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Founder } from '@/components/Founder/Founder';
import { WhyOxford } from '@/components/WhyOxford/WhyOxford';
import { SpokenEnglishBand } from '@/components/SpokenEnglishBand/SpokenEnglishBand';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer';

function PageContent() {
  // Single IntersectionObserver for all .reveal elements across the page
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="top" className="pt-[80px] md:pt-[92px]">
        <Hero />
        <Courses />
        <Testimonials />
        <Founder />
        <WhyOxford />
        <SpokenEnglishBand />
        <Contact />
      </main>
      <Footer />
      <WaFab />
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <PageContent />
    </ToastProvider>
  );
}
