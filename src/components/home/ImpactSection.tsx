import { Link } from "react-router-dom";
import { impactData } from "@/data/landingPageData";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ImpactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />
      
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-16 text-center"
          >
            <div className="text-sm text-primary uppercase tracking-wider font-semibold">
              {impactData.sectionHeader.label}
            </div>
            <h2 className="text-3xl md:text-5xl text-balance max-w-3xl mx-auto">
              {impactData.sectionHeader.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {impactData.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <Link to={impactData.primaryCta.href}>
                    {impactData.primaryCta.text}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={impactData.secondaryCta.href}>
                    {impactData.secondaryCta.text}
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-2xl p-10 border border-border/50 shadow-xl">
                <h3 className="text-xl font-semibold mb-8">We work with:</h3>
                <ul className="space-y-4">
                  {impactData.supportList.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
