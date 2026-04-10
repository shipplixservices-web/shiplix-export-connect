import { motion } from "framer-motion";
import { Users, Percent, ArrowRight } from "lucide-react";

const GroupShipping = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 w-16 h-16 rounded-2xl gradient-hero justify-center mb-6 mx-auto">
            <Users className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Group Shipping Discounts <span className="text-primary">Available</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Smart vendors save more when they ship together. Less cost, same quality, faster delivery.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl border border-border p-8 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Percent className="w-8 h-8 text-primary" />
              <span className="text-4xl md:text-5xl font-black text-primary">Save Up to 40%</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Join other vendors and split shipping costs. You save big, your customers get their goods faster.
            </p>
          </motion.div>

          <a
            href="https://wa.me/2348000000000"
            className="inline-flex items-center gap-2 gradient-cta text-foreground font-bold px-8 py-4 rounded-lg shadow-cta hover:scale-105 transition-transform text-lg"
          >
            Join Group Shipment
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GroupShipping;
