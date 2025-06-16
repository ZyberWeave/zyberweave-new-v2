import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Connect. Create. Succeed.
            </h1>
            <p className="max-w-[600px] text-blue-100 md:text-xl">
              The premier freelancing platform connecting talented professionals with businesses worldwide. 
              Find your next project or hire the perfect freelancer.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="#contact">Find Freelancers</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="#services">Start Freelancing</Link>
            </Button>
          </div>
        </div>
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          width="600"
          height="400"
          alt="Freelancer working on laptop"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
      </div>
    </section>
  )
}