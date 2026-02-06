import { motion } from "framer-motion";
import { Users, School, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Parents & Students",
    points: [
      "Discover and compare schools or colleges in one place",
      "Check eligibility, reserve seats, and pay — all online",
    ],
  },
  {
    icon: School,
    title: "Schools (K12)",
    points: [
      "List your institution and manage admissions digitally",
      "Reduce manual effort with automated workflows",
    ],
  },
  {
    icon: GraduationCap,
    title: "Colleges & Universities",
    points: [
      "Showcase degree programs and attract qualified students",
      "Streamline applications with smart eligibility checks",
    ],
  },
];

const WhoIsForSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Who is SeatifyAI For?</h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a parent looking for the right school, a student exploring colleges, or an institution managing admissions — SeatifyAI is built for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
