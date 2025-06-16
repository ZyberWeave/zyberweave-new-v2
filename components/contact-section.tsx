import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ready to start your next project? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>We'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[100px]" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
