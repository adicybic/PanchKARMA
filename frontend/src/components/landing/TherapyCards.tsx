import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Heart, Shield } from "lucide-react";

const therapies = [
  {
    name: "Vamana",
    subtitle: "Therapeutic Emesis",
    process: "Controlled vomiting therapy to expel toxins from the upper body through medicated decoctions.",
    duration: "3-7 days",
    diseases: ["Asthma", "Skin disorders", "Chronic cold", "Obesity"],
    benefits: ["Clears respiratory channels", "Balances Kapha dosha", "Improves digestion", "Enhances skin clarity"],
    color: "herbal",
    icon: "🌿",
  },
  {
    name: "Virechana",
    subtitle: "Therapeutic Purgation",
    process: "Medicated purgation therapy to cleanse the gut and eliminate Pitta-related toxins.",
    duration: "5-7 days",
    diseases: ["Liver disorders", "Jaundice", "Acidity", "Chronic fever"],
    benefits: ["Detoxifies blood", "Improves metabolism", "Treats skin diseases", "Enhances liver function"],
    color: "gold",
    icon: "☀️",
  },
  {
    name: "Basti",
    subtitle: "Medicated Enema",
    process: "Administration of herbal decoctions and oils through rectal route for deep cleansing.",
    duration: "8-30 days",
    diseases: ["Arthritis", "Constipation", "Neurological disorders", "Back pain"],
    benefits: ["Balances Vata dosha", "Nourishes tissues", "Relieves joint pain", "Improves vitality"],
    color: "herbal",
    icon: "💧",
  },
  {
    name: "Nasya",
    subtitle: "Nasal Therapy",
    process: "Administration of herbal oils and powders through nasal passages for head purification.",
    duration: "7-14 days",
    diseases: ["Sinusitis", "Migraine", "Hair fall", "Mental disorders"],
    benefits: ["Clears sinuses", "Improves memory", "Treats headaches", "Enhances voice quality"],
    color: "gold",
    icon: "🌸",
  },
  {
    name: "Raktamokshana",
    subtitle: "Blood Purification",
    process: "Controlled bloodletting therapy using leeches or instruments to purify blood.",
    duration: "1-3 sessions",
    diseases: ["Eczema", "Psoriasis", "Gout", "Blood disorders"],
    benefits: ["Purifies blood", "Treats chronic skin issues", "Reduces inflammation", "Improves circulation"],
    color: "herbal",
    icon: "🩸",
  },
];

function TherapyCard({ therapy, index }: { therapy: typeof therapies[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card-elevated rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{therapy.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{therapy.name}</h3>
              <p className="text-sm text-muted-foreground">{therapy.subtitle}</p>
            </div>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{therapy.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span>{therapy.diseases.length} conditions</span>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-4 border-t border-border/50 pt-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Process</h4>
                  <p className="text-sm text-muted-foreground">{therapy.process}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-herbal" /> Diseases Treated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {therapy.diseases.map((d) => (
                      <span key={d} className="px-3 py-1 rounded-full bg-herbal-light text-herbal-dark text-xs font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {therapy.benefits.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-herbal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function TherapyCards() {
  return (
    <section id="therapies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-herbal uppercase tracking-wider">The Five Purifications</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Panchakarma Therapies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five time-tested purification procedures that detoxify the body, restore balance, and rejuvenate your entire being.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {therapies.map((therapy, i) => (
            <TherapyCard key={therapy.name} therapy={therapy} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
