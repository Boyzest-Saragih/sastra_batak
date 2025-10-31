import { useEffect, useRef } from "react"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (buttonsRef.current) observer.observe(buttonsRef.current)

    return () => observer.disconnect()
  }, [])

  const handleScroll = () => {
    const contentSection = document.getElementById("content")
    if (contentSection) contentSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl sm:max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 py-20 sm:py-24">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight opacity-0 transition-all duration-1000 ease-out"
          style={{
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          Ragam{" "}
          <span className="text-orange-600">Kesusasteraan </span>
          Batak<span className="text-orange-600"> Toba </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 transition-all duration-1000 ease-out"
          style={{
            animation: "fadeInUp 1s ease-out 0.2s forwards",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jelajahi
          makna, filosofi, dan nilai budaya yang terkandung dalam karya sastra
          Batak Toba yang penuh pesan kehidupan.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 transition-all duration-1000 ease-out"
          style={{
            animation: "fadeInUp 1s ease-out 0.4s forwards",
          }}
        >
          <button
            onClick={handleScroll}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-orange-600 text-white text-sm sm:text-base font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Mulai Membaca
          </button>

          <button
            onClick={handleScroll}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-gray-900 text-gray-900 text-sm sm:text-base font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  )
}
