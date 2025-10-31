import React from "react"

const images = [
  {
    id: 1,
    alt: "batak",
    src: "/batak.jpg",
  },
  {
    id: 2,
    alt: "batak",
    src: "/batak.jpg",
  },
  {
    id: 3,
    alt: "batak",
    src: "/batak.jpg",
  },
  {
    id: 4,
    alt: "batak",
    src: "/batak.jpg",
  },
  {
    id: 5,
    alt: "batak",
    src: "/batak.jpg",
  },
  {
    id: 6,
    alt: "batak",
    src: "/batak.jpg",
  },
]

export default function ImageGallery(): React.JSX.Element {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Visual Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
