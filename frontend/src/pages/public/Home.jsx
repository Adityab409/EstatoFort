import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
import BuilderPartners from "../../components/home/BuilderPartners";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import CTASection from "../../components/home/CTASection";

function Home() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <BuilderPartners />
            <FeaturedProperties />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
        </>
    );
}

export default Home;