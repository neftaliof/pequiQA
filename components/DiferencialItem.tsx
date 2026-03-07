"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface DiferencialItemProps {
  title: string;
  description: string;
  index?: number;
}

export default function DiferencialItem({
  title,
  description,
  index = 0,
}: DiferencialItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
        <Check className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  );
}
