import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Award, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const doctors = [
  { name: "Dr. Ananya Sharma", clinic: "Vedic Wellness Center", experience: 15, rating: 4.9, specialization: "Vamana & Virechana", location: "Mumbai", fee: 1500, avatar: "AS" },
  { name: "Dr. Rajesh Nair", clinic: "Kerala Ayurveda Clinic", experience: 22, rating: 4.8, specialization: "Basti Therapy", location: "Kerala", fee: 1200, avatar: "RN" },
  { name: "Dr. Priya Menon", clinic: "Harmony Ayurveda", experience: 12, rating: 4.7, specialization: "Nasya & Detox", location: "Bangalore", fee: 1800, avatar: "PM" },
  { name: "Dr. Vikram Das", clinic: "Panchakarma Institute", experience: 18, rating: 4.9, specialization: "Raktamokshana", location: "Delhi", fee: 2000, avatar: "VD" },
  { name: "Dr. Meera Iyer", clinic: "Shakti Wellness", experience: 10, rating: 4.6, specialization: "Dosha Balancing", location: "Chennai", fee: 1000, avatar: "MI" },
  { name: "Dr. Suresh Pillai", clinic: "Ancient Cures Clinic", experience: 25, rating: 5.0, specialization: "Complete Panchakarma", location: "Kerala", fee: 2500, avatar: "SP" },
];

export default function DoctorDiscovery() {
  const [locationFilter, setLocationFilter] = useState("all");
  const [specFilter, setSpecFilter] = useState("all");

  const filtered = doctors.filter((d) => {
    if (locationFilter !== "all" && d.location !== locationFilter) return false;
    if (specFilter !== "all" && !d.specialization.toLowerCase().includes(specFilter.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-herbal uppercase tracking-wider">Expert Practitioners</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Find Your Doctor</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect with certified Ayurveda specialists for personalized Panchakarma therapy.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-40 rounded-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Kerala">Kerala</SelectItem>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
            </SelectContent>
          </Select>
          <Select value={specFilter} onValueChange={setSpecFilter}>
            <SelectTrigger className="w-48 rounded-full">
              <SelectValue placeholder="Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              <SelectItem value="vamana">Vamana</SelectItem>
              <SelectItem value="basti">Basti</SelectItem>
              <SelectItem value="nasya">Nasya</SelectItem>
              <SelectItem value="panchakarma">Complete Panchakarma</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-card-elevated rounded-2xl p-6 transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-herbal-light flex items-center justify-center text-herbal-dark font-bold text-lg shrink-0">
                  {doc.avatar}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground">{doc.clinic}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="font-medium">{doc.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Award className="h-3.5 w-3.5" />
                  <span>{doc.experience} years experience</span>
                </div>
                <div className="inline-block px-2.5 py-1 rounded-full bg-herbal-light text-herbal-dark text-xs font-medium">
                  {doc.specialization}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-sm font-semibold">₹{doc.fee}</span>
                <Button size="sm" className="rounded-full text-xs bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
