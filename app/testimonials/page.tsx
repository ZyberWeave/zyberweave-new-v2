'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getTestimonials, type Testimonial } from '@/lib/content-data'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsPage() {
  const [testimonials] = useState<Testimonial[]>(getTestimonials())
  const [filter, setFilter] = useState<string>('all')

  const projectTypes = ['all', 'E-commerce Website', 'Brand Identity', 'Digital Marketing', 'Mobile App Development']
  
  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.projectType === filter)

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onLogin={() => window.location.href = '/admin'} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. See what our clients have to say about 
              working with DigitalCraft Agency and the results we've delivered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-2">{testimonials.length}+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {projectTypes.map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type)}
                  className="capitalize"
                >
                  {type === 'all' ? 'All Projects' : type}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    {/* Project Type Badge */}
                    <Badge className="absolute top-4 right-4" variant="outline">
                      {testimonial.projectType}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Clients Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Round-the-clock assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                </div>
                <h3 className="font-semibold mb-2">Satisfaction</h3>
                <p className="text-gray-600">We don't stop until you're completely happy</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-orange-600">Fast</div>
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-gray-600">Quick turnaround without compromising quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Start your project today and become our next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/packages">View Our Packages</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}