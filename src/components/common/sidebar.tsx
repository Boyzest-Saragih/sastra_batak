import { useState } from "react"
import { Menu, X } from "lucide-react"

interface SidebarProps {
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "andung_andung", label: "Andung Andung" },
  { id: "umpasa", label: "Umpasa" },
  { id: "umpama", label: "Umpama" },
]

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (sectionId: string) => {
    onNavigate?.(sectionId)
    setOpen(false)
  }

  return (
    <>
      {/* Hamburger - only visible on mobile */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-white shadow-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 z-40`}
      >
        <div className="p-6 overflow-y-auto h-full flex flex-col">
          <h2 className="text-xl font-bold mb-6">Home</h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavigate(section.id)}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    activeSection === section.id
                      ? "text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 text-xs text-gray-400">
            © 2025 AI Docs Layout
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </>
  )
}
