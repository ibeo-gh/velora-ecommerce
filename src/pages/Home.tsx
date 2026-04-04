import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import PromoBanner from "../components/PromoBanner";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[90px]">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <Services />
        <PromoBanner />
        <CustomerReviews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
