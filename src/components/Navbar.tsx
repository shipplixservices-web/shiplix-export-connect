import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="text-xl font-black text-primary">Shipplix</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          <a href="#export" className="hover:text-primary transition-colors">What We Ship</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a
            href="https://wa.me/2348000000000"
            className="inline-flex items-center gap-2 gradient-cta text-foreground font-bold px-5 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <a href="#export" className="block text-foreground font-medium" onClick={() => setOpen(false)}>What We Ship</a>
          <a href="#how-it-works" className="block text-foreground font-medium" onClick={() => setOpen(false)}>How It Works</a>
          <a href="https://wa.me/2348000000000" className="block gradient-cta text-foreground font-bold px-5 py-2 rounded-lg text-center">WhatsApp Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
