export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  publishDate: Date
  readTime: number
  category: string
  tags: string[]
  image: string
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image: string
  projectType: string
  featured: boolean
}

export interface Package {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
  popular: boolean
  category: 'web' | 'branding' | 'marketing' | 'ecommerce'
  deliverables: string[]
  timeline: string
}

export interface NicheKit {
  id: string
  name: string
  description: string
  industry: string
  price: number
  includes: string[]
  preview: string
  downloads: number
  rating: number
  image: string
  featured: boolean
}

// Mock Blog Posts
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Design: Trends to Watch in 2024',
    excerpt: 'Discover the latest web design trends that will shape the digital landscape this year, from AI integration to sustainable design practices.',
    content: `The digital landscape is evolving rapidly, and staying ahead of web design trends is crucial for businesses looking to maintain a competitive edge. In 2024, we're seeing several exciting developments that are reshaping how we approach web design.

**AI-Powered Design Tools**
Artificial intelligence is revolutionizing the design process, enabling designers to create more personalized and efficient user experiences. From automated layout suggestions to intelligent color palette generation, AI is becoming an indispensable tool in the designer's toolkit.

**Sustainable Web Design**
Environmental consciousness is driving a new movement in web design focused on reducing digital carbon footprints. This includes optimizing images, minimizing code, and choosing green hosting solutions.

**Micro-Interactions and Animations**
Subtle animations and micro-interactions are becoming more sophisticated, providing users with delightful feedback and improving overall user engagement without overwhelming the experience.

**Voice User Interface Integration**
With the rise of voice assistants, websites are beginning to incorporate voice navigation and commands, making digital experiences more accessible and intuitive.

**Dark Mode and Accessibility**
Dark mode isn't just a trend anymore—it's becoming a standard expectation. Coupled with improved accessibility features, websites are becoming more inclusive and user-friendly.

The key to successful web design in 2024 is balancing innovation with usability, ensuring that new technologies enhance rather than complicate the user experience.`,
    author: 'Sarah Chen',
    authorRole: 'Lead UI/UX Designer',
    publishDate: new Date('2024-01-15'),
    readTime: 8,
    category: 'Design',
    tags: ['Web Design', 'Trends', 'UI/UX', 'Technology'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    featured: true
  },
  {
    id: '2',
    title: 'Building High-Converting Landing Pages: A Complete Guide',
    excerpt: 'Learn the essential elements and strategies for creating landing pages that convert visitors into customers with proven techniques and real examples.',
    content: `Creating a high-converting landing page is both an art and a science. It requires understanding your audience, crafting compelling messaging, and optimizing every element for maximum impact.

**Understanding Your Audience**
Before designing your landing page, you need to deeply understand who your visitors are, what they're looking for, and what motivates them to take action. This involves creating detailed buyer personas and mapping out the customer journey.

**Crafting a Compelling Headline**
Your headline is the first thing visitors see, and it needs to immediately communicate your value proposition. A great headline is clear, specific, and addresses a pain point or desire your audience has.

**Designing for Conversion**
The visual design of your landing page should guide visitors toward your call-to-action. This includes using contrasting colors for buttons, creating visual hierarchy, and minimizing distractions.

**Social Proof and Trust Signals**
Including testimonials, reviews, security badges, and client logos helps build trust and credibility with your visitors, making them more likely to convert.

**A/B Testing and Optimization**
The best landing pages are continuously tested and optimized. This includes testing different headlines, images, button colors, and form lengths to see what performs best.

Remember, a high-converting landing page is never "finished"—it's always being refined based on data and user feedback.`,
    author: 'Mike Rodriguez',
    authorRole: 'Conversion Specialist',
    publishDate: new Date('2024-01-10'),
    readTime: 12,
    category: 'Marketing',
    tags: ['Landing Pages', 'Conversion', 'Marketing', 'Optimization'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    featured: true
  },
  {
    id: '3',
    title: 'SEO in 2024: What Every Business Owner Should Know',
    excerpt: 'Navigate the changing SEO landscape with insights into the latest algorithm updates, ranking factors, and strategies that actually work.',
    content: `Search Engine Optimization continues to evolve, and 2024 brings new challenges and opportunities for businesses looking to improve their online visibility.

**Core Web Vitals and User Experience**
Google's focus on user experience signals means that page speed, mobile responsiveness, and overall site performance are more important than ever for rankings.

**E-A-T and Content Quality**
Expertise, Authoritativeness, and Trustworthiness remain crucial ranking factors. Creating high-quality, authoritative content that demonstrates expertise in your field is essential.

**Local SEO for Businesses**
For businesses with physical locations, local SEO optimization including Google Business Profile management and local citations is critical for visibility.

**AI and Search**
The integration of AI in search results means optimizing for featured snippets and voice search queries is becoming increasingly important.

**Technical SEO Fundamentals**
Proper site structure, schema markup, and technical optimization remain the foundation of good SEO performance.

The key to SEO success in 2024 is focusing on creating valuable content for users while ensuring your technical foundation is solid.`,
    author: 'Jennifer Park',
    authorRole: 'SEO Strategist',
    publishDate: new Date('2024-01-05'),
    readTime: 10,
    category: 'SEO',
    tags: ['SEO', 'Digital Marketing', 'Google', 'Strategy'],
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
    featured: false
  }
]

