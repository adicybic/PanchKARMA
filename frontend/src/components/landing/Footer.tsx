import { Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5" />
              <span className="text-lg font-bold font-serif">PANCHA KARMA</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Ancient Ayurvedic wisdom meets modern technology. Your complete digital Panchakarma ecosystem.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#therapies" className="hover:opacity-100 transition-opacity">Therapies</a></li>
              <li><a href="#doctors" className="hover:opacity-100 transition-opacity">Find Doctors</a></li>
              <li><Link to="/dosha-diagnosis" className="hover:opacity-100 transition-opacity">Dosha Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Dashboard</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/dashboard" className="hover:opacity-100 transition-opacity">Patient Portal</Link></li>
              <li><Link to="/dashboard" className="hover:opacity-100 transition-opacity">Therapy Progress</Link></li>
              <li><Link to="/dashboard" className="hover:opacity-100 transition-opacity">Health Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <span>© 2026 Pancha Karma. All rights reserved.</span>
          <span className="flex items-center gap-1">Made with <Heart className="h-3.5 w-3.5 fill-current" /> for holistic wellness</span>
        </div>
      </div>
    </footer>
  );
}
