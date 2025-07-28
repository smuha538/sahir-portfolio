import { motion } from "motion/react";
import type React from "react";

function RevealUp({ children }: { children: React.ReactNode}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 75 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default RevealUp