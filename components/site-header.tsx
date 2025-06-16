import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Your Agency
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="#services" className="text-sm font-medium hover:underline">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
