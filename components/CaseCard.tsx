"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CaseCardProps {
  industry: string;
  title: string;
  result: string;
  metric: string;
  index?: number;
}

export default function CaseCard({
  industry,
  title,
  result,
  metric,
  index = 0,
}: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-none hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="text-sm font-semibold text-accent mb-2">{industry}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-4xl font-display font-bold text-primary">{metric}</div>
            <p className="text-text/70">{result}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
