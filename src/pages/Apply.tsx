
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  course: string;
  education: string;
  experience: string;
}

const Apply = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ApplicationForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    console.log('Application submitted:', data);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted Successfully!",
        description: "We will contact you within 2-3 business days regarding your application.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const courses = [
    "Motor Vehicle Mechanics",
    "Electrical Installation", 
    "Plumbing Technology",
    "Information Communication Technology (ICT)",
    "Food and Beverage Processing",
    "Hairdressing and Beauty Therapy",
    "Fashion Design and Garment Making",
    "Masonry and Building Technology",
    "Arc Welding",
    "Carpentry and Joinery"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-lvtc-off-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-lvtc-forest-green mb-4">
              Apply to Lodwar Vocational Training Centre
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step towards your vocational training journey. Fill out the application form below and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: "First name is required" })}
                    className="mt-1"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}
                    className="mt-1"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone", { required: "Phone number is required" })}
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    {...register("dateOfBirth", { required: "Date of birth is required" })}
                    className="mt-1"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <Select onValueChange={(value) => setValue("gender", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  className="mt-1"
                  rows={3}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="course">Preferred Course *</Label>
                <Select onValueChange={(value) => setValue("course", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your preferred course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="education">Educational Background</Label>
                <Textarea
                  id="education"
                  {...register("education")}
                  placeholder="Please describe your educational background (e.g., KCPE, KCSE, etc.)"
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="experience">Previous Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  {...register("experience")}
                  placeholder="Any previous work experience or relevant skills"
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-lvtc-forest-green hover:bg-lvtc-light-green px-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