// Mock Testimonials
export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'TechCorp Inc.',
    role: 'CEO',
    content: 'DigitalCraft transformed our online presence completely. Their team delivered a stunning website that not only looks amazing but also converts visitors into customers. Our online sales increased by 150% within the first three months.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    projectType: 'E-commerce Website',
    featured: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Startup Solutions',
    role: 'Founder',
    content: 'Working with DigitalCraft was an absolute pleasure. They understood our vision from day one and brought it to life with incredible attention to detail. The branding package they created perfectly captures our company\'s essence.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    projectType: 'Brand Identity',
    featured: true
  },
  {
    id: '3',
    name: 'Mike Wilson',
    company: 'RetailPlus',
    role: 'Marketing Director',
    content: 'The digital marketing campaign DigitalCraft created for us exceeded all expectations. Our website traffic doubled, and our conversion rate improved by 85%. They truly understand how to drive results.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    projectType: 'Digital Marketing',
    featured: true
  },
  {
    id: '4',
    name: 'Lisa Chen',
    company: 'HealthTech Solutions',
    role: 'Product Manager',
    content: 'The mobile app they developed for us is intuitive, fast, and our users love it. The team was professional, met all deadlines, and provided excellent support throughout the project.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    projectType: 'Mobile App Development',
    featured: false
  }
]

// Mock Packages
export const mockPackages: Package[] = [
  {
    id: '1',
    name: 'Startup Web Package',
    description: 'Perfect for new businesses looking to establish their online presence with a professional website.',
    price: 2999,
    duration: '2-3 weeks',
    features: [
      'Custom responsive design',
      '5-page website',
      'Mobile optimization',
      'Basic SEO setup',
      'Contact form integration',
      'Social media integration',
      '3 months support'
    ],
    popular: false,
    category: 'web',
    deliverables: [
      'Fully responsive website',
      'Content management system',
      'SEO-optimized pages',
      'Google Analytics setup'
    ],
    timeline: '2-3 weeks'
  },
  {
    id: '2',
    name: 'Business Growth Package',
    description: 'Comprehensive solution for established businesses ready to scale their digital presence.',
    price: 5999,
    duration: '4-6 weeks',
    features: [
      'Custom responsive design',
      '10-page website',
      'Advanced SEO optimization',
      'E-commerce functionality',
      'Blog setup',
      'Email marketing integration',
      'Analytics dashboard',
      '6 months support'
    ],
    popular: true,
    category: 'web',
    deliverables: [
      'Professional website with CMS',
      'E-commerce platform',
      'SEO strategy implementation',
      'Marketing automation setup'
    ],
    timeline: '4-6 weeks'
  },
  {
    id: '3',
    name: 'Enterprise Solution',
    description: 'Full-scale digital transformation for large organizations with complex requirements.',
    price: 12999,
    duration: '8-12 weeks',
    features: [
      'Custom web application',
      'Unlimited pages',
      'Advanced integrations',
      'Custom functionality',
      'Multi-language support',
      'Advanced security',
      'Performance optimization',
      '12 months support'
    ],
    popular: false,
    category: 'web',
    deliverables: [
      'Enterprise-grade web application',
      'Custom integrations',
      'Security implementation',
      'Performance optimization'
    ],
    timeline: '8-12 weeks'
  },
  {
    id: '4',
    name: 'Brand Identity Package',
    description: 'Complete branding solution to establish a memorable and professional brand identity.',
    price: 3999,
    duration: '3-4 weeks',
    features: [
      'Logo design (3 concepts)',
      'Brand guidelines',
      'Color palette',
      'Typography selection',
      'Business card design',
      'Letterhead design',
      'Social media templates',
      'Brand style guide'
    ],
    popular: false,
    category: 'branding',
    deliverables: [
      'Complete brand identity system',
      'Logo files in all formats',
      'Brand guidelines document',
      'Marketing collateral templates'
    ],
    timeline: '3-4 weeks'
  }
]

