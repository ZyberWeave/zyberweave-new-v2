'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getNicheKits, getNicheKitsByIndustry, type NicheKit } from '@/lib/content-data'
import { Search, Star, Download, Eye, ShoppingCart } from 'lucide-react'

export default function NicheKitsPage() {
  const [nicheKits] = useState<NicheKit[]>(getNicheKits())
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')

  const industries = ['all', 'Food & Beverage', 'Health & Fitness', 'Real Estate', 'E-commerce', 'Technology', 'Fashion']

  const filteredKits = nicheKits.filter(kit => {
    const matchesSearch = kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kit.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === 'all' || kit.industry === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  const featuredKits = nicheKits.filter(kit => kit.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onLogin={() => window.location.href = '/admin'} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry-Specific Design Kits
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Ready-to-use design templates and branding packages tailored for specific industries. 
                Get professional designs that speak directly to your target audience.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search kits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold mb-2">{nicheKits.length}+</div>
                  <div className="text-blue-100">Design Kits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{industries.length - 1}</div>
                  <div className="text-blue-100">Industries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5K+</div>
                  <div className="text-blue-100">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Kits */}
        {featuredKits.length > 0 && selectedIndustry === 'all' && !searchTerm && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Design Kits</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {featuredKits.map((kit) => (
                  <Card key={kit.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <Image
                        src={kit.image}
                        alt={kit.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-500">
                        Featured
                      </Badge>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{kit.industry}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{kit.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{kit.name}</CardTitle>
                      <CardDescription>{kit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">${kit.price}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Download className="h-4 w-4" />
                          {kit.downloads}
                        </div>
                      </div>
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Kits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Design Kits'}
            </h2>
            
            {filteredKits.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No design kits found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedIndustry('all')
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredKits.map((kit) => (
                  <Card key={kit.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <Image
                        src={kit.image}
                        alt={kit.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {kit.featured && (
                        <Badge className="absolute top-4 left-4 bg-orange-500">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{kit.industry}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{kit.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-1">{kit.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{kit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Includes:</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          {kit.includes.slice(0, 3).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                          {kit.includes.length > 3 && (
                            <li>• +{kit.includes.length - 3} more items</li>
                          )}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">${kit.price}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Download className="h-4 w-4" />
                          {kit.downloads}
                        </div>
                      </div>
                      <Button className="w-full" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Design Kits?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Professional Quality</h3>
                <p className="text-gray-600">Designed by industry experts with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Instant Download</h3>
                <p className="text-gray-600">Get your files immediately after purchase</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                </div>
                <h3 className="font-semibold mb-2">Customizable</h3>
                <p className="text-gray-600">Fully editable templates to match your brand</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Get help when you need it with our support team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Kit CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Industry Kit?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see your industry? We can create a custom design kit specifically tailored 
              to your business needs and target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="/contact">Request Custom Kit</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}