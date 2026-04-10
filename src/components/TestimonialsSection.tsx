import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha B.",
    location: "Lagos → London",
    text: "I sent my first package to the UK and everything arrived perfectly. I was skeptical at first, but Shipplix showed me proof at every stage. Now I ship every week!",
    rating: 5,
  },
  {
    name: "Emeka O.",
    location: "Onitsha → Houston",
    text: "I was scared at first — you know how these things go in Nigeria. But they showed me everything step by step. My customers in Houston are very happy.",
    rating: 5,
  },
  {
    name: "Funke A.",
    location: "Ibadan → Toronto",
    text: "I sell ankara and native wear to Nigerians in Canada. Since I started using Shipplix, my income has tripled. No stories, no drama — just delivery.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Vendor Wins from Nigeria to the <span className="text-primary">World</span>
          </h2>
          <p className="text-lg text-muted-foreground">Real vendors. Real results. Real money.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
