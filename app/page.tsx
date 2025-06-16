import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
