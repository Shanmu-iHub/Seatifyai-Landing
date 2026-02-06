const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="container-tight px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">S</div>
              <span className="font-heading font-bold text-xl text-background">SeatifyAI</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm">
              SeatifyAI is a Digital Admission Marketplace connecting schools, colleges, and universities with students and parents — making admissions simple, transparent, and digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Platforms</h4>
            <ul className="space-y-2.5">
              <li><a href="https://k12.seatifyai.com" className="text-background/60 text-sm hover:text-primary transition-colors">School Admissions (K12)</a></li>
              <li><a href="https://he.seatifyai.com" className="text-background/60 text-sm hover:text-primary transition-colors">College & University Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} SeatifyAI – Digital Admission Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
