import CollectionShowcase from '@/components/home/collection-showcase/collection-showcase';
import FeaturedCategories from '@/components/home/featured-categories';
import FeaturedProducts from '@/components/home/featured-products';
import HeroSection from '@/components/home/hero';
import NewArrivals from '@/components/home/new-arrivals';
import NewsletterCTA from '@/components/home/newsletter-cta';
import TrendingBestSellers from '@/components/home/trending-bestseller';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <CollectionShowcase />
      <NewArrivals />
      {/* <BrandStory /> Builds trust */}
      <TrendingBestSellers />
      {/* <TestimonialsCarousel /> Social proof */}
      {/* <ProductFinder /> Interactive engagement */}
      {/* <BlogPreview /> Content marketing */}
      {/* <PersonalizedRecommendations /> AI-powered */}
      {/* <GiftGuides /> Seasonal relevance */}
      {/* <SocialProof /> UGC */}
      {/* <ValuePropositions /> Trust signals */}
      <NewsletterCTA />
    </>
  );
}
