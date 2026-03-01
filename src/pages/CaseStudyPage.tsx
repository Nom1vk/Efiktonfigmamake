import { CaseStudy } from '../components/CaseStudy';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PaletteSwitcher } from '../components/PaletteSwitcher';

export function CaseStudyPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <Navigation />
      <main id="main-content" style={{ paddingTop: '64px' }}>
        <CaseStudy />
      </main>
      <Footer />
      <PaletteSwitcher />
    </div>
  );
}
