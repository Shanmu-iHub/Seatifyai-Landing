import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Warm glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(48 97% 50% / 0.25) 0%, transparent 70%)" }} />

      <div className="container-tight px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Digital Admission Marketplace
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            One Platform.{" "}
            <span className="text-primary">Every Admission.</span>{" "}
            Zero Hassle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            SeatifyAI simplifies admissions for schools, colleges, parents, and students — from discovery to seat confirmation, all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://k12.seatifyai.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Explore School Admissions
              <ArrowRight size={18} />
            </a>
            <a
              href="https://he.seatifyai.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-foreground text-foreground font-semibold text-base hover:bg-foreground hover:text-background transition-all"
            >
              Explore College & University Admissions
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src={heroImage}
            alt="Students and parents using SeatifyAI digital admission platform with schools and universities in the background"
            className="w-full rounded-2xl shadow-2xl shadow-primary/10"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
