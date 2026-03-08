import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { ArrowLeft, ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  { q: "How would you describe your skin?", options: ["Dry, rough, thin", "Warm, oily, prone to rashes", "Thick, oily, smooth"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How is your digestion?", options: ["Irregular, gassy", "Strong, sometimes acidic", "Slow but steady"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How do you respond to cold weather?", options: ["Very sensitive, feel cold easily", "Tolerate well, prefer cool", "Handle it okay, don't mind"], dosha: ["vata", "pitta", "kapha"] },
  { q: "What's your body frame?", options: ["Thin, light, bony", "Medium, muscular", "Large, broad, sturdy"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How is your sleep pattern?", options: ["Light, interrupted", "Moderate, wake up hot", "Deep, heavy, oversleep"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How do you handle stress?", options: ["Anxious, worried", "Irritable, frustrated", "Calm but withdrawn"], dosha: ["vata", "pitta", "kapha"] },
  { q: "What's your energy level?", options: ["Bursts of energy, tires quickly", "High energy, driven", "Steady, enduring"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How is your appetite?", options: ["Variable, forget to eat", "Strong, get hangry", "Moderate, can skip meals"], dosha: ["vata", "pitta", "kapha"] },
  { q: "Describe your hair:", options: ["Dry, curly, frizzy", "Fine, thinning, early grey", "Thick, lustrous, wavy"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How's your mental activity?", options: ["Quick, restless mind", "Sharp, focused, analytical", "Calm, slow, methodical"], dosha: ["vata", "pitta", "kapha"] },
  { q: "Your preferred climate?", options: ["Warm and humid", "Cool and dry", "Warm and dry"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How often do you feel thirsty?", options: ["Rarely", "Frequently, intense thirst", "Moderate, steady"], dosha: ["vata", "pitta", "kapha"] },
  { q: "Your walking pace?", options: ["Fast and light", "Moderate, purposeful", "Slow and steady"], dosha: ["vata", "pitta", "kapha"] },
  { q: "How do you learn new things?", options: ["Quickly but forget fast", "Focused, logical learner", "Takes time but remembers well"], dosha: ["vata", "pitta", "kapha"] },
  { q: "Your emotional tendency?", options: ["Anxious, fearful", "Angry, competitive", "Attached, sentimental"], dosha: ["vata", "pitta", "kapha"] },
];

export default function DoshaDiagnosis() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = index;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else setShowResult(true);
  };
  const prev = () => { if (current > 0) setCurrent(current - 1); };

  const scores = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach((a) => {
    if (a === 0) scores.vata++;
    else if (a === 1) scores.pitta++;
    else scores.kapha++;
  });

  const total = Math.max(answers.length, 1);
  const radarData = [
    { dosha: "Vata", value: Math.round((scores.vata / total) * 100), fullMark: 100 },
    { dosha: "Pitta", value: Math.round((scores.pitta / total) * 100), fullMark: 100 },
    { dosha: "Kapha", value: Math.round((scores.kapha / total) * 100), fullMark: 100 },
  ];

  const dominant = radarData.reduce((a, b) => (b.value > a.value ? b : a)).dosha;

  if (showResult) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-elevated rounded-3xl p-8 max-w-lg w-full text-center"
        >
          <Sparkles className="h-10 w-10 text-herbal mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your Dosha Profile</h2>
          <p className="text-muted-foreground mb-6">
            Your dominant dosha is <span className="font-bold text-herbal">{dominant}</span>
          </p>

          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="dosha" tick={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Dosha" dataKey="value" stroke="hsl(var(--herbal-green))" fill="hsl(var(--herbal-green))" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {radarData.map((d) => (
              <div key={d.dosha} className="glass-card rounded-xl p-3">
                <p className="text-xs text-muted-foreground">{d.dosha}</p>
                <p className="text-2xl font-bold">{d.value}%</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 rounded-full" onClick={() => { setAnswers([]); setCurrent(0); setShowResult(false); }}>
              Retake Quiz
            </Button>
            <Link to="/dashboard" className="flex-1">
              <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                View Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="h-5 w-5 text-herbal" />
            <h1 className="text-2xl font-bold">Dosha Diagnosis</h1>
          </div>
          <p className="text-sm text-muted-foreground">Answer {questions.length} questions to discover your Ayurvedic constitution</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
          </div>
          <Progress value={((current + 1) / questions.length) * 100} className="h-2" />
        </div>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card-elevated rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold mb-6">{questions[current].q}</h3>

          <div className="space-y-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  answers[current] === i
                    ? "border-herbal bg-herbal-light"
                    : "border-border/50 hover:border-herbal/40 hover:bg-herbal-light/50"
                }`}
              >
                <span className="text-sm">{opt}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prev} disabled={current === 0} className="rounded-full gap-2">
            <ArrowLeft className="h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={next}
            disabled={answers[current] === undefined}
            className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {current === questions.length - 1 ? "See Results" : "Next"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