// Mock Niche Kits
export const mockNicheKits: NicheKit[] = [
  {
    id: '1',
    name: 'Restaurant Website Kit',
    description: 'Complete website template and branding package specifically designed for restaurants and food businesses.',
    industry: 'Food & Beverage',
    price: 299,
    includes: [
      'Restaurant website template',
      'Menu design templates',
      'Social media graphics pack',
      'Logo variations',
      'Color schemes',
      'Typography guide',
      'Photo filters preset'
    ],
    preview: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    downloads: 1247,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    featured: true
  },
  {
    id: '2',
    name: 'Fitness Studio Kit',
    description: 'Energetic and motivating design package for gyms, fitness studios, and personal trainers.',
    industry: 'Health & Fitness',
    price: 249,
    includes: [
      'Fitness website template',
      'Class schedule templates',
      'Workout graphics pack',
      'Motivational quote designs',
      'Social media templates',
      'Email newsletter templates',
      'Membership card designs'
    ],
    preview: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    downloads: 892,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    featured: true
  },
  {
    id: '3',
    name: 'Real Estate Kit',
    description: 'Professional and trustworthy design package for real estate agents and property companies.',
    industry: 'Real Estate',
    price: 349,
    includes: [
      'Real estate website template',
      'Property listing templates',
      'Agent profile designs',
      'Market report templates',
      'Social media graphics',
      'Email signatures',
      'Business card designs'
    ],
    preview: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    downloads: 634,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    featured: false
  },
  {
    id: '4',
    name: 'E-commerce Startup Kit',
    description: 'Everything you need to launch your online store with professional branding and marketing materials.',
    industry: 'E-commerce',
    price: 399,
    includes: [
      'E-commerce website template',
      'Product photography guide',
      'Social media ad templates',
      'Email marketing templates',
      'Packaging design templates',
      'Brand guidelines',
      'Marketing calendar template'
    ],
    preview: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    downloads: 1156,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    featured: true
  }
]

// Data access functions
export const getBlogPosts = (): BlogPost[] => mockBlogPosts
export const getFeaturedBlogPosts = (): BlogPost[] => mockBlogPosts.filter(post => post.featured)
export const getBlogPostById = (id: string): BlogPost | undefined => mockBlogPosts.find(post => post.id === id)
export const getBlogPostsByCategory = (category: string): BlogPost[] => mockBlogPosts.filter(post => post.category === category)

export const getTestimonials = (): Testimonial[] => mockTestimonials
export const getFeaturedTestimonials = (): Testimonial[] => mockTestimonials.filter(testimonial => testimonial.featured)

export const getPackages = (): Package[] => mockPackages
export const getPackagesByCategory = (category: Package['category']): Package[] => mockPackages.filter(pkg => pkg.category === category)

export const getNicheKits = (): NicheKit[] => mockNicheKits
export const getFeaturedNicheKits = (): NicheKit[] => mockNicheKits.filter(kit => kit.featured)
export const getNicheKitsByIndustry = (industry: string): NicheKit[] => mockNicheKits.filter(kit => kit.industry === industry)