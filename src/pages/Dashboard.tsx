
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { BookOpen, Calendar, Leaf, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data
  const activeCourses = [
    {
      id: 1,
      title: "Sustainable Farming Practices",
      instructor: "Dr. Emma Thompson",
      progress: 65,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Advanced Crop Rotation",
      instructor: "Prof. James Wilson",
      progress: 30,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "Organic Pest Control Methods",
      expert: "Sarah Johnson",
      date: "May 20, 2025",
      time: "10:00 AM - 11:30 AM",
    },
    {
      id: 2,
      title: "Soil Health Management",
      expert: "Dr. Robert Chen",
      date: "May 23, 2025",
      time: "2:00 PM - 3:30 PM",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Courses Enrolled</p>
                    <h3 className="text-2xl font-bold">4</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-farm-light flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-farm-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Completed Courses</p>
                    <h3 className="text-2xl font-bold">2</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-farm-light flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-farm-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
                    <h3 className="text-2xl font-bold">3</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-farm-light flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-farm-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Community Members</p>
                    <h3 className="text-2xl font-bold">1,248</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-farm-light flex items-center justify-center">
                    <Users className="h-6 w-6 text-farm-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>In Progress</CardTitle>
                  <CardDescription>
                    Continue learning where you left off
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activeCourses.map((course) => (
                      <div key={course.id} className="flex items-start space-x-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-16 w-24 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-farm-primary">{course.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Instructor: {course.instructor}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Live Sessions</CardTitle>
                  <CardDescription>
                    Sessions with agricultural experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-farm-primary mb-1">{session.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Expert: {session.expert}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommended Courses</CardTitle>
              <CardDescription>
                Based on your farm type and interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((id) => (
                  <Link key={id} to={`/dashboard/courses/${id}`} className="block group">
                    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all group-hover:shadow-md group-hover:border-farm-accent">
                      <img
                        src={`https://images.unsplash.com/photo-147013825406${id}-553bc47c0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`}
                        alt="Course thumbnail"
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-farm-primary group-hover:text-farm-accent">
                          {id === 1 && "Organic Farming Fundamentals"}
                          {id === 2 && "Water Conservation Techniques"}
                          {id === 3 && "Farm Business Management"}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {id === 1 && "Dr. Emma Thompson"}
                          {id === 2 && "Prof. James Wilson"}
                          {id === 3 && "Sarah Johnson"}
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="text-yellow-500 flex">
                            {"★".repeat(5)}
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">
                            (4.{id + 5})
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
