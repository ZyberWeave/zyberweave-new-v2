'use client'

import { useState } from 'react'
import { getCurrentUser, type User } from '@/lib/auth'
import LoginForm from '@/components/auth/login-form'
import FreelancerDashboard from '@/components/freelancer/freelancer-dashboard'
import AdminDashboard from '@/components/admin/admin-dashboard'
import ClientDashboard from '@/components/client/client-dashboard'
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

  const handleLogout = () => {
    setUser(null)
  }

  // If user is not logged in, show the marketing site
  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader onLogin={() => setUser({ id: 'temp', email: '', name: '', role: 'client', createdAt: new Date() })} />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    )
  }

  // Show appropriate dashboard based on user role
  switch (user.role) {
    case 'admin':
      return <AdminDashboard user={user} />
    case 'freelancer':
      return <FreelancerDashboard user={user} />
    case 'client':
      return <ClientDashboard user={user} />
    default:
      return <LoginForm onLogin={handleLogin} />
  }
}