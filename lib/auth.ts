export interface User {
  id: string
  email: string
  name: string
  role: 'freelancer' | 'client' | 'admin'
  avatar?: string
  skills?: string[]
  hourlyRate?: number
  bio?: string
  createdAt: Date
}

export interface Project {
  id: string
  title: string
  description: string
  budget: number
  deadline: Date
  status: 'open' | 'in-progress' | 'completed' | 'cancelled'
  clientId: string
  freelancerId?: string
  skills: string[]
  createdAt: Date
  updatedAt: Date
}

// Mock authentication - in a real app, this would connect to your auth provider
let currentUser: User | null = null

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@freelance.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date()
  },
  {
    id: '2',
    email: 'john@freelancer.com',
    name: 'John Developer',
    role: 'freelancer',
    skills: ['React', 'Node.js', 'TypeScript'],
    hourlyRate: 75,
    bio: 'Full-stack developer with 5+ years experience',
    createdAt: new Date()
  },
  {
    id: '3',
    email: 'sarah@client.com',
    name: 'Sarah Johnson',
    role: 'client',
    createdAt: new Date()
  }
]

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website Development',
    description: 'Build a modern e-commerce platform with React and Node.js',
    budget: 5000,
    deadline: new Date('2024-03-15'),
    status: 'open',
    clientId: '3',
    skills: ['React', 'Node.js', 'MongoDB'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'Mobile App UI Design',
    description: 'Design a clean and modern mobile app interface',
    budget: 2500,
    deadline: new Date('2024-02-28'),
    status: 'in-progress',
    clientId: '3',
    freelancerId: '2',
    skills: ['UI/UX', 'Figma', 'Mobile Design'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export const login = (email: string, password: string): User | null => {
  const user = mockUsers.find(u => u.email === email)
  if (user) {
    currentUser = user
    return user
  }
  return null
}

export const logout = () => {
  currentUser = null
}

export const getCurrentUser = (): User | null => {
  return currentUser
}

export const getProjects = (): Project[] => {
  return mockProjects
}

export const getProjectsByFreelancer = (freelancerId: string): Project[] => {
  return mockProjects.filter(p => p.freelancerId === freelancerId)
}

export const getProjectsByClient = (clientId: string): Project[] => {
  return mockProjects.filter(p => p.clientId === clientId)
}