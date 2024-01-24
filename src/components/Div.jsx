"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";

const Div = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: easeIn }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Div;
