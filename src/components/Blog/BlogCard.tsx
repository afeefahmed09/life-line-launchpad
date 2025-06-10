
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, author, date, image, category }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        <Link 
          to={`/blogs/${id}`}
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
