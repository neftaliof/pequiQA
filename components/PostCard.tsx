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
  category?: string;
  index?: number;
}

export default function PostCard({
  title,
  excerpt,
  date,
  slug,
  category,
  index = 0,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-none hover:shadow-lg transition-shadow overflow-hidden">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {category && (
              <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                {category}
              </span>
            )}
            <div className="flex items-center gap-2 text-sm text-text/60">
              <Calendar size={14} className="flex-shrink-0" />
              <span>{date}</span>
            </div>
          </div>
          <CardTitle className="text-lg sm:text-xl leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
          <p className="text-text/70 mb-4 line-clamp-3 text-sm sm:text-base">{excerpt}</p>
          <Button variant="link" asChild className="p-0 h-auto font-semibold">
            <Link href={`/blog/${slug}`}>Ler mais →</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
