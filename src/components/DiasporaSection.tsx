import { motion } from "framer-motion";
import { Globe, TrendingUp, Heart, ArrowRight } from "lucide-react";

const DiasporaSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Sell to Your People <span className="text-secondary">Abroad</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Nigerians abroad miss home products badly. The demand is HIGH. Smart vendors are already making money weekly — why not you?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Heart,
              title: "They Miss Home",
              desc: "Nigerians in UK, US & Canada crave home food, fashion and cultural items. The emotional connection drives real purchases.",
            },
            {
              icon: TrendingUp,
              title: "High Demand = Big Money",
              desc: "Vendors are making ₦500k–₦2M monthly shipping to diaspora. The market is hot and growing every week.",
            },
            {
              icon: Globe,
              title: "Earn in USD, GBP & CAD",
              desc: "Stop earning only in naira. Your products are worth 3–5x more when sold abroad. Think bigger.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/10 rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-cta mx-auto flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
              <p className="text-primary-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-secondary mb-6">
            "Your people abroad are ready to buy… the question is—are you ready to supply?"
          </p>
          <a
            href="https://wa.me/2348000000000"
            className="inline-flex items-center gap-2 gradient-cta text-foreground font-bold px-8 py-4 rounded-lg shadow-cta hover:scale-105 transition-transform text-lg"
          >
            I'm Ready — Let's Go!
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DiasporaSection;
