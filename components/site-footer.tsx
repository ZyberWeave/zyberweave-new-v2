import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full py-6 border-t bg-gray-900 text-white">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} DigitalCraft Agency. All rights reserved.</p>
        <nav className="flex items-center space-x-4">
          <Link href="#" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  )
}