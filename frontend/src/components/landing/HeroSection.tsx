import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-herbs.png";

const FloatingLeaf = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={`absolute opacity-20 ${className}`}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <Leaf className="h-8 w-8 text-herbal" />
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Floating elements */}
      <FloatingLeaf delay={0} className="top-20 left-[10%]" />
      <FloatingLeaf delay={1} className="top-40 right-[15%]" />
      <FloatingLeaf delay={2} className="bottom-32 left-[20%]" />
      <FloatingLeaf delay={0.5} className="top-60 left-[60%]" />
      <FloatingLeaf delay={1.5} className="bottom-48 right-[25%]" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-herbal/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herbal-light border border-herbal/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-herbal" />
              <span className="text-sm font-medium text-herbal-dark">Ancient Wisdom, Modern Healing</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experience Natural{" "}
              <span className="text-gradient-gold">Detox & Healing</span>{" "}
              through Panchakarma
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Discover the ancient science of Ayurvedic purification. Personalized therapy programs,
              expert practitioners, and AI-powered health insights — all in one platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/dosha-diagnosis">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2 shadow-lg">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#therapies">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-primary/5">
                  Explore Panchakarma
                </Button>
              </a>
              <a href="#doctors">
                <Button size="lg" variant="ghost" className="rounded-full px-8 text-herbal hover:bg-herbal/5">
                  Find Doctors
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-herbal" />
                <span>5000+ Patients Healed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <span>200+ Expert Doctors</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-herbal/10 blur-2xl animate-pulse-gentle" />
              <img
                src={heroImage}
                alt="Ayurvedic herbs and healing"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
