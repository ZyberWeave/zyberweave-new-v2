export interface Client {
  id: string
  name: string
  email: string
  company: string
  phone: string
  status: 'active' | 'inactive' | 'prospect' | 'churned'
  totalValue: number
  monthlyValue: number
  acquisitionDate: Date
  lastContact: Date
  projects: number
  industry: string
  priority: 'high' | 'medium' | 'low'
}

export interface Freelancer {
  id: string
  name: string
  email: string
  phone: string
  skills: string[]
  hourlyRate: number
  status: 'available' | 'busy' | 'inactive'
  rating: number
  totalEarned: number
  projectsCompleted: number
  joinDate: Date
  lastActive: Date
  specialization: string
  location: string
}

export interface FinancialRecord {
  id: string
  type: 'income' | 'expense'
  category: string
  amount: number
  description: string
  date: Date
  clientId?: string
  freelancerId?: string
  status: 'pending' | 'completed' | 'cancelled'
}

export interface CRMActivity {
  id: string
  clientId: string
  type: 'call' | 'email' | 'meeting' | 'proposal' | 'contract'
  description: string
  date: Date
  outcome: 'positive' | 'neutral' | 'negative'
  nextAction?: string
  nextActionDate?: Date
}

// Mock Data
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    company: 'TechCorp Inc.',
    phone: '+1 (555) 123-4567',
    status: 'active',
    totalValue: 125000,
    monthlyValue: 8500,
    acquisitionDate: new Date('2023-01-15'),
    lastContact: new Date('2024-01-10'),
    projects: 8,
    industry: 'Technology',
    priority: 'high'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@startup.io',
    company: 'Startup Solutions',
    phone: '+1 (555) 987-6543',
    status: 'active',
    totalValue: 85000,
    monthlyValue: 5200,
    acquisitionDate: new Date('2023-06-20'),
    lastContact: new Date('2024-01-08'),
    projects: 5,
    industry: 'Fintech',
    priority: 'high'
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@retailplus.com',
    company: 'RetailPlus',
    phone: '+1 (555) 456-7890',
    status: 'prospect',
    totalValue: 0,
    monthlyValue: 0,
    acquisitionDate: new Date('2024-01-05'),
    lastContact: new Date('2024-01-05'),
    projects: 0,
    industry: 'E-commerce',
    priority: 'medium'
  },
  {
    id: '4',
    name: 'Lisa Chen',
    email: 'lisa@healthtech.com',
    company: 'HealthTech Solutions',
    phone: '+1 (555) 789-0123',
    status: 'active',
    totalValue: 95000,
    monthlyValue: 6800,
    acquisitionDate: new Date('2023-03-10'),
    lastContact: new Date('2024-01-12'),
    projects: 6,
    industry: 'Healthcare',
    priority: 'high'
  }
]

export const mockFreelancers: Freelancer[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    email: 'alex@freelancer.com',
    phone: '+1 (555) 111-2222',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    hourlyRate: 85,
    status: 'available',
    rating: 4.9,
    totalEarned: 45000,
    projectsCompleted: 12,
    joinDate: new Date('2022-03-15'),
    lastActive: new Date('2024-01-12'),
    specialization: 'Full-Stack Development',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Emma Thompson',
    email: 'emma@designer.com',
    phone: '+1 (555) 333-4444',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
    hourlyRate: 75,
    status: 'busy',
    rating: 4.8,
    totalEarned: 38000,
    projectsCompleted: 15,
    joinDate: new Date('2022-07-20'),
    lastActive: new Date('2024-01-11'),
    specialization: 'UI/UX Design',
    location: 'New York, NY'
  },
  {
    id: '3',
    name: 'David Park',
    email: 'david@marketing.com',
    phone: '+1 (555) 555-6666',
    skills: ['Digital Marketing', 'SEO', 'Google Ads', 'Analytics'],
    hourlyRate: 65,
    status: 'available',
    rating: 4.7,
    totalEarned: 32000,
    projectsCompleted: 18,
    joinDate: new Date('2021-11-10'),
    lastActive: new Date('2024-01-10'),
    specialization: 'Digital Marketing',
    location: 'Austin, TX'
  },
  {
    id: '4',
    name: 'Sophie Martin',
    email: 'sophie@creative.com',
    phone: '+1 (555) 777-8888',
    skills: ['Brand Design', 'Illustration', 'Print Design', 'Creative Direction'],
    hourlyRate: 80,
    status: 'available',
    rating: 4.9,
    totalEarned: 41000,
    projectsCompleted: 14,
    joinDate: new Date('2022-09-08'),
    lastActive: new Date('2024-01-09'),
    specialization: 'Brand Design',
    location: 'Los Angeles, CA'
  }
]

