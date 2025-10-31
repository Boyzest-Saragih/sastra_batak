import { useState, useEffect } from "react"
import HeroSection from "../components/sections/HeroSection"
import ContentSection from "../components/sections/ContentSection"
import ImageGallery from "../components/sections/ImageGallery"
import Footer from "../components/common/Footer"
import Sidebar from "@/components/common/sidebar"

type SectionId = "introduction" | "andung_andung" | "umpasa" | "umpama"

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("introduction")

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ["introduction", "andung_andung", "umpasa", "umpama",]

      for (const sectionId of sections) {
        const el = document.querySelector(`[data-section="${sectionId}"]`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector<HTMLElement>(`[data-section="${sectionId}"]`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main content area */}
      <main className="flex-1 lg:ml-64">
        <HeroSection />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ContentSection />
        </div>
        <ImageGallery />
        <Footer />
      </main>
    </div>
  )
}
