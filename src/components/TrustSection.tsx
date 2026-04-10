import { motion } from "framer-motion";
import { Eye, Shield, Video, UserCheck, MapPin } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";

const trustItems = [
  { icon: MapPin, text: "Real-time shipment tracking on every package" },
  { icon: Shield, text: "Transparent pricing — no hidden charges, ever" },
  { icon: Video, text: "Proof videos & live warehouse updates" },
  { icon: UserCheck, text: "Face of the brand — real people, real accountability" },
  { icon: Eye, text: "\"What you see is what we ship\" — always" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Why Smart Vendors Trust{" "}
              <span className="text-primary">Shipplix</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We know you've heard stories. That's why we show <strong className="text-foreground">everything</strong>.
            </p>

            <div className="space-y-4">
              {trustItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={warehouseImg}
              alt="Shipplix warehouse operations"
              loading="lazy"
              width={1280}
              height={640}
              className="rounded-2xl shadow-hero w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">Our Lagos warehouse</p>
              <p className="font-bold text-foreground">Packaging your goods with care, every single time.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
