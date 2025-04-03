import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Pricing } from './Pricing';
import { Tagline } from './Tagline';
import { UseCases } from './UseCases';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Tagline />
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
        <HowItWorks />
        <UseCases />
        <Pricing />
      </div>
    </div>
  );
} 