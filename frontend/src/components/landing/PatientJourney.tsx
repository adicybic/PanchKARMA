import { motion } from "framer-motion";
import { Stethoscope, Search, FlaskConical, Droplets, Salad, TrendingUp } from "lucide-react";

const steps = [
  { icon: Stethoscope, title: "Consultation", desc: "Meet your Ayurveda specialist" },
  { icon: Search, title: "Dosha Diagnosis", desc: "Personalized constitution analysis" },
  { icon: FlaskConical, title: "Preparation", desc: "Pre-therapy purification" },
  { icon: Droplets, title: "Main Therapy", desc: "Core Panchakarma treatment" },
  { icon: Salad, title: "Recovery Diet", desc: "Customized nutrition plan" },
  { icon: TrendingUp, title: "Health Improvement", desc: "Track your transformation" },
];

export default function PatientJourney() {
  return (
    <section className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-herbal uppercase tracking-wider">Your Healing Path</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Patient Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From first consultation to complete recovery — a guided healing experience.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-24 h-24 rounded-2xl glass-card-elevated flex items-center justify-center mb-4"
                >
                  <step.icon className="h-8 w-8 text-herbal" />
                </motion.div>
                <span className="text-xs font-bold text-herbal mb-1">Step {i + 1}</span>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6 relative pl-12">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-herbal border-2 border-card" />
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-herbal" />
                  <div>
                    <h3 className="text-sm font-semibold">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
