import { motion } from "framer-motion";
import foodImg from "@/assets/foodstuff.jpg";
import fashionImg from "@/assets/fashion.jpg";
import heritageImg from "@/assets/heritage.jpg";

const categories = [
  {
    emoji: "🍲",
    title: "Foodstuff",
    desc: "Garri, egusi, palm oil, spices, dried fish, ogbono, crayfish & more",
    image: foodImg,
  },
  {
    emoji: "👗",
    title: "Fashion",
    desc: "Ankara, wigs, native wear, aso-oke, beads & accessories",
    image: fashionImg,
  },
  {
    emoji: "🎭",
    title: "Heritage Goods",
    desc: "Cultural items, handmade crafts, art pieces & souvenirs",
    image: heritageImg,
  },
  {
    emoji: "📦",
    title: "General Essentials",
    desc: "If people abroad are buying it, we can ship it.",
    image: null,
  },
];

const ExportSection = () => {
  return (
    <section id="export" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            What You Can <span className="text-primary">Export</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If people abroad dey buy am, we go ship am. Simple.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-lg transition-shadow"
            >
              {cat.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 gradient-hero flex items-center justify-center">
                  <span className="text-6xl">{cat.emoji}</span>
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
