import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const HeritageWalks = () => {
  const walks = [
    {
      title: "Old Delhi: Shahjahanabad",
      duration: "3-4 hours",
      groupSize: "15-20 people",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1570168305673-42708ac64073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkZWxoaSUyMHN0cmVldCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcxMTIzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Urban morphology of Mughal Delhi—from Jama Masjid to Chandni Chowk, understanding havelis, katras, and bazaar typologies."
    },
    {
      title: "Holkar Heritage: Indore",
      duration: "3-4 hours",
      groupSize: "15-20 people",
      location: "Indore",
      image: "https://images.unsplash.com/photo-1693219490508-c204a8e13561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvcmUlMjBwYWxhY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY3MTEzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Exploring Rajwada Palace and Holkar-era architecture—analyzing Indo-Saracenic influences, traditional havelis, and commercial architecture of Central India."
    },
    {
      title: "Temple Architecture: Khajuraho",
      duration: "4-5 hours",
      groupSize: "12-15 people",
      location: "Khajuraho",
      image: "https://images.unsplash.com/photo-1665724790893-5a4b8ba41f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGFqdXJhaG8lMjB0ZW1wbGVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzExMzYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Chandela dynasty's architectural masterpieces—studying Nagara temple architecture, sculptural programs, and spatial organization of the sacred complex."
    },
    {
      title: "Afghan Sultanate: Mandu",
      duration: "Half day",
      groupSize: "15-20 people",
      location: "Mandu",
      image: "https://images.unsplash.com/photo-1706103780703-d044f10c30a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5kdSUyMHBhbGFjZSUyMHJ1aW5zfGVufDF8fHx8MTc2NzExMzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Medieval fortress city—studying Jahaz Mahal, Hindola Mahal, and Afghan architectural innovations in fortification and palace design."
    }
  ];

  const formats = [
    {
      title: "For Students",
      description: "Structured walks with observation frameworks, sketching sessions, and analytical discussions.",
      features: ["Pre-walk reading material", "On-site analysis exercises", "Post-walk reflection sheet"]
    },
    {
      title: "For Institutions",
      description: "Customizable walks as part of academic programmes, guest lectures, or institutional outings.",
      features: ["Faculty collaboration", "Curriculum alignment", "Documentation support"]
    },
    {
      title: "Public Walks",
      description: "Open to architects, designers, heritage enthusiasts, and anyone curious about cities.",
      features: ["Weekend sessions", "Small group size", "Expert-led narratives"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712988377668-2bceb8aa0672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHdhbGslMjBvbGQlMjBjaXR5fGVufDF8fHx8MTc2NzExMjMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Heritage Walk Old City"
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
              Heritage & City Walks
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-balance">
              Architectural reading of cities
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Not tourist walks—structured explorations that decode urban morphology, building typologies, and heritage contexts.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact#send-message">
                Book a Walk
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Walk Offerings */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Walks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Each walk is led by architects or heritage professionals with deep contextual knowledge of the city.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {walks.map((walk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <ImageWithFallback
                      src={walk.image}
                      alt={walk.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle>{walk.title}</CardTitle>
                    <CardDescription className="text-base">
                      {walk.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{walk.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{walk.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{walk.groupSize}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk Formats */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Walk Formats</h2>
              <p className="text-lg text-muted-foreground">
                We offer walks tailored to different audiences and learning contexts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((format, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{format.title}</CardTitle>
                    <CardDescription className="text-base">
                      {format.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {format.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl">What to Expect</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our walks are not narrated tours—they are analytical explorations. We pause frequently to observe, sketch, discuss, and question.
              </p>
              <p>
                Expect to look at buildings not just as monuments, but as architectural responses to climate, culture, materials, and patronage. We discuss construction techniques, spatial hierarchies, urban fabric, and conservation challenges.
              </p>
              <p>
                Whether you're an architecture student, a practicing professional, or simply curious about cities, these walks offer new ways of seeing and understanding the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl">
              Join us on the next walk
            </h2>
            <p className="text-lg text-muted-foreground">
              Or collaborate with us to design custom walks for your institution or group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact#send-message">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collaborations">Institutional Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HeritageWalks;