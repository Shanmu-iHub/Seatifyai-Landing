import { motion } from "framer-motion";
import { Rocket, Eye, TrendingUp, Heart } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Faster Admissions", desc: "Complete the entire journey in minutes, not weeks. Digital-first means instant results." },
  { icon: Eye, title: "Transparent Process", desc: "Real-time visibility into seat availability, fees, eligibility, and deadlines." },
  { icon: TrendingUp, title: "Scalable for Institutions", desc: "Whether you have 100 or 10,000 applicants, SeatifyAI handles it effortlessly." },
  { icon: Heart, title: "Better Experience", desc: "Designed with parents and students in mind. Simple, clear, and stress-free." },
];

const WhyChooseSection = () => {
  return (
    <section id="why" className="section-padding bg-section-alt">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">Why Choose SeatifyAI?</h2>
          <p className="text-muted-foreground text-lg">
            We're not just another admissions portal. We're rethinking how admissions work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card border border-border rounded-2xl p-6 hover-lift transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
