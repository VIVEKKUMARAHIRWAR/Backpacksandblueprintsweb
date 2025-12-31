import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { FileText, Camera, PenTool, Archive, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Documentation = () => {
  const services = [
    {
      icon: PenTool,
      title: "Measured Drawings",
      description: "Accurate architectural documentation through plans, sections, elevations, and detail drawings of heritage structures."
    },
    {
      icon: Camera,
      title: "Photographic Documentation",
      description: "Systematic visual documentation—exterior, interior, construction details, materials, and context."
    },
    {
      icon: FileText,
      title: "Analytical Reports",
      description: "Research-backed documentation with historical context, architectural analysis, and conservation recommendations."
    },
    {
      icon: Archive,
      title: "Digital Archives",
      description: "Creating organized repositories of architectural heritage for institutions, researchers, and conservation bodies."
    }
  ];

  const applications = [
    {
      title: "Academic Research",
      description: "Supporting thesis projects, dissertations, and research publications with rigorous documentation."
    },
    {
      title: "Conservation Projects",
      description: "Pre-intervention documentation for heritage conservation and restoration work."
    },
    {
      title: "Institutional Archives",
      description: "Building visual and analytical archives for architecture schools, museums, and cultural organizations."
    },
    {
      title: "Publication & Exhibition",
      description: "High-quality documentation for books, journals, exhibitions, and public outreach."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759234917091-53ad16a33bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzY3MTEyNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architectural Documentation"
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
              Documentation & Research
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-balance">
              Visual and analytical documentation of architectural heritage
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Measured drawings, photographic essays, and research repositories for academic and conservation purposes.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact#send-message">
                Commission Documentation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive documentation services tailored to academic and professional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl">Our Approach</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Documentation is not just about recording what exists—it's about understanding how buildings were conceived, constructed, and how they've evolved over time.
                </p>
                <p>
                  We approach every project with a research mindset, combining on-site surveys with archival research, oral histories, and construction analysis. Our drawings are not just technical representations; they are interpretive tools that reveal design intent, structural logic, and material culture.
                </p>
                <p>
                  Whether you're a student documenting for your thesis, an institution building an archive, or a conservation body planning restoration work—we bring academic rigor and architectural understanding to every assignment.
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
                  src="https://images.unsplash.com/photo-1727522974631-c8779e7de5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZHJhd2luZyUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzY3MTE0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Architectural Measuring and Documentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Applications</h2>
              <p className="text-lg text-muted-foreground">
                Our documentation work serves multiple academic and professional contexts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription className="text-base">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl">Process</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-3">1. Project Brief & Site Visit</h3>
                <p className="text-muted-foreground">
                  Understanding your documentation needs, timeline, and deliverables. Initial site assessment to determine scope.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">2. Documentation & Research</h3>
                <p className="text-muted-foreground">
                  On-site surveys, photographic documentation, and archival research. Field notes, sketches, and data collection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">3. Analysis & Drawings</h3>
                <p className="text-muted-foreground">
                  Converting field data into measured drawings, analytical diagrams, and visual essays. Contextual research and interpretation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">4. Deliverables</h3>
                <p className="text-muted-foreground">
                  Digital files, physical prints, research reports—formatted according to your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl">
              Let's document something meaningful
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether it's a single building or a comprehensive heritage precinct, we're here to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact#send-message">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collaborations">Partnership Models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentation;