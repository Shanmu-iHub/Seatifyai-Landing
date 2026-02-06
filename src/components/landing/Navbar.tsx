import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-tight flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">S</div>
          <span className="font-heading font-bold text-xl text-foreground">SeatifyAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#what" className="text-sm text-muted-foreground hover:text-foreground transition-colors">What is SeatifyAI</a>
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://k12.seatifyai.com" className="text-sm font-medium px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors text-foreground">
            School Admissions
          </a>
          <a href="https://he.seatifyai.com" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            College Admissions
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#what" onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground">What is SeatifyAI</a>
              <a href="#how" onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground">How It Works</a>
              <a href="#features" onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground">Features</a>
              <a href="#why" onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground">Why Us</a>
              <div className="flex flex-col gap-2 pt-2">
                <a href="https://k12.seatifyai.com" className="text-sm font-medium text-center px-4 py-2.5 rounded-lg border border-border text-foreground">School Admissions</a>
                <a href="https://he.seatifyai.com" className="text-sm font-medium text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground">College Admissions</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
