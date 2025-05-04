import Image from "next/image";

import Abimance from "components/About/Abimanca";
import AbsolutelyFried from "components/About/AbsolutelyFired";
import MisionVision from "components/About/MisionVision";
import Team from "components/About/Team";
import Testinomails from "components/About/Testinomails";
import OurJourney from "components/About/OurJourney";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/for_frame.png')] bg-cover bg-center">
      
   <AbsolutelyFried/>
   <MisionVision/>
   <OurJourney/>
   <Abimance/>
   <Testinomails/>
   <Team/>
   </div>
  );
}
