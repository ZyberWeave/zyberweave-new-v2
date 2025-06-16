import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Layout, Megaphone, Search } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a comprehensive suite of digital services to help your business thrive online.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Layout className="h-12 w-12 text-gray-900 dark:text-gray-50 mb-4" />
              <CardTitle>Web Design</CardTitle>
              <CardDescription>Stunning, user-friendly websites tailored to your brand.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                From concept to launch, we create visually appealing and highly functional websites.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Code className="h-12 w-12 text-gray-900 dark:text-gray-50 mb-4" />
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Robust and scalable web applications built with modern technologies.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Custom solutions, e-commerce platforms, and interactive experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Search className="h-12 w-12 text-gray-900 dark:text-gray-50 mb-4" />
              <CardTitle>SEO Optimization</CardTitle>
              <CardDescription>Improve your search engine rankings and drive organic traffic.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Strategic keyword research, on-page optimization, and link building.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <CardHeader>
              <Megaphone className="h-12 w-12 text-gray-900 dark:text-gray-50 mb-4" />
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Comprehensive strategies to reach your target audience.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Social media marketing, content creation, and paid advertising campaigns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
