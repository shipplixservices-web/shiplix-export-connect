import { motion } from "framer-motion";
import { Clock, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 gradient-urgency relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-72 h-72 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive-foreground mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Slots Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Weekly Shipments Are <span className="text-secondary">Filling Fast</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4">
            If your goods are not in this week's batch, you're delaying your own money.
          </p>
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-lg">
            <Clock className="w-5 h-5" />
            Next shipment closes in 3 days
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
