import Hero from "@/components/sections/Hero";
import MatchDeck from "@/components/sections/MatchDeck";
import TrustPillars from "@/components/sections/TrustPillars";
import BrowseCategories from "@/components/sections/BrowseCategories";
import FeaturedSellers from "@/components/sections/FeaturedSellers";
import Voices from "@/components/sections/Voices";
import BeginSearch from "@/components/sections/BeginSearch";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BrowseCategories />
      <MatchDeck />
      <TrustPillars />
      <FeaturedSellers />
      <Voices />
      <BeginSearch />
      <Footer />
    </>
  );
}
