import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Innovate. Create. Elevate.
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              We are a digital agency specializing in crafting exceptional web experiences, driving growth, and building
              strong online presences for businesses.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=600"
          width="600"
          height="400"
          alt="Hero Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
      </div>
    </section>
  )
}
