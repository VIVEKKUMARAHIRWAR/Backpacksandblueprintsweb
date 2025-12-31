import { problemData } from "@/data/landingPageData";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-orange-50/20 to-background -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/50 text-red-900 text-sm font-semibold">
              <AlertCircle className="h-4 w-4" />
              {problemData.sectionHeader.label}
            </div>
            <h2 className="text-3xl md:text-5xl text-balance">
              {problemData.sectionHeader.title}
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {problemData.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: problemData.content.length * 0.1 }}
              className="text-xl leading-relaxed font-medium text-foreground italic border-l-4 border-primary pl-6 py-2"
            >
              {problemData.closing}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
