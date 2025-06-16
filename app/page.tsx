'use client'

import { useState } from 'react'
import { getCurrentUser, type User } from '@/lib/auth'
import LoginForm from '@/components/auth/login-form'
import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"

export default function HomePage() {
  const [user, setUser] = useState<User | null>(getCurrentUser())

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser)
  }

  // Show the marketing site for digital agency
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onLogin={() => window.location.href = '/admin'} />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}