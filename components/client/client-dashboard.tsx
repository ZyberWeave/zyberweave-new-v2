'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Plus, Briefcase, DollarSign, Clock, Users } from 'lucide-react'
import { getProjectsByClient, mockUsers, type User, type Project } from '@/lib/auth'

interface ClientDashboardProps {
  user: User
}

export default function ClientDashboard({ user }: ClientDashboardProps) {
  const [projects] = useState<Project[]>(getProjectsByClient(user.id))
  const [freelancers] = useState<User[]>(mockUsers.filter(u => u.role === 'freelancer'))
  
  const activeProjects = projects.filter(p => p.status === 'in-progress')
  const completedProjects = projects.filter(p => p.status === 'completed')
  const totalSpent = projects.reduce((sum, project) => sum + project.budget, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
                <p className="text-gray-600">Client Dashboard</p>
              </div>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Projects</p>
                  <p className="text-3xl font-bold">{activeProjects.length}</p>
                </div>
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-3xl font-bold">{completedProjects.length}</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-3xl font-bold">${totalSpent.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Freelancers</p>
                  <p className="text-3xl font-bold">{freelancers.length}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="freelancers">Find Freelancers</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge variant={
                        project.status === 'completed' ? 'default' :
                        project.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${project.budget.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {project.deadline.toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">View Details</Button>
                        {project.status === 'open' && (
                          <Button>Manage</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-4">
            <div className="grid gap-6">
              {freelancers.map((freelancer) => (
                <Card key={freelancer.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{freelancer.name}</CardTitle>
                        <CardDescription className="mt-2">{freelancer.bio}</CardDescription>
                        <div className="flex items-center mt-2">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">${freelancer.hourlyRate}/hr</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills?.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>⭐ 4.9 (25 reviews)</span>
                        <span>100% Job Success</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">View Profile</Button>
                        <Button>Hire Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}