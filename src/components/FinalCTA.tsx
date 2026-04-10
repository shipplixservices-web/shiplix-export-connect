import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4 max-w-3xl mx-auto">
            Ready to Start Earning in{" "}
            <span className="text-secondary">Dollars, Pounds & CAD?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            No stress. No stories. Just safe delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 gradient-cta text-foreground font-bold px-10 py-5 rounded-lg shadow-cta hover:scale-105 transition-transform text-xl animate-pulse-glow"
            >
              Start My Shipment Now
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold px-10 py-5 rounded-lg hover:bg-primary-foreground/20 transition-colors text-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Message Us on WhatsApp
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/50 text-sm">
            🔒 Your goods are insured and tracked from pickup to delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
