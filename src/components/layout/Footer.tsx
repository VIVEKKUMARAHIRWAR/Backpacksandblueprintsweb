import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/33663c10adef7a9be06c9e187931620379c45be4.png";

export const Footer = () => {
  const footerLinks = {
    explore: [
      { label: "Study Tours", href: "/study-tours" },
      { label: "Heritage Walks", href: "/heritage-walks" },
      { label: "Documentation", href: "/documentation" },
    ],
    collaborate: [
      { label: "For Institutions", href: "/collaborations" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:backpacksandblueprints@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/b-n-b" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/backpacksandblueprints/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@backpacksandblueprints" },
  ];

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src={logo} 
                alt="Backpacks & Blueprints Logo" 
                className="h-12 w-12 group-hover:scale-110 transition-transform object-contain"
              />
              <span className="text-lg font-semibold">Backpacks & Blueprints</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Architecture-led travel and academic exploration for students, educators, and curious minds. Bridging pedagogy and place through structured learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="h-10 w-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborate */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-6 text-lg">Collaborate</h3>
            <ul className="space-y-3">
              {footerLinks.collaborate.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter/CTA */}
            <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground mb-2">
                Interested in our programmes?
              </p>
              <Link
                to="/contact#send-message"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                Get in touch
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Backpacks & Blueprints. Architecture · Heritage · Pedagogy
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};