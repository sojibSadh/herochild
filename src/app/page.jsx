import Banner from "@/components/home/Banner";
import BenefitsSection from "@/components/home/BenefitsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PopularProducts from "@/components/home/PopularProducts";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";

export default async function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
      <section>
        <FeaturesSection></FeaturesSection>
      </section>
      <section>
        <CategoriesSection></CategoriesSection>
      </section>
      <section>
        <PopularProducts></PopularProducts>
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <CTASection></CTASection>
      </section>
    </div>
  );
}
