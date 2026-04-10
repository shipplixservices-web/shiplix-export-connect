import { motion } from "framer-motion";
import { PackageCheck, FileText, Plane, DoorOpen } from "lucide-react";

const steps = [
  {
    icon: PackageCheck,
    num: "1",
    title: "Pickup or Drop-off",
    desc: "Bring your goods to our warehouse or we pick up from you. No wahala.",
    note: "We handle everything",
  },
  {
    icon: FileText,
    num: "2",
    title: "Packaging & Documentation",
    desc: "We package properly and handle all customs paperwork for you.",
    note: "No stress for you",
  },
  {
    icon: Plane,
    num: "3",
    title: "Safe Air Freight Shipping",
    desc: "Your goods fly safely to the UK, US, or Canada with full tracking.",
    note: "Tracked and secure",
  },
  {
    icon: DoorOpen,
    num: "4",
    title: "Delivery to Doorstep",
    desc: "We deliver straight to your customer's or family's door abroad.",
    note: "Door-to-door delivery",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-trust">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            How We Make Export <span className="text-primary">Easy</span>
          </h2>
          <p className="text-lg text-muted-foreground">Four simple steps. Zero headache.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-2xl gradient-hero mx-auto flex items-center justify-center mb-5">
                <step.icon className="w-8 h-8 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-cta text-foreground text-sm font-black flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{step.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                ✅ {step.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
