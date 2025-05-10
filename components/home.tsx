import HeroBanner from "@/components/sections/hero-banner"
import UniversitySection from "@/components/sections/university-section"
import CoursesSection from "@/components/sections/courses-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import TrustedBySection from "@/components/sections/trusted-by-section"
import MediaSpotlightSection from "@/components/sections/media-spotlight-section"
import ConnectSection from "@/components/sections/connect-section"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <UniversitySection />
      <CoursesSection />
      <TestimonialsSection />
      <TrustedBySection />
      <MediaSpotlightSection />
      <ConnectSection />
    </>
  )
}
