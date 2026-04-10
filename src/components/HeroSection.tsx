import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-vendor.jpg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
            🔥 Weekly shipments filling fast — Book your spot now!
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-primary-foreground mb-6">
              Turn Your Nigerian Products Into{" "}
              <span className="text-secondary">Pounds, Dollars & Canadian Cash.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl">
              We help African vendors ship food, fashion & cultural goods from Nigeria to the UK, US & Canada—safe, fast, and fully handled.
            </p>
            <p className="text-secondary font-semibold text-base mb-8">
              ⏰ Every week you delay, someone else is taking your market abroad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 gradient-cta text-foreground font-bold px-8 py-4 rounded-lg shadow-cta hover:scale-105 transition-transform text-lg animate-pulse-glow"
              >
                Start My First Shipment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">✅ No hidden charges</span>
              <span className="flex items-center gap-2">✅ Real-time tracking</span>
              <span className="flex items-center gap-2">✅ Door-to-door</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImg}
                alt="Nigerian vendor with export packages"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4"
            >
              <p className="text-sm text-muted-foreground">Vendors shipping weekly</p>
              <p className="text-2xl font-black text-primary">500+</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 bg-secondary rounded-xl shadow-card p-4"
            >
              <p className="text-sm text-secondary-foreground font-semibold">🇬🇧 🇺🇸 🇨🇦</p>
              <p className="text-lg font-black text-secondary-foreground">3 Countries</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-12"
        >
          <a href="#export" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
