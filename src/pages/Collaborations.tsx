import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { GraduationCap, Users, BookOpen, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const Collaborations = () => {
  const models = [
    {
      icon: GraduationCap,
      title: "Architecture Colleges",
      description: "End-to-end study tour planning aligned with your curriculum and academic calendar.",
      features: [
        "Curriculum-aligned itineraries",
        "Pre-tour briefing sessions",
        "Faculty collaboration",
        "Student documentation support",
        "Post-tour assessment materials"
      ]
    },
    {
      icon: BookOpen,
      title: "Faculty Partnerships",
      description: "Collaborative programmes where we work directly with faculty on course-integrated travel modules.",
      features: [
        "Co-designed learning outcomes",
        "Guest lectures & workshops",
        "Joint documentation projects",
        "Research collaboration",
        "Publication support"
      ]
    },
    {
      icon: Users,
      title: "Research Groups",
      description: "Documentation and research support for heritage studies, urban design research, and conservation projects.",
      features: [
        "Fieldwork assistance",
        "Measured drawings & surveys",
        "Photographic documentation",
        "Archival research",
        "Report preparation"
      ]
    },
    {
      icon: Building2,
      title: "Institutional Programmes",
      description: "Guest sessions, heritage walks, and documentation workshops for in-house academic activities.",
      features: [
        "Heritage walk sessions",
        "Documentation workshops",
        "Guest lectures on Indian architecture",
        "Building reading exercises",
        "Custom academic modules"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1570937943653-7de35201f04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb2xsZWdlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY3MTEyMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architecture College Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8 text-white"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm">
              Collaborations
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-balance">
              Partner with us for academic programmes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We work with architecture colleges, faculty, and institutions to design meaningful learning experiences.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact#send-message">
                Let's Collaborate
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Collaboration Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Flexible partnership formats tailored to different institutional needs and academic contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {models.map((model, index) => {
              const Icon = model.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{model.title}</CardTitle>
                    <CardDescription className="text-base">
                      {model.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl">Why Partner With Us?</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We're not tour operators—we're architects and educators who understand academic needs. Every programme we design is rooted in pedagogy, aligned with curriculum, and structured around clear learning outcomes.
              </p>
              <p>
                We handle the logistics, yes—but more importantly, we bring academic rigor. From pre-tour briefings to post-tour documentation frameworks, we ensure that travel translates into tangible learning.
              </p>
              <p>
                We work collaboratively with faculty, respecting your academic vision while bringing our expertise in architectural heritage, urban studies, and documentation methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl">How We Work Together</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-3">1. Initial Consultation</h3>
                <p className="text-muted-foreground">
                  Understanding your institution's needs, curriculum goals, student cohort, and academic calendar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">2. Programme Design</h3>
                <p className="text-muted-foreground">
                  Co-creating the itinerary, learning objectives, observation frameworks, and assessment criteria with faculty inputs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">3. Execution & Support</h3>
                <p className="text-muted-foreground">
                  Managing logistics, conducting pre-tour briefings, facilitating on-site learning, and providing post-tour materials.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">4. Follow-Up & Documentation</h3>
                <p className="text-muted-foreground">
                  Supporting student deliverables, sharing feedback, and maintaining the partnership for future collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl">
              Let's design something meaningful together
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether it's a one-time study tour or a long-term academic partnership, we're ready to collaborate.
            </p>
            <Button asChild size="lg">
              <Link to="/contact#send-message">Start the Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collaborations;