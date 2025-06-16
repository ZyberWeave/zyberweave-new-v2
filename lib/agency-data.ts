export interface Client {
  id: string
  name: string
  email: string
  company: string
  phone: string
  status: 'active' | 'inactive' | 'prospect'
  totalProjects: number
  totalSpent: number
  joinDate: Date
  lastContact: Date
}

export interface Project {
  id: string
  title: string
  client: string
  clientId: string
  type: 'web-design' | 'web-development' | 'branding' | 'marketing' | 'seo' | 'mobile-app'
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  budget: number
  spent: number
  startDate: Date
  deadline: Date
  assignedTeam: string[]
  progress: number
  description: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  role: 'designer' | 'developer' | 'project-manager' | 'marketing' | 'seo-specialist'
  department: 'design' | 'development' | 'marketing' | 'management'
  status: 'active' | 'inactive' | 'on-leave'
  hourlyRate: number
  currentProjects: number
  totalProjects: number
  joinDate: Date
  skills: string[]
}

export interface Invoice {
  id: string
  clientId: string
  clientName: string
  projectId: string
  projectTitle: string
  amount: number
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  issueDate: Date
  dueDate: Date
  paidDate?: Date
}

// Mock data
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    company: 'TechCorp Inc.',
    phone: '+1 (555) 123-4567',
    status: 'active',
    totalProjects: 5,
    totalSpent: 45000,
    joinDate: new Date('2023-01-15'),
    lastContact: new Date('2024-01-10')
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@startup.io',
    company: 'Startup Solutions',
    phone: '+1 (555) 987-6543',
    status: 'active',
    totalProjects: 3,
    totalSpent: 28000,
    joinDate: new Date('2023-06-20'),
    lastContact: new Date('2024-01-08')
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@retailplus.com',
    company: 'RetailPlus',
    phone: '+1 (555) 456-7890',
    status: 'prospect',
    totalProjects: 0,
    totalSpent: 0,
    joinDate: new Date('2024-01-05'),
    lastContact: new Date('2024-01-05')
  }
]

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website Redesign',
    client: 'TechCorp Inc.',
    clientId: '1',
    type: 'web-design',
    status: 'in-progress',
    priority: 'high',
    budget: 15000,
    spent: 8500,
    startDate: new Date('2023-12-01'),
    deadline: new Date('2024-02-15'),
    assignedTeam: ['1', '2', '3'],
    progress: 65,
    description: 'Complete redesign of the e-commerce platform with modern UI/UX'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    client: 'Startup Solutions',
    clientId: '2',
    type: 'mobile-app',
    status: 'planning',
    priority: 'medium',
    budget: 25000,
    spent: 2000,
    startDate: new Date('2024-01-15'),
    deadline: new Date('2024-04-30'),
    assignedTeam: ['4', '5'],
    progress: 15,
    description: 'Native mobile app for iOS and Android platforms'
  },
  {
    id: '3',
    title: 'Brand Identity Package',
    client: 'RetailPlus',
    clientId: '3',
    type: 'branding',
    status: 'review',
    priority: 'medium',
    budget: 8000,
    spent: 7200,
    startDate: new Date('2023-11-01'),
    deadline: new Date('2024-01-20'),
    assignedTeam: ['1', '6'],
    progress: 90,
    description: 'Complete brand identity including logo, colors, and guidelines'
  }
]

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Chen',
    email: 'alex@agency.com',
    role: 'designer',
    department: 'design',
    status: 'active',
    hourlyRate: 85,
    currentProjects: 3,
    totalProjects: 24,
    joinDate: new Date('2022-03-15'),
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping']
  },
  {
    id: '2',
    name: 'Emma Rodriguez',
    email: 'emma@agency.com',
    role: 'developer',
    department: 'development',
    status: 'active',
    hourlyRate: 95,
    currentProjects: 2,
    totalProjects: 18,
    joinDate: new Date('2022-07-20'),
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB']
  },
  {
    id: '3',
    name: 'David Park',
    email: 'david@agency.com',
    role: 'project-manager',
    department: 'management',
    status: 'active',
    hourlyRate: 75,
    currentProjects: 5,
    totalProjects: 32,
    joinDate: new Date('2021-11-10'),
    skills: ['Project Management', 'Agile', 'Client Relations', 'Budgeting']
  },
  {
    id: '4',
    name: 'Lisa Thompson',
    email: 'lisa@agency.com',
    role: 'developer',
    department: 'development',
    status: 'active',
    hourlyRate: 90,
    currentProjects: 2,
    totalProjects: 15,
    joinDate: new Date('2023-02-01'),
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: '5',
    name: 'James Wilson',
    email: 'james@agency.com',
    role: 'marketing',
    department: 'marketing',
    status: 'active',
    hourlyRate: 70,
    currentProjects: 4,
    totalProjects: 28,
    joinDate: new Date('2022-05-12'),
    skills: ['Digital Marketing', 'SEO', 'Google Ads', 'Analytics']
  },
  {
    id: '6',
    name: 'Sophie Martin',
    email: 'sophie@agency.com',
    role: 'designer',
    department: 'design',
    status: 'active',
    hourlyRate: 80,
    currentProjects: 3,
    totalProjects: 21,
    joinDate: new Date('2022-09-08'),
    skills: ['Brand Design', 'Illustration', 'Print Design', 'Creative Direction']
  }
]

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'TechCorp Inc.',
    projectId: '1',
    projectTitle: 'E-commerce Website Redesign',
    amount: 8500,
    status: 'paid',
    issueDate: new Date('2023-12-15'),
    dueDate: new Date('2024-01-15'),
    paidDate: new Date('2024-01-10')
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'Startup Solutions',
    projectId: '2',
    projectTitle: 'Mobile App Development',
    amount: 5000,
    status: 'sent',
    issueDate: new Date('2024-01-01'),
    dueDate: new Date('2024-01-31')
  },
  {
    id: '3',
    clientId: '3',
    clientName: 'RetailPlus',
    projectId: '3',
    projectTitle: 'Brand Identity Package',
    amount: 7200,
    status: 'overdue',
    issueDate: new Date('2023-12-01'),
    dueDate: new Date('2023-12-31')
  }
]

export const getClients = (): Client[] => mockClients
export const getProjects = (): Project[] => mockProjects
export const getTeamMembers = (): TeamMember[] => mockTeamMembers
export const getInvoices = (): Invoice[] => mockInvoices

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return mockProjects.filter(project => project.status === status)
}

export const getClientById = (id: string): Client | undefined => {
  return mockClients.find(client => client.id === id)
}

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return mockTeamMembers.find(member => member.id === id)
}