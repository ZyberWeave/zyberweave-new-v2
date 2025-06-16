'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/auth/login-form'
import { type User } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (user: User) => {
    // In a real app, you'd set this in a context or state management solution
    router.push('/')
  }

  return <LoginForm onLogin={handleLogin} />
}