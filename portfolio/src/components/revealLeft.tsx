import { motion } from "motion/react";

function RevealLeft({ children }: { children: React.ReactNode}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default RevealLeft