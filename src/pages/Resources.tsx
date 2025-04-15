
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Video, BookOpen, Compass, Clock, Eye } from "lucide-react";

// Mock resource data
const resourcesData = {
  guides: [
    {
      id: 1,
      title: "Complete Guide to Soil Preparation",
      description: "A comprehensive guide covering all aspects of soil preparation for different crop types.",
      type: "PDF",
      category: "Soil Management",
      size: "4.2 MB",
      downloads: 2845,
      dateAdded: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Seasonal Planting Calendar",
      description: "Month-by-month planting guide for various crops based on climate zones.",
      type: "PDF",
      category: "Crop Planning",
      size: "3.5 MB",
      downloads: 4126,
      dateAdded: "February 8, 2025",
      image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Natural Pest Control Handbook",
      description: "Eco-friendly methods to control common agricultural pests without chemicals.",
      type: "PDF",
      category: "Pest Management",
      size: "5.8 MB",
      downloads: 1962,
      dateAdded: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Livestock Nutrition Guide",
      description: "Detailed information on nutritional requirements for various farm animals.",
      type: "PDF",
      category: "Livestock",
      size: "7.1 MB",
      downloads: 1485,
      dateAdded: "January 22, 2025",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Drip Irrigation System Setup",
      description: "Step-by-step tutorial on setting up an efficient drip irrigation system for any farm size.",
      duration: "32:15",
      category: "Water Management",
      views: 12486,
      dateAdded: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Composting Techniques for Farm Waste",
      description: "Learn how to turn farm waste into nutrient-rich compost for your soil.",
      duration: "28:42",
      category: "Waste Management",
      views: 8932,
      dateAdded: "February 18, 2025",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Natural Beekeeping for Beginners",
      description: "A beginner's guide to starting and maintaining bee colonies on your farm.",
      duration: "45:18",
      category: "Beekeeping",
      views: 6574,
      dateAdded: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Greenhouse Construction on a Budget",
      description: "DIY guide to building an effective greenhouse using cost-effective materials.",
      duration: "38:56",
      category: "Structures",
      views: 9845,
      dateAdded: "January 30, 2025",
      image: "https://images.unsplash.com/photo-1565496950963-5084dc0b11bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ],
  articles: [
    {
      id: 1,
      title: "Climate Change Adaptation for Small Farms",
      description: "Strategies and techniques to make your farm more resilient to changing climate conditions.",
      readTime: "12 min read",
      category: "Climate Adaptation",
      views: 7845,
      dateAdded: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Understanding Farm Subsidies and Grants",
      description: "A complete overview of available financial support for farmers and how to apply.",
      readTime: "15 min read",
      category: "Finance",
      views: 5632,
      dateAdded: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Farm-to-Table: Building Local Sales Channels",
      description: "How to establish and grow direct sales to restaurants, markets and consumers.",
      readTime: "10 min read",
      category: "Marketing",
      views: 4287,
      dateAdded: "February 12, 2025",
      image: "https://images.unsplash.com/photo-1487760708481-76d31d544cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Regenerative Agriculture: Benefits and Implementation",
      description: "An in-depth look at regenerative farming practices and their environmental impact.",
      readTime: "18 min read",
      category: "Sustainable Farming",
      views: 8924,
      dateAdded: "January 18, 2025",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ],
};

const ResourceCard = ({ item, type }: { item: any; type: string }) => {
  const getIcon = () => {
    switch (type) {
      case 'guide':
        return <FileText className="h-5 w-5 mr-2" />;
      case 'video':
        return <Video className="h-5 w-5 mr-2" />;
      case 'article':
        return <BookOpen className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };
  
  const getMetaInfo = () => {
    switch (type) {
      case 'guide':
        return (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>{item.type} • {item.size}</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>{item.downloads} downloads</span>
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{item.views} views</span>
            </div>
          </div>
        );
      case 'article':
        return (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{item.readTime}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{item.views} views</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/90 text-farm-primary text-xs font-semibold px-3 py-1 rounded-full">
          {item.category}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-farm-primary">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
        {getMetaInfo()}
        
        <div className="mt-4">
          <Link to={`/resources/${type}/${item.id}`}>
            <Button variant="outline" className="w-full border-farm-primary text-farm-primary hover:bg-farm-primary hover:text-white">
              {getIcon()}
              {type === 'guide' ? 'Download Guide' : type === 'video' ? 'Watch Video' : 'Read Article'}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-farm-primary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Farming Resources & Learning Materials
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-0">
              Access a wealth of information through our comprehensive collection of guides, videos, and articles.
            </p>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-12 bg-farm-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="guides">
              <TabsList className="mb-8">
                <TabsTrigger value="guides" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Guides & PDFs
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center">
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Articles
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="guides">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resourcesData.guides.map((guide) => (
                    <ResourceCard key={guide.id} item={guide} type="guide" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resourcesData.videos.map((video) => (
                    <ResourceCard key={video.id} item={video} type="video" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resourcesData.articles.map((article) => (
                    <ResourceCard key={article.id} item={article} type="article" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Resource Request Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Compass className="h-16 w-16 text-farm-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-farm-primary mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of agricultural experts is continuously developing new resources. Let us know what topics you'd like us to cover next.
              </p>
              <Link to="/resource-request">
                <Button size="lg" className="bg-farm-primary hover:bg-farm-primary/90">
                  Request a Resource
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

export default Resources;
