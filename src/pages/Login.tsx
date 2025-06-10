
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem('user', JSON.stringify({
      name: 'John Doe',
      email: formData.email,
      joinDate: '2024-01-01'
    }));
    toast({
      title: "Login Successful!",
      description: "Welcome back to MediCare.",
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 section-padding bg-gray-50 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <p className="text-gray-600">Sign in to your MediCare account</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <Link to="#" className="text-primary hover:text-primary/80">
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Sign In
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary font-medium hover:text-primary/80">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
