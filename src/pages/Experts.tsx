
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MessageSquare, ExternalLink, Award, BookOpen } from "lucide-react";

// Mock expert data
const expertsData = [
  {
    id: 1,
    name: "Dr. Emma Thompson",
    title: "Agricultural Scientist",
    specialization: "Organic Farming",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Thompson has over 15 years of experience in developing sustainable farming practices. She holds a Ph.D. in Agricultural Sciences and has published numerous research papers on organic farming techniques.",
    courses: 3,
    students: 1245,
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    title: "Soil Scientist",
    specialization: "Crop Management",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "Professor Wilson specializes in soil health and crop rotation strategies. With over 20 years in the field, he has helped thousands of farmers optimize their crop yields through scientifically-proven methods.",
    courses: 4,
    students: 958,
    rating: 4.6,
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    title: "Veterinarian",
    specialization: "Livestock Health",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Johnson is a renowned veterinarian specializing in livestock health and welfare. She has worked extensively with farmers to implement preventive healthcare practices for farm animals.",
    courses: 2,
    students: 782,
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    title: "Entomologist",
    specialization: "Pest Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "As an entomologist with a focus on agricultural pests, Dr. Brown has developed innovative, eco-friendly pest control methods that have been adopted by farmers worldwide.",
    courses: 2,
    students: 1354,
    rating: 4.7,
    featured: false,
  },
  {
    id: 5,
    name: "Prof. Lisa Chen",
    title: "Water Resource Engineer",
    specialization: "Water Management",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "Professor Chen specializes in water conservation and irrigation systems. Her research has led to water-saving techniques that have been implemented on farms across various climate zones.",
    courses: 3,
    students: 678,
    rating: 4.5,
    featured: false,
  },
  {
    id: 6,
    name: "Robert Anderson",
    title: "Agricultural Economist",
    specialization: "Farm Business",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    bio: "With a background in both farming and business management, Robert helps farmers develop sustainable business models and marketing strategies for their agricultural products.",
    courses: 1,
    students: 542,
    rating: 4.8,
    featured: false,
  },
];

const ExpertCard = ({ expert }: { expert: typeof expertsData[0] }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={expert.image} 
            alt={expert.name} 
            className="w-full h-full object-cover md:h-80"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-farm-primary">{expert.name}</h3>
              <p className="text-gray-600">{expert.title}</p>
            </div>
            <span className="text-sm font-semibold bg-farm-light text-farm-primary px-3 py-1 rounded-full mt-2 md:mt-0">
              {expert.specialization}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{expert.bio}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-primary">{expert.courses}</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-primary">{expert.students}</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-primary">{expert.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Link to={`/experts/${expert.id}`}>
              <Button variant="outline" className="border-farm-primary text-farm-primary hover:bg-farm-primary hover:text-white">
                <BookOpen className="h-4 w-4 mr-2" />
                View Courses
              </Button>
            </Link>
            <Link to={`/dashboard/sessions?expert=${expert.id}`}>
              <Button variant="outline" className="border-farm-primary text-farm-primary hover:bg-farm-primary hover:text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </Link>
            <Link to={`/dashboard/expert-chat?expert=${expert.id}`}>
              <Button className="bg-farm-primary hover:bg-farm-primary/90">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat With Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Experts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-farm-primary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Agricultural Experts
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-0">
              Learn from industry-leading professionals with years of experience in various agricultural specialties.
            </p>
          </div>
        </section>
        
        {/* Expert Listing */}
        <section className="py-12 bg-farm-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Experts</TabsTrigger>
                <TabsTrigger value="featured">Featured Experts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-8">
                  {expertsData.map(expert => (
                    <ExpertCard key={expert.id} expert={expert} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="featured">
                <div className="space-y-8">
                  {expertsData
                    .filter(expert => expert.featured)
                    .map(expert => (
                      <ExpertCard key={expert.id} expert={expert} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Become an Expert */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="h-16 w-16 text-farm-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-farm-primary mb-4">
                Are You an Agricultural Expert?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Share your knowledge and experience with our community of farmers. Join our platform as an expert and help transform agricultural practices around the world.
              </p>
              <Link to="/expert-application">
                <Button size="lg" className="bg-farm-primary hover:bg-farm-primary/90">
                  Apply to Become an Expert
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experts;
