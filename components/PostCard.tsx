"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  index?: number;
}

export default function PostCard({
  title,
  excerpt,
  date,
  slug,
  index = 0,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-none hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-text/60 mb-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text/70 mb-4 line-clamp-3">{excerpt}</p>
          <Button variant="link" asChild className="p-0">
            <Link href={`/blog/${slug}`}>Ler mais →</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
