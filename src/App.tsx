import './App.css'
import {HeroSection} from "./components/heroSection";
import {FinalCtaSection} from "./components/finalCtaSection";
import {HowItWorksSection} from "./components/howItWorksSection";
import {SocialProofSection} from "./components/socialProofSection";
import {AudienceSection} from "./components/audienceSection";
import {FeaturesSection} from "./components/featuresSection";
import {ValueSection} from "./components/valueSection";

function App() {

  return (
    <>
        <HeroSection />
        <ValueSection />
        <FeaturesSection />
        <AudienceSection />
        <SocialProofSection />
        <HowItWorksSection />
        <FinalCtaSection />
    </>
  )
}

export default App
