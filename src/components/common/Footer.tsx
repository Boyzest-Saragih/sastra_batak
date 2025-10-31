import type React from "react"

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-sm text-gray-600">
              A comprehensive resource exploring the fundamentals of artificial intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Introduction", "Concepts", "Applications", "Ethics"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Research", "Community", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "GitHub", "Email"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            Copyright © {currentYear} AI Showcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
