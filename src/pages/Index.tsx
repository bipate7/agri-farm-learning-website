
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Award, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32">
        <div className="container mx-auto px-4 text-center hero-content">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Cultivate Knowledge, Harvest Success
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up">
            Join our community of farmers learning sustainable and profitable farming techniques from agricultural experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Link to="/register">
              <Button size="lg" className="bg-farm-primary hover:bg-farm-primary/90 text-white min-w-[150px]">
                Join Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20 min-w-[150px]">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-farm-primary mb-4">Why Join AgriWisdom?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide farmers with the knowledge, community, and expert support needed to thrive in modern agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-farm-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-farm-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert-Led Courses</h3>
                <p className="text-gray-600">
                  Learn directly from agricultural specialists with proven methods and techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-farm-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-farm-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Farmer Community</h3>
                <p className="text-gray-600">
                  Connect with fellow farmers, share experiences, and learn from each other's journeys.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-farm-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-farm-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Practical Knowledge</h3>
                <p className="text-gray-600">
                  Gain hands-on skills that you can immediately apply to improve your farming operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Courses Preview Section */}
      <section className="py-16 bg-farm-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-farm-primary mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expand your agricultural knowledge with our curated collection of expert-led courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Farming Practices",
                instructor: "Dr. Emma Thompson",
                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                category: "Organic Farming"
              },
              {
                title: "Advanced Crop Rotation",
                instructor: "Prof. James Wilson",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                category: "Crop Management"
              },
              {
                title: "Livestock Health Management",
                instructor: "Dr. Sarah Johnson",
                image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                category: "Livestock"
              }
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-semibold bg-farm-light text-farm-primary px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-farm-primary">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
                  <Link to="/courses" className="inline-flex items-center text-farm-accent hover:text-farm-primary transition-colors">
                    <span className="mr-1">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button className="bg-farm-primary hover:bg-farm-primary/90">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Expert Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-farm-primary mb-4">Learn From Leading Agricultural Experts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects you with recognized experts in various agricultural fields who share their knowledge and experience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Live interactive sessions with real-time Q&A",
                  "One-on-one consultations for your specific challenges",
                  "Continuous updates on the latest agricultural innovations",
                  "Practical demonstrations of effective techniques"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-farm-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/experts">
                <Button className="bg-farm-primary hover:bg-farm-primary/90">
                  Meet Our Experts
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Agricultural expert" 
                  className="rounded-lg shadow-xl w-full md:max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden md:block">
                  <div className="flex items-start">
                    <Leaf className="h-10 w-10 text-farm-primary mr-3" />
                    <div>
                      <p className="font-medium text-farm-primary">
                        "AgriWisdom has transformed how I approach farming through sustainable methods."
                      </p>
                      <p className="text-sm text-gray-600 mt-2">- John Thompson, Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-farm-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Agricultural Knowledge?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of farmers who are learning, connecting, and succeeding with AgriWisdom.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-farm-primary hover:bg-gray-100 min-w-[150px]">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-w-[150px]">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
