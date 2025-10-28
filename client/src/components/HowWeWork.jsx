import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: " Discovery Call",
    desc: "We start with understanding your brand, goals, audience, and current challenges — setting a clear vision for success.",
    icon: "/images/chat.png",
    className:
      "md:col-span-2 bg-gradient-to-r from-black/60 to-black/80",
      
  },
  {
    id: 2,
    title: " Strategy & Proposal",
    desc: "Based on your goals, our team prepares a clear strategy — defining deliverables, timelines, and a transparent pricing plan.",
    icon: "/images/strat.png",
    className:
      "bg-gradient-to-r from-black/50 to-black/80",
  },
  {
    id: 3,
    title: " Creative & Execution",
    desc: "Once approved, we move to designing visuals, building your digital assets, and launching campaigns with precision.",
    icon: "/images/create.png",
    className:
      "bg-gradient-to-r from-black/60 to-black/80",
  },
  {
    id: 4,
    title: " Review & Feedback",
    desc: "We stay transparent during every stage. You review progress, share feedback, and we refine until it perfectly aligns with your vision.",
    icon: "/images/rev.png",
    className:
      "md:col-span-2 bg-gradient-to-r from-black/50 to-black/80",
  },
  {
    id: 5,
    title: " Launch & Ongoing Support",
    desc: "After launch, we monitor performance, provide insights, and help your brand grow through continuous improvements.",
    icon: "/images/lun.png",
    className:
      "md:col-span-3 bg-gradient-to-r from-black/60 to-black/90",
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 px-6 md:px-12 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-hero text-center mb-6"
      >
        How <span className="text-red-600">We Work</span>
      </motion.h2>

      <p className="text-gray-600 max-w-2xl text-center mb-16">
        From the first conversation to project launch, our process ensures every idea 
        is understood, every step is transparent, and every project delivers results.
      </p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className={`rounded-2xl overflow-hidden relative p-6 flex flex-col justify-center items-start shadow-md ${step.className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4"><img src={step.icon} className="h-[100px]" alt="" /></div>
            <h3 className="text-2xl font-hero mb-2 text-[#000000fe]">{step.title}</h3>
            <p className="text-gray-200 leading-relaxed">{step.desc}</p>
           <div className="work absolute h-full w-full -z-5 inset-0"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
