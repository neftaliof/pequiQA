"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Settings, Users, FileSearch, GraduationCap, TrendingUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  index?: number;
}

const iconMap = {
  Settings,
  Users,
  FileSearch,
  GraduationCap,
  TrendingUp,
};

export default function ServiceCard({
  title,
  description,
  iconName,
  href,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Settings;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow bg-white border-none">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text/70 mb-4">{description}</p>
          <Button variant="outline" asChild>
            <Link href={href}>Saiba mais</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
