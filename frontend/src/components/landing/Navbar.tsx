import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const links = [
  { label: "Therapies", href: "#therapies" },
  { label: "Journey", href: "#journey" },
  { label: "Doctors", href: "#doctors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-herbal" />
          <span className="text-lg font-bold font-serif">PANCHA KARMA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Link to="/dosha-diagnosis">
            <Button size="sm" variant="outline" className="rounded-full border-herbal/30 text-herbal hover:bg-herbal/5">
              Dosha Quiz
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Dashboard
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border/30"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">
                  {l.label}
                </a>
              ))}
              <Link to="/dosha-diagnosis" onClick={() => setOpen(false)} className="block text-sm font-medium text-herbal">
                Dosha Quiz
              </Link>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground">Dashboard</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
