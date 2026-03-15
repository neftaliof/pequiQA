"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
}

export default function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-gradient-to-br from-secondary to-accent border-none text-white">
        <CardContent className="p-4 sm:p-6 text-center">
          <div className="text-3xl sm:text-4xl font-display font-bold mb-1 sm:mb-2">{value}</div>
          <div className="text-sm font-body">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
