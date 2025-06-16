import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Layout, Megaphone, Search, Users, Shield } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Digital Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive digital solutions to grow your business and enhance your online presence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Custom websites and web applications built with modern technologies.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                React, Node.js, TypeScript, and more. Scalable solutions for your business.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Layout className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>UI/UX Design</CardTitle>
              <CardDescription>Beautiful, user-friendly designs that convert visitors into customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Modern interfaces designed with your users in mind for optimal experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Megaphone className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Strategic marketing campaigns to boost your online presence.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                SEO, social media, content marketing, and paid advertising strategies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Brand Identity</CardTitle>
              <CardDescription>Complete branding solutions from logo design to brand guidelines.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create a memorable brand that resonates with your target audience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Search className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>SEO Optimization</CardTitle>
              <CardDescription>Improve your search rankings and drive organic traffic.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technical SEO, content optimization, and local search strategies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Shield className="h-12 w-12 text-pink-600 mb-4" />
              <CardTitle>Maintenance & Support</CardTitle>
              <CardDescription>Ongoing support and maintenance for your digital assets.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Keep your website secure, updated, and performing at its best.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}