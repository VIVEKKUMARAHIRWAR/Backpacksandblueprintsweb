import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProblemStatement from "@/components/home/ProblemStatement";
import OurApproach from "@/components/home/OurApproach";
import Offerings from "@/components/home/Offerings";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <ProblemStatement />
      <OurApproach />
      <Offerings />
      <ImpactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;