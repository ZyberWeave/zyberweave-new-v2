import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SiteHeaderProps {
  onLogin: () => void
}

export default function SiteHeader({ onLogin }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          FreelanceHub
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="#services" className="text-sm font-medium hover:underline">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
          <Button onClick={onLogin}>
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  )
}