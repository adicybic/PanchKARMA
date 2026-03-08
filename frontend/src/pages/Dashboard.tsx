import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home, Calendar, Activity, FileText, Salad, Stethoscope, Heart, BookOpen,
  MessageCircle, ChevronLeft, ChevronRight, Leaf, Bell
} from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Dashboard", id: "home" },
  { icon: Calendar, label: "Appointments", id: "appointments" },
  { icon: Activity, label: "Therapy Progress", id: "therapy" },
  { icon: FileText, label: "Health Reports", id: "reports" },
  { icon: Salad, label: "Diet Plan", id: "diet" },
  { icon: Stethoscope, label: "Consultation", id: "consultation" },
  { icon: Heart, label: "Wellness Tracker", id: "wellness" },
  { icon: BookOpen, label: "Education", id: "education" },
  { icon: MessageCircle, label: "Community", id: "community" },
];

const doshaData = [
  { dosha: "Vata", value: 65 },
  { dosha: "Pitta", value: 40 },
  { dosha: "Kapha", value: 30 },
];

const recoveryData = [
  { week: "W1", score: 42 },
  { week: "W2", score: 48 },
  { week: "W3", score: 55 },
  { week: "W4", score: 63 },
  { week: "W5", score: 70 },
  { week: "W6", score: 78 },
  { week: "W7", score: 82 },
];

const therapyProgress = [
  { day: "Mon", sessions: 2 },
  { day: "Tue", sessions: 3 },
  { day: "Wed", sessions: 1 },
  { day: "Thu", sessions: 4 },
  { day: "Fri", sessions: 2 },
  { day: "Sat", sessions: 3 },
  { day: "Sun", sessions: 1 },
];

const meals = [
  { time: "Breakfast", meal: "Warm oatmeal with ghee, turmeric milk, fresh fruits", icon: "🌅" },
  { time: "Lunch", meal: "Kitchari with steamed vegetables, buttermilk", icon: "☀️" },
  { time: "Dinner", meal: "Light moong dal soup, chapati, herbal tea", icon: "🌙" },
  { time: "Herbal Medicine", meal: "Triphala churna, Ashwagandha capsule", icon: "🌿" },
];

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 bottom-0 z-40 bg-card border-r border-border/50 flex flex-col"
      >
        <div className="h-16 flex items-center gap-2 px-4 border-b border-border/50">
          <Leaf className="h-6 w-6 text-herbal shrink-0" />
          {!collapsed && <span className="text-lg font-bold font-serif whitespace-nowrap">PANCHA KARMA</span>}
        </div>

        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-herbal-light text-herbal-dark"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="h-12 flex items-center justify-center border-t border-border/50 text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </motion.aside>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${collapsed ? "ml-[72px]" : "ml-[260px]"}`}>
        {/* Header */}
        <header className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <div>
            <h1 className="text-lg font-semibold">Welcome back, Patient</h1>
            <p className="text-xs text-muted-foreground">Your wellness journey continues</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-muted/50">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-herbal" />
            </button>
            <Link to="/">
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Home
              </Button>
            </Link>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Top row widgets */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Recovery Score", value: "82%", change: "+5%", color: "text-herbal" },
              { label: "Sessions Done", value: "14/21", change: "66%", color: "text-gold" },
              { label: "Next Appointment", value: "Mar 10", change: "3 days", color: "text-herbal" },
              { label: "Dosha Balance", value: "Good", change: "Improving", color: "text-herbal" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card-elevated rounded-2xl p-5"
              >
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`text-xs mt-1 ${stat.color}`}>{stat.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recovery Progress */}
            <div className="lg:col-span-2 glass-card-elevated rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Recovery Progress</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={recoveryData}>
                    <defs>
                      <linearGradient id="recoveryGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(135, 14%, 50%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(135, 14%, 50%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }} />
                    <Area type="monotone" dataKey="score" stroke="hsl(135, 14%, 50%)" fill="url(#recoveryGrad)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Dosha Balance */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Dosha Balance</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={doshaData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="dosha" tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }} />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar dataKey="value" stroke="hsl(var(--herbal-green))" fill="hsl(var(--herbal-green))" fillOpacity={0.25} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Therapy Progress */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Therapy Stages</h3>
              <div className="space-y-4">
                {[
                  { stage: "Preparation (Poorvakarma)", progress: 100, status: "Complete" },
                  { stage: "Main Therapy (Pradhanakarma)", progress: 66, status: "In Progress" },
                  { stage: "Recovery (Paschatkarma)", progress: 0, status: "Upcoming" },
                ].map((s) => (
                  <div key={s.stage}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium">{s.stage}</span>
                      <span className="text-muted-foreground">{s.status}</span>
                    </div>
                    <Progress value={s.progress} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">Doctor Notes</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Patient responding well to Basti therapy. Continue current herbal formulation.
                  Increase warm water intake. Next review in 3 days."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Dr. Ananya Sharma</p>
              </div>
            </div>

            {/* Upcoming Appointment */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Upcoming Appointment</h3>
              <div className="glass-card rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-herbal-light flex items-center justify-center text-herbal-dark font-bold text-sm">AS</div>
                  <div>
                    <p className="text-sm font-semibold">Dr. Ananya Sharma</p>
                    <p className="text-xs text-muted-foreground">Vedic Wellness Center</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>📅 March 10, 2026</span>
                  <span>🕐 10:00 AM</span>
                </div>
                <div className="mt-3">
                  <span className="px-2.5 py-1 rounded-full bg-herbal-light text-herbal-dark text-xs font-medium">
                    Basti Session #8
                  </span>
                </div>
              </div>

              <h3 className="font-semibold mb-3 mt-6">Weekly Sessions</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={therapyProgress}>
                    <XAxis dataKey="day" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <Line type="monotone" dataKey="sessions" stroke="hsl(var(--gold))" strokeWidth={2} dot={{ r: 3, fill: "hsl(var(--gold))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Diet Plan */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Today's Diet Plan</h3>
              <div className="space-y-3">
                {meals.map((m) => (
                  <div key={m.time} className="glass-card rounded-xl p-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{m.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-herbal">{m.time}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{m.meal}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  💡 Remember: Drink warm water throughout the day. Avoid cold & raw foods during therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
