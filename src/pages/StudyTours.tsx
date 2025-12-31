import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { MapPin, Calendar, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const StudyTours = () => {
  const tours = [
    {
      title: "Delhi: Layered History",
      duration: "4-5 days",
      level: "2nd-4th Year",
      image: "https://images.unsplash.com/photo-1728384236501-dedbdc8f6d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGhpc3RvcmljYWwlMjBtb251bWVudCUyMGluZGlhfGVufDF8fHx8MTc2NzExMjkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "From Sultanate structures to Lutyen's Delhi—explore architectural evolution across centuries."
    },
    {
      title: "Ahmedabad: Modernism & Heritage",
      duration: "3-4 days",
      level: "3rd-4th Year",
      image: "https://images.unsplash.com/photo-1599501756218-96d067f3b2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaG1lZGFiYWQlMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcxMTMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Study Le Corbusier's work, Doshi's projects, and the old city's pols in one comprehensive tour."
    },
    {
      title: "Puducherry: Colonial Urbanism",
      duration: "2-3 days",
      level: "1st-3rd Year",
      image: "https://images.unsplash.com/photo-1679945754002-ddd5825c8bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWR1Y2hlcnJ5JTIwaW5kaWElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY3MTEzMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "French colonial planning, Indo-French architecture, and Auroville's experimental urbanism."
    }
  ];

  const process = [
    {
      title: "Pre-Tour Preparation",
      items: [
        "Briefing session with faculty",
        "Reading material and site background",
        "Observation frameworks and checklist"
      ]
    },
    {
      title: "On-Site Learning",
      items: [
        "Guided architectural analysis",
        "Sketching and documentation time",
        "Conversations with local experts"
      ]
    },
    {
      title: "Post-Tour Deliverables",
      items: [
        "Annotated sketches and drawings",
        "Photo documentation with analysis",
        "Reflective essay or portfolio"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      {/* Hero Section with Background Image */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763924812928-54b2d721cd5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkZW50cyUyMGJ1aWxkaW5nJTIwdG91cnxlbnwxfHx8fDE3NjcxMTMxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architecture Students on Study Tour"
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
              Study Tours
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-balance">
              Curriculum-aligned architectural study tours
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Multi-day immersive programmes designed for architecture students—where every building becomes a case study.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact#send-message">
                Plan a Tour
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl mb-6">Featured Tours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Each tour is customizable based on your institution's curriculum, year of study, and specific learning objectives.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {tours.map((tour, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{tour.title}</CardTitle>
                    <CardDescription className="text-base">
                      {tour.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <span>{tour.level}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured three-phase approach to ensure academic rigor
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {process.map((phase, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-6 text-xl">
                        {index + 1}
                      </div>
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-50/30 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl text-balance">
              Ready to plan your next study tour?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's design a programme that aligns with your curriculum and academic calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/contact#send-message">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collaborations">View Collaboration Models</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StudyTours;