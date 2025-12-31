import Layout from "@/components/layout/Layout";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Users, BookOpen, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Pedagogy First",
      description: "Every experience is designed with learning outcomes in mind—structured observation, analytical frameworks, and documentation deliverables."
    },
    {
      icon: Target,
      title: "Context Matters",
      description: "We don't just show buildings; we reveal their urban, historical, and socio-cultural contexts through layered narratives."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with faculty, institutions, and local experts to create meaningful academic partnerships."
    },
    {
      icon: Heart,
      title: "Passion for Heritage",
      description: "Our commitment to architectural heritage drives us to preserve, document, and share stories of our built environment."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-purple-50/30 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-balance">
              Bridging architecture education and experiential learning
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are architects, educators, and heritage enthusiasts committed to reimagining how students learn from the built environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704829550040-4b9798e74090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYXJjaGl0ZWN0dXJlJTIwdHJhdmVsfGVufDF8fHx8MTc2NzExMjYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students Studying Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Backpacks & Blueprints was born from firsthand experience—both as architecture students who traveled extensively, and as educators who later organized study tours.
                </p>
                <p>
                  We realized that most educational tours operate on a tourism model: herding students through iconic sites, ticking boxes on an itinerary, without structured frameworks for observation, analysis, or documentation.
                </p>
                <p>
                  This gap inspired us to create an alternative—a model where architectural travel is an extension of the classroom, where every building becomes a case study, and where students return not just with photos, but with knowledge.
                </p>
                <p>
                  Today, we work with architecture colleges, research groups, and curious minds to design tours, walks, and documentation projects that prioritize learning over logistics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl mb-6">What We Stand For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our approach is guided by core principles that shape every programme we design
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                      <CardContent className="pt-8">
                        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                          <Icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a small team of practicing architects with academic backgrounds in architecture, urban design, and conservation.
                </p>
                <p>
                  We work on architectural documentation projects and conduct educational programs that bridge academic learning with real-world exploration. What drives us is a shared belief that travel can—and should—be a rigorous academic exercise.
                </p>
                <p>
                  We collaborate with guest faculty, conservation experts, historians, and local guides to ensure that every tour offers multiple lenses of understanding.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642917540377-baf3bb3c4a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGJ1aWxkaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzY3MDAwMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Heritage Building India"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;