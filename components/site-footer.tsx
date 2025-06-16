import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DigitalCraft Agency</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses through innovative digital solutions. 
              We create stunning websites, powerful brands, and effective marketing strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Web Development
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                UI/UX Design
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Digital Marketing
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Brand Identity
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                SEO Optimization
              </Link>
            </nav>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/packages" className="block text-gray-300 hover:text-white text-sm">
                Packages
              </Link>
              <Link href="/niche-kits" className="block text-gray-300 hover:text-white text-sm">
                Niche Kits
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white text-sm">
                Blog
              </Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-white text-sm">
                Testimonials
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                hello@digitalcraft.com
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  123 Digital Street<br />
                  Tech City, TC 12345
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} DigitalCraft Agency. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}