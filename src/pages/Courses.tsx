
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Star, Clock, Users } from "lucide-react";

// Mock course data
const courseData = [
  {
    id: 1,
    title: "Sustainable Farming Practices",
    instructor: "Dr. Emma Thompson",
    level: "Beginner",
    category: "Organic Farming",
    duration: "6 weeks",
    students: 1245,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: true,
    popular: true,
  },
  {
    id: 2,
    title: "Advanced Crop Rotation",
    instructor: "Prof. James Wilson",
    level: "Intermediate",
    category: "Crop Management",
    duration: "8 weeks",
    students: 958,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: true,
    popular: true,
  },
  {
    id: 3,
    title: "Livestock Health Management",
    instructor: "Dr. Sarah Johnson",
    level: "Intermediate",
    category: "Livestock",
    duration: "10 weeks",
    students: 782,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: true,
    popular: false,
  },
  {
    id: 4,
    title: "Organic Pest Control Methods",
    instructor: "Dr. Michael Brown",
    level: "Beginner",
    category: "Pest Management",
    duration: "4 weeks",
    students: 1354,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: false,
    popular: true,
  },
  {
    id: 5,
    title: "Water Conservation Techniques",
    instructor: "Prof. Lisa Chen",
    level: "Intermediate",
    category: "Water Management",
    duration: "6 weeks",
    students: 678,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: false,
    popular: false,
  },
  {
    id: 6,
    title: "Farm Business Management",
    instructor: "Sarah Thompson",
    level: "Advanced",
    category: "Business",
    duration: "8 weeks",
    students: 542,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    featured: false,
    popular: true,
  },
];

const CourseCard = ({ course }: { course: typeof courseData[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {course.featured && (
          <div className="absolute top-3 left-3 bg-farm-primary text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="text-xs font-semibold bg-farm-light text-farm-primary px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="text-xs font-medium text-gray-500 ml-2 px-2 py-1 bg-gray-100 rounded-full">
            {course.level}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-farm-primary">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">{course.students} students</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <Button className="w-full bg-farm-primary hover:bg-farm-primary/90">View Course</Button>
        </Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  
  const filteredCourses = courseData.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    // Level filter
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  // Get unique categories and levels for filter options
  const categories = Array.from(new Set(courseData.map(course => course.category)));
  const levels = Array.from(new Set(courseData.map(course => course.level)));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-farm-primary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agricultural Courses & Learning Resources
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-0">
              Expand your knowledge with our expert-led courses on farming techniques, livestock management, and more.
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="search" 
                  placeholder="Search courses by title, instructor, or category..." 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Listings */}
        <section className="py-12 bg-farm-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setCategoryFilter("all");
                        setLevelFilter("all");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses
                    .filter(course => course.featured)
                    .map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="popular">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses
                    .filter(course => course.popular)
                    .map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