export const mockFinancialRecords: FinancialRecord[] = [
  {
    id: '1',
    type: 'income',
    category: 'Client Payment',
    amount: 15000,
    description: 'TechCorp Inc. - Website Development',
    date: new Date('2024-01-10'),
    clientId: '1',
    status: 'completed'
  },
  {
    id: '2',
    type: 'expense',
    category: 'Freelancer Payment',
    amount: 5000,
    description: 'Alex Rodriguez - Development Work',
    date: new Date('2024-01-08'),
    freelancerId: '1',
    status: 'completed'
  },
  {
    id: '3',
    type: 'income',
    category: 'Client Payment',
    amount: 8500,
    description: 'Startup Solutions - Mobile App Design',
    date: new Date('2024-01-05'),
    clientId: '2',
    status: 'completed'
  },
  {
    id: '4',
    type: 'expense',
    category: 'Freelancer Payment',
    amount: 3200,
    description: 'Emma Thompson - UI/UX Design',
    date: new Date('2024-01-03'),
    freelancerId: '2',
    status: 'completed'
  },
  {
    id: '5',
    type: 'income',
    category: 'Client Payment',
    amount: 12000,
    description: 'HealthTech Solutions - Brand Identity',
    date: new Date('2023-12-28'),
    clientId: '4',
    status: 'pending'
  }
]

export const mockCRMActivities: CRMActivity[] = [
  {
    id: '1',
    clientId: '1',
    type: 'meeting',
    description: 'Quarterly business review and planning for Q2 projects',
    date: new Date('2024-01-10'),
    outcome: 'positive',
    nextAction: 'Send proposal for new e-commerce platform',
    nextActionDate: new Date('2024-01-15')
  },
  {
    id: '2',
    clientId: '2',
    type: 'call',
    description: 'Discussed mobile app requirements and timeline',
    date: new Date('2024-01-08'),
    outcome: 'positive',
    nextAction: 'Schedule design review meeting',
    nextActionDate: new Date('2024-01-12')
  },
  {
    id: '3',
    clientId: '3',
    type: 'proposal',
    description: 'Sent comprehensive digital transformation proposal',
    date: new Date('2024-01-05'),
    outcome: 'neutral',
    nextAction: 'Follow up on proposal feedback',
    nextActionDate: new Date('2024-01-12')
  },
  {
    id: '4',
    clientId: '4',
    type: 'email',
    description: 'Project completion confirmation and invoice sent',
    date: new Date('2023-12-28'),
    outcome: 'positive',
    nextAction: 'Discuss ongoing maintenance contract',
    nextActionDate: new Date('2024-01-15')
  }
]

// Data access functions
export const getClients = (): Client[] => mockClients
export const getFreelancers = (): Freelancer[] => mockFreelancers
export const getFinancialRecords = (): FinancialRecord[] => mockFinancialRecords
export const getCRMActivities = (): CRMActivity[] => mockCRMActivities

export const getClientById = (id: string): Client | undefined => {
  return mockClients.find(client => client.id === id)
}

export const getFreelancerById = (id: string): Freelancer | undefined => {
  return mockFreelancers.find(freelancer => freelancer.id === id)
}

export const getFinancialSummary = () => {
  const records = getFinancialRecords()
  const totalIncome = records.filter(r => r.type === 'income' && r.status === 'completed').reduce((sum, r) => sum + r.amount, 0)
  const totalExpenses = records.filter(r => r.type === 'expense' && r.status === 'completed').reduce((sum, r) => sum + r.amount, 0)
  const pendingIncome = records.filter(r => r.type === 'income' && r.status === 'pending').reduce((sum, r) => sum + r.amount, 0)
  const netProfit = totalIncome - totalExpenses
  
  return {
    totalIncome,
    totalExpenses,
    pendingIncome,
    netProfit
  }
}