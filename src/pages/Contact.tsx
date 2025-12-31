import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Instagram, Youtube, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle hash navigation and scroll to form
  useEffect(() => {
    if (location.hash === "#send-message") {
      const element = document.getElementById("send-message");
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInstitution: ${formData.institution || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:backpacksandblueprints@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Message prepared! Your email client should open.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      institution: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "backpacksandblueprints@gmail.com",
      href: "mailto:backpacksandblueprints@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/b-n-b"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/backpacksandblueprints/"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@backpacksandblueprints"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-background text-sm">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl">
              Let's start a conversation
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether you're planning a study tour, considering a collaboration, or just curious about what we do—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="send-message">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="institution">Institution / Organization</Label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2"
                    placeholder="Tell us about your project, study tour plan, or collaboration idea..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={index}
                        href={info.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24-48 hours. For urgent inquiries, please mention "URGENT" in your subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-center">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">
                  How far in advance should we plan a study tour?
                </h3>
                <p className="text-muted-foreground">
                  Ideally 3-6 months for domestic tours to allow time for curriculum alignment, pre-tour preparation, and logistics. International tours require 6-9 months advance planning.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Do you work with individual students?
                </h3>
                <p className="text-muted-foreground">
                  Our primary focus is institutional partnerships, but we do conduct public heritage walks that individuals can join. Check our Heritage Walks page for upcoming sessions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Can you customize programmes for our specific curriculum?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely. Every tour we design is customized based on your academic calendar, year of study, and learning objectives. We work closely with faculty to ensure alignment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What cities do you currently operate in?
                </h3>
                <p className="text-muted-foreground">
                  We have established programmes in Delhi, Ahmedabad, Mumbai, Puducherry, Chandigarh, and Madurai. We can also design custom tours for other cities based on institutional requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;