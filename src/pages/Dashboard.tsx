
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Phone, Heart, Activity, Clock, Bell } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const appointments = [
    { id: 1, date: '2024-02-15', time: '10:00 AM', doctor: 'Dr. Sarah Johnson', type: 'Cardiology Check-up' },
    { id: 2, date: '2024-02-22', time: '2:30 PM', doctor: 'Dr. Michael Chen', type: 'Follow-up Consultation' },
  ];

  const healthRecords = [
    { date: '2024-01-15', type: 'Blood Test', result: 'Normal', doctor: 'Dr. Sarah Johnson' },
    { date: '2024-01-10', type: 'X-Ray', result: 'Clear', doctor: 'Dr. James Wilson' },
    { date: '2024-01-05', type: 'Physical Exam', result: 'Excellent', doctor: 'Dr. Emily Davis' },
  ];

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === id 
          ? 'bg-primary text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          {/* Welcome Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">Manage your health information and appointments</p>
              </div>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <TabButton id="overview" label="Overview" icon={Heart} />
            <TabButton id="appointments" label="Appointments" icon={Calendar} />
            <TabButton id="records" label="Health Records" icon={Activity} />
            <TabButton id="profile" label="Profile" icon={User} />
            <TabButton id="notifications" label="Notifications" icon={Bell} />
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Feb 15</div>
                  <p className="text-xs text-muted-foreground">Dr. Sarah Johnson</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-muted-foreground">Excellent health</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recent Tests</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">All normal results</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Member Since</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2024</div>
                  <p className="text-xs text-muted-foreground">Welcome to MediCare!</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Your Appointments</h2>
                <Button>Schedule New Appointment</Button>
              </div>
              
              <div className="grid gap-4">
                {appointments.map(appointment => (
                  <Card key={appointment.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.type}</h3>
                            <p className="text-gray-600">{appointment.doctor}</p>
                            <p className="text-sm text-gray-500">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'records' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Health Records</h2>
                <Button>Request Records</Button>
              </div>
              
              <div className="grid gap-4">
                {healthRecords.map((record, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-100 p-3 rounded-full">
                            <Activity className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{record.type}</h3>
                            <p className="text-gray-600">Result: {record.result}</p>
                            <p className="text-sm text-gray-500">
                              {record.date} - {record.doctor}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input defaultValue={user.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input defaultValue={user.email} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input defaultValue={user.phone} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth
                        </label>
                        <Input type="date" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <Textarea placeholder="Enter your full address" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <Input placeholder="Emergency contact name and phone" />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Update Profile
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Bell className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Appointment Reminder</h3>
                        <p className="text-gray-600">You have an appointment with Dr. Sarah Johnson tomorrow at 10:00 AM</p>
                        <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Activity className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Test Results Available</h3>
                        <p className="text-gray-600">Your blood test results are now available in your health records</p>
                        <p className="text-sm text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Annual Check-up Due</h3>
                        <p className="text-gray-600">It's time for your annual physical examination. Please schedule an appointment.</p>
                        <p className="text-sm text-gray-500 mt-1">3 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
