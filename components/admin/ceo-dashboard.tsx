'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Users, 
  UserCheck,
  Building,
  Phone,
  Mail,
  Calendar,
  Star,
  MapPin,
  Briefcase,
  Plus,
  Eye,
  Edit,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { 
  getClients, 
  getFreelancers, 
  getFinancialRecords,
  getCRMActivities,
  getFinancialSummary,
  type Client,
  type Freelancer,
  type FinancialRecord,
  type CRMActivity
} from '@/lib/ceo-data'

export default function CEODashboard() {
  const [clients] = useState<Client[]>(getClients())
  const [freelancers] = useState<Freelancer[]>(getFreelancers())
  const [financialRecords] = useState<FinancialRecord[]>(getFinancialRecords())
  const [crmActivities] = useState<CRMActivity[]>(getCRMActivities())
  
  const financialSummary = getFinancialSummary()
  const activeClients = clients.filter(c => c.status === 'active')
  const availableFreelancers = freelancers.filter(f => f.status === 'available')
  const totalClientValue = clients.reduce((sum, client) => sum + client.totalValue, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'available': case 'completed': case 'positive': return 'bg-green-100 text-green-800'
      case 'busy': case 'pending': case 'neutral': return 'bg-yellow-100 text-yellow-800'
      case 'inactive': case 'churned': case 'cancelled': case 'negative': return 'bg-red-100 text-red-800'
      case 'prospect': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CEO Dashboard</h1>
              <p className="text-gray-600 mt-1">Business overview and key metrics</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Client
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Net Profit</p>
                  <p className="text-3xl font-bold text-green-600">${financialSummary.netProfit.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">This month</p>
                </div>
                <TrendingUp className="h-12 w-12 text-green-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-blue-600">${financialSummary.totalIncome.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Completed payments</p>
                </div>
                <DollarSign className="h-12 w-12 text-blue-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Revenue</p>
                  <p className="text-3xl font-bold text-orange-600">${financialSummary.pendingIncome.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Awaiting payment</p>
                </div>
                <Clock className="h-12 w-12 text-orange-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Clients</p>
                  <p className="text-3xl font-bold text-purple-600">{activeClients.length}</p>
                  <p className="text-xs text-gray-500 mt-1">${totalClientValue.toLocaleString()} total value</p>
                </div>
                <Users className="h-12 w-12 text-purple-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="financial" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="clients">Clients & CRM</TabsTrigger>
            <TabsTrigger value="freelancers">Freelancers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                  <CardDescription>Revenue, expenses, and profit tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600">Total Income</p>
                          <p className="text-2xl font-bold text-green-700">${financialSummary.totalIncome.toLocaleString()}</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-red-600">Total Expenses</p>
                          <p className="text-2xl font-bold text-red-700">${financialSummary.totalExpenses.toLocaleString()}</p>
                        </div>
                        <TrendingDown className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600">Profit Margin</p>
                          <p className="text-2xl font-bold text-blue-700">
                            {((financialSummary.netProfit / financialSummary.totalIncome) * 100).toFixed(1)}%
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Recent Transactions</h3>
                    {financialRecords.slice(0, 5).map((record) => (
                      <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${record.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                            {record.type === 'income' ? 
                              <TrendingUp className="h-4 w-4 text-green-600" /> : 
                              <TrendingDown className="h-4 w-4 text-red-600" />
                            }
                          </div>
                          <div>
                            <p className="font-medium">{record.description}</p>
                            <p className="text-sm text-gray-600">{record.category} • {record.date.toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-lg font-bold ${record.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                            {record.type === 'income' ? '+' : '-'}${record.amount.toLocaleString()}
                          </p>
                          <Badge className={getStatusColor(record.status)}>
                            {record.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Management & CRM</CardTitle>
                  <CardDescription>Manage client relationships and track interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Client Portfolio</h3>
                      <div className="space-y-4">
                        {clients.map((client) => (
                          <div key={client.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-12 w-12">
                                  <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-semibold text-lg">{client.name}</h4>
                                    <Badge className={getStatusColor(client.status)}>
                                      {client.status}
                                    </Badge>
                                    <Badge className={getPriorityColor(client.priority)}>
                                      {client.priority} priority
                                    </Badge>
                                  </div>
                                  <p className="text-gray-600 mb-2">{client.company} • {client.industry}</p>
                                  <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Mail className="h-3 w-3" />
                                      {client.email}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Phone className="h-3 w-3" />
                                      {client.phone}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-green-600">${client.totalValue.toLocaleString()}</p>
                                <p className="text-sm text-gray-600">${client.monthlyValue.toLocaleString()}/month</p>
                                <p className="text-xs text-gray-500">{client.projects} projects</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>Client since: {client.acquisitionDate.toLocaleDateString()}</span>
                                <span>Last contact: {client.lastContact.toLocaleDateString()}</span>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Recent CRM Activities</h3>
                      <div className="space-y-3">
                        {crmActivities.map((activity) => {
                          const client = clients.find(c => c.id === activity.clientId)
                          return (
                            <div key={activity.id} className="p-4 border rounded-lg">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="outline" className="capitalize">
                                      {activity.type}
                                    </Badge>
                                    <Badge className={getStatusColor(activity.outcome)}>
                                      {activity.outcome}
                                    </Badge>
                                    <span className="text-sm text-gray-500">{client?.company}</span>
                                  </div>
                                  <p className="text-gray-700 mb-2">{activity.description}</p>
                                  {activity.nextAction && (
                                    <div className="flex items-center gap-2 text-sm text-blue-600">
                                      <Calendar className="h-4 w-4" />
                                      <span>Next: {activity.nextAction} ({activity.nextActionDate?.toLocaleDateString()})</span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-sm text-gray-500">{activity.date.toLocaleDateString()}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Freelancer Management</CardTitle>
                <CardDescription>Manage your freelancer network and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {freelancers.map((freelancer) => (
                    <div key={freelancer.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{freelancer.name}</h4>
                              <Badge className={getStatusColor(freelancer.status)}>
                                {freelancer.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{freelancer.specialization}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-3 w-3" />
                              {freelancer.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-medium">{freelancer.rating}</span>
                          </div>
                          <p className="text-sm text-gray-600">${freelancer.hourlyRate}/hr</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Total Earned</span>
                          <span className="font-medium text-green-600">${freelancer.totalEarned.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Projects Completed</span>
                          <span className="font-medium">{freelancer.projectsCompleted}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Last Active</span>
                          <span className="font-medium">{freelancer.lastActive.toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {freelancer.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {freelancer.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{freelancer.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          Profile
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Briefcase className="h-4 w-4 mr-1" />
                          Assign
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Client Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Active Clients</span>
                      <span className="font-medium text-green-600">{clients.filter(c => c.status === 'active').length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Prospects</span>
                      <span className="font-medium text-blue-600">{clients.filter(c => c.status === 'prospect').length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>High Priority</span>
                      <span className="font-medium text-red-600">{clients.filter(c => c.priority === 'high').length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Client Value</span>
                      <span className="font-medium">${Math.round(totalClientValue / clients.length).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Freelancer Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Available Freelancers</span>
                      <span className="font-medium text-green-600">{freelancers.filter(f => f.status === 'available').length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Currently Busy</span>
                      <span className="font-medium text-yellow-600">{freelancers.filter(f => f.status === 'busy').length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Rating</span>
                      <span className="font-medium">{(freelancers.reduce((sum, f) => sum + f.rating, 0) / freelancers.length).toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Freelancer Earnings</span>
                      <span className="font-medium">${freelancers.reduce((sum, f) => sum + f.totalEarned, 0).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Profit Margin</span>
                      <span className="font-medium text-green-600">
                        {((financialSummary.netProfit / financialSummary.totalIncome) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Revenue Growth</span>
                      <span className="font-medium text-blue-600">+24%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Outstanding Payments</span>
                      <span className="font-medium text-orange-600">${financialSummary.pendingIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Monthly Recurring Revenue</span>
                      <span className="font-medium text-purple-600">
                        ${clients.reduce((sum, c) => sum + c.monthlyValue, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Client Retention Rate</span>
                      <span className="font-medium text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Project Value</span>
                      <span className="font-medium">${(totalClientValue / clients.reduce((sum, c) => sum + c.projects, 0)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Freelancer Utilization</span>
                      <span className="font-medium text-blue-600">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Client Satisfaction</span>
                      <span className="font-medium text-green-600">4.8/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}