import React from "react";
import { motion } from "motion/react";

export const Title = ({ title, description }) => {
  return (
    <>
      <motion.h2
        initail={{ opacity: 0, y: 30 }}
        whileInView={{ opacaity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium p-5 text-center"
      >
        {title}
      </motion.h2>
      <motion.p
        initail={{ opacity: 0, y: 20 }}
        whileInView={{ opacaity: 1, y: 0 }}
        transition={{ duration: 0.5,dealy:0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
      >
        {description}
      </motion.p>
    </>
  );
};
