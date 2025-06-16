'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getBlogPostById, getBlogPosts, type BlogPost } from '@/lib/content-data'
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    if (params.id) {
      const post = getBlogPostById(params.id as string)
      setBlogPost(post || null)
      
      if (post) {
        // Get related posts from the same category
        const allPosts = getBlogPosts()
        const related = allPosts
          .filter(p => p.id !== post.id && p.category === post.category)
          .slice(0, 3)
        setRelatedPosts(related)
      }
    }
  }, [params.id])

  if (!blogPost) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader onLogin={() => window.location.href = '/admin'} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onLogin={() => window.location.href = '/admin'} />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="outline" className="mb-6">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              
              <Badge className="mb-4">{blogPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPost.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{blogPost.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <div>
                    <span className="font-medium text-gray-900">{blogPost.author}</span>
                    <span className="text-sm block">{blogPost.authorRole}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPost.publishDate.toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime} min read
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {blogPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.slice(2, -2)}
                      </h3>
                    )
                  }
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h4 className="font-semibold mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 left-4">{post.category}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime} min
                          </div>
                        </div>
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}