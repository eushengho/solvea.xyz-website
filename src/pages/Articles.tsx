
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "The Future of Technical Sales",
      date: "March 15, 2024",
      description: "How AI is transforming the way technical sales teams operate and close deals.",
      readTime: "5 min read",
      category: "AI & Sales",
    },
    {
      title: "Building High-Performance Sales Teams",
      date: "March 12, 2024",
      description: "Best practices for developing and maintaining top-performing technical sales teams.",
      readTime: "7 min read",
      category: "Team Management",
    },
    {
      title: "Mastering Technical Demos",
      date: "March 8, 2024",
      description: "Expert tips for delivering compelling technical demonstrations that convert.",
      readTime: "6 min read",
      category: "Sales Skills",
    },
    {
      title: "The Role of AI in Modern Sales",
      date: "March 5, 2024",
      description: "Understanding how artificial intelligence is reshaping the sales landscape.",
      readTime: "8 min read",
      category: "Technology",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-[#25CAFE]">Latest Articles</h1>
          <p className="text-lg text-gray-600 mb-12">
            Insights and updates from our team of technical sales experts
          </p>
          
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-rainbow transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl font-bold hover:text-[#25CAFE] transition-colors">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.category}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.description}
                  </CardDescription>
                  <CustomButton
                    variant="secondary"
                    className="mt-2"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </CustomButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
