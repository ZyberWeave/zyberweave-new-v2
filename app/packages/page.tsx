'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getPackages, getPackagesByCategory, type Package } from '@/lib/content-data'
import { Check, Star, Clock, Zap } from 'lucide-react'

export default function PackagesPage() {
  const [packages] = useState<Package[]>(getPackages())
  const [selectedCategory, setSelectedCategory] = useState<Package['category'] | 'all'>('all')

  const categories: Array<Package['category'] | 'all'> = ['all', 'web', 'branding', 'marketing', 'ecommerce']
  const categoryLabels = {
    all: 'All Packages',
    web: 'Web Development',
    branding: 'Branding',
    marketing: 'Marketing',
    ecommerce: 'E-commerce'
  }

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : getPackagesByCategory(selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onLogin={() => window.location.href = '/admin'} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your Perfect Package
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transparent pricing, comprehensive solutions. Select the package that fits your business needs 
              and budget. All packages include our signature quality and support.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-blue-300" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-green-400" />
                <span>Ongoing Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {categoryLabels[category]}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPackages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute top-4 right-4 bg-blue-500">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-2">
                    <div className="mb-4">
                      <Badge variant="outline" className="capitalize">
                        {pkg.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {pkg.description}
                    </CardDescription>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-blue-600">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <div className="text-sm text-gray-600 mt-1">
                        Timeline: {pkg.duration}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                      <ul className="space-y-1">
                        {pkg.deliverables.map((deliverable, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : ''
                      }`}
                    >
                      Get Started
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Free consultation included
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Package CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Every business is unique. If our standard packages don't quite fit your needs, 
                  we'd love to create a custom solution tailored specifically for your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Request Custom Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">What's included in the support period?</h3>
                <p className="text-gray-600">
                  Our support includes bug fixes, minor updates, technical assistance, and guidance on using your new digital assets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade my package later?</h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade your package at any time. We'll credit what you've already paid toward the higher tier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans for all packages. Contact us to discuss options that work for your budget.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What if I'm not satisfied?</h3>
                <p className="text-gray-600">
                  We offer unlimited revisions during the project and a 30-day satisfaction guarantee on all completed work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Choose your package and let's begin transforming your digital presence today. 
              Free consultation included with every package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/contact">Ask Questions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}