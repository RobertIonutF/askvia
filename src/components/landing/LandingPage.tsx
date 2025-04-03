import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Pricing } from './Pricing';
import { Tagline } from './Tagline';
import { UseCases } from './UseCases';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Tagline />
      <Hero />
      <HowItWorks />
      <UseCases />
      <Pricing />
    </div>
  );
} 