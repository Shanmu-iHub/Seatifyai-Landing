import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="mb-3">
            Built for Institutions.{" "}
            <span className="text-primary">Designed for Students.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            SeatifyAI is trusted by forward-thinking schools and colleges that want to modernize their admissions.
          </p>
        </motion.div>

        {/* Testimonial placeholders */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { quote: "SeatifyAI transformed how we handle admissions. Applications went up 40% in the first semester.", name: "School Administrator", role: "K12 Institution" },
            { quote: "As a parent, I compared five schools and confirmed my daughter's admission in one afternoon. Incredible.", name: "Parent", role: "Mumbai" },
            { quote: "The eligibility check saved us hours of screening. We now focus on students who actually qualify.", name: "Admissions Head", role: "University" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border hover-lift transition-all"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Trusted By Leading Institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Partner School A", "University B", "College C", "Academy D", "Institute E"].map((name) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="px-6 py-3 rounded-lg bg-muted text-muted-foreground text-sm font-medium cursor-pointer transition-all"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
