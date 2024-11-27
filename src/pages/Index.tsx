import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Index: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success('Form submitted successfully!');
    reset();
    setIsSubmitting(false);
  };

  const services = [
    { title: 'Contract Law', description: 'Expert drafting and negotiation of business contracts.' },
    { title: 'Corporate Compliance', description: 'Ensure your business meets all legal requirements.' },
    { title: 'Business Disputes', description: 'Skilled representation in commercial litigation.' },
  ];

  const testimonials = [
    { name: 'Jane Smith', company: 'Tech Innovations Inc.', text: 'John\'s expertise was invaluable in navigating our complex merger.' },
    { name: 'Michael Johnson', company: 'Global Enterprises', text: 'His attention to detail in contract negotiations saved us from potential pitfalls.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Expert Legal Solutions for Your Business
            </motion.h1>
            <p className="text-xl mb-8">Navigating complex corporate law with precision and expertise</p>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule a Consultation
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white" id="services">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} name={testimonial.name} company={testimonial.company} text={testimonial.text} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white" id="about">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About John Doe, Esq.</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  John Doe is a distinguished corporate lawyer with over 20 years of experience in providing expert legal counsel to businesses of all sizes. His track record includes successfully navigating complex mergers and acquisitions, resolving high-stakes business disputes, and ensuring corporate compliance for Fortune 500 companies.
                </p>
                <p className="text-lg mb-4">
                  A graduate of Harvard Law School, John has been recognized as a top corporate lawyer by Legal 500 for five consecutive years. His unique approach combines deep legal knowledge with a keen understanding of business strategy, allowing him to provide solutions that protect his clients' interests while fostering their growth.
                </p>
                <p className="text-lg">
                  John is committed to delivering personalized, results-driven legal services that empower businesses to thrive in today's complex legal landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-100" id="contact">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <Input
                    placeholder="Your Name"
                    {...register('name')}
                    error={errors.name?.message}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Your Message"
                    {...register('message')}
                    error={errors.message?.message}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;