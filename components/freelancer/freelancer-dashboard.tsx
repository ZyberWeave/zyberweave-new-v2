'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CalendarDays, DollarSign, Briefcase, Star, Clock, CheckCircle } from 'lucide-react'
import { getProjects, getProjectsByFreelancer, type User, type Project } from '@/lib/auth'

interface FreelancerDashboardProps {
  user: User
}

export default function FreelancerDashboard({ user }: FreelancerDashboardProps) {
  const [projects] = useState<Project[]>(getProjects())
  const [myProjects] = useState<Project[]>(getProjectsByFreelancer(user.id))
  
  const availableProjects = projects.filter(p => p.status === 'open' && !p.freelancerId)
  const activeProjects = myProjects.filter(p => p.status === 'in-progress')
  const completedProjects = myProjects.filter(p => p.status === 'completed')

  const totalEarnings = completedProjects.reduce((sum, project) => sum + project.budget, 0)

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
                <p className="text-gray-600">Freelancer Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Hourly Rate</p>
              <p className="text-2xl font-bold text-green-600">${user.hourlyRate}/hr</p>
            </div>
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
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="text-3xl font-bold">${totalEarnings.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-3xl font-bold">4.9</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available Projects</TabsTrigger>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-4">
            <div className="grid gap-6">
              {availableProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{project.status}</Badge>
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
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {project.deadline.toLocaleDateString()}
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-6">
              {activeProjects.map((project) => (
                <Card key={project.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${project.budget.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Due {project.deadline.toLocaleDateString()}
                        </div>
                      </div>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-6">
              {completedProjects.map((project) => (
                <Card key={project.id} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${project.budget.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                          Completed
                        </div>
                      </div>
                      <Button variant="outline">View Project</Button>
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