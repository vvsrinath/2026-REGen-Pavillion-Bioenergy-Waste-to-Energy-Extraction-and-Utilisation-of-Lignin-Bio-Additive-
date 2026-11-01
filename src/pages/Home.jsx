import Hero from "../components/Hero";
import ResearchOverview from "../components/ResearchOverview";
import Workflow from "../components/Workflow";
import Methodology from "../components/Methodology";
import DataVisualisation from "../components/DataVisualisation";
import Impact from "../components/Impact";
import Collaboration from "../components/Collaboration";
import Funding from "../components/Funding";
import Team from "../components/Team";
import Publications from "../components/Publications";
import FinalCta from "../components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchOverview />
      <Workflow />
      <Methodology />
      <DataVisualisation />
      <Impact />
      <Collaboration />
      <Funding />
      <Team />
      <Publications />
      <FinalCta />
    </>
  );
}
