import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface SiteHeaderProps {
  onLogin: () => void
}

export default function SiteHeader({ onLogin }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          DigitalCraft Agency
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-sm font-medium hover:underline">
            Services
          </Link>
          <Link href="/packages" className="text-sm font-medium hover:underline">
            Packages
          </Link>
          <Link href="/niche-kits" className="text-sm font-medium hover:underline">
            Niche Kits
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline">
            Blog
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:underline">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
          <Button asChild>
            <Link href="/admin">Admin Panel</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link href="#services" className="block text-sm font-medium hover:underline">
              Services
            </Link>
            <Link href="/packages" className="block text-sm font-medium hover:underline">
              Packages
            </Link>
            <Link href="/niche-kits" className="block text-sm font-medium hover:underline">
              Niche Kits
            </Link>
            <Link href="/blog" className="block text-sm font-medium hover:underline">
              Blog
            </Link>
            <Link href="/testimonials" className="block text-sm font-medium hover:underline">
              Testimonials
            </Link>
            <Link href="#contact" className="block text-sm font-medium hover:underline">
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/admin">Admin Panel</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}