import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Layout, Megaphone, Search, Users, Shield } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose FreelanceHub?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide everything you need to succeed in the freelancing world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Talented Freelancers</CardTitle>
              <CardDescription>Access to thousands of skilled professionals worldwide.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                From developers to designers, find the perfect match for your project.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Secure Payments</CardTitle>
              <CardDescription>Protected transactions with escrow and milestone payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your money is safe with our secure payment system and dispute resolution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Search className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Smart Matching</CardTitle>
              <CardDescription>AI-powered matching system to find the best fit.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our algorithm matches projects with freelancers based on skills and experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Code className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Development</CardTitle>
              <CardDescription>Web, mobile, and software development services.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full-stack developers, mobile app creators, and software engineers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Layout className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Design</CardTitle>
              <CardDescription>UI/UX, graphic design, and branding services.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Creative professionals who bring your vision to life.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Megaphone className="h-12 w-12 text-pink-600 mb-4" />
              <CardTitle>Marketing</CardTitle>
              <CardDescription>Digital marketing and content creation experts.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Grow your business with marketing specialists and content creators.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}