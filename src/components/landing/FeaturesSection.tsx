import { motion } from "framer-motion";
import { Layers, GitCompare, BrainCircuit, Wallet, Activity, Sparkles, Bell } from "lucide-react";

const features = [
  { icon: Layers, title: "Multi-Institution Listings", desc: "Thousands of schools and colleges, all in one searchable marketplace." },
  { icon: GitCompare, title: "Course & School Comparison", desc: "Compare programs, fees, and facilities side by side to make informed decisions." },
  { icon: BrainCircuit, title: "Smart Eligibility Checks", desc: "Know instantly if you qualify before you apply. No more wasted effort." },
  { icon: Wallet, title: "Partial Payment Seat Blocking", desc: "Reserve your seat with a fraction of the fee. Pay the rest later." },
  { icon: Activity, title: "Real-Time Seat Availability", desc: "See exactly how many seats are left — updated live as admissions happen." },
  { icon: Sparkles, title: "AI-Powered Recommendations", desc: "Get personalized course and institution suggestions based on your profile." },
  { icon: Bell, title: "Automated Notifications", desc: "Stay updated on deadlines, seat status, and application progress — automatically." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-section-alt">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">Platform Highlights</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for a smarter, faster admission experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl p-6 border border-border hover-lift transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon size={20} className="text-accent-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
