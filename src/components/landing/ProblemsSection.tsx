import { motion } from "framer-motion";
import { AlertTriangle, Phone, Eye, BarChart3 } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Confusing Admission Processes", desc: "Every institution has a different process. Parents and students waste hours figuring out requirements, deadlines, and steps." },
  { icon: Phone, title: "Endless Manual Follow-ups", desc: "Phone calls, school visits, and repeated inquiries. The admission journey is full of unnecessary back-and-forth." },
  { icon: Eye, title: "No Seat Availability Clarity", desc: "You never know how many seats are left or if your preferred program is still open. That uncertainty leads to missed opportunities." },
  { icon: BarChart3, title: "No Centralized Comparison", desc: "Comparing fees, programs, and eligibility across multiple institutions means juggling websites, brochures, and spreadsheets." },
];

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">Key Problems We Solve</h2>
          <p className="text-muted-foreground text-lg">
            Admissions shouldn't be stressful. Here's what SeatifyAI eliminates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 bg-card rounded-2xl p-7 border border-border hover-lift transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
