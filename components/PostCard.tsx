"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { formatBlogDate } from "@/lib/formatBlogDate";

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
    <article
      className="h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(11, 47, 31, 0.12)",
      }}
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {category && (
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(242, 183, 5, 0.2)", color: "#0B2F1F" }}
            >
              {category}
            </span>
          )}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "#133A28", opacity: 0.65 }}
          >
            <Calendar size={14} className="flex-shrink-0" />
            <span>{formatBlogDate(date)}</span>
          </div>
        </div>
        <h2
          className="font-display font-bold text-lg sm:text-xl leading-tight mb-2"
          style={{ color: "#0B2F1F" }}
        >
          {title}
        </h2>
        <p
          className="font-body flex-1 line-clamp-3 text-sm sm:text-base mb-4"
          style={{ color: "#133A28", opacity: 0.8, lineHeight: 1.6 }}
        >
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="font-body font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-80"
          style={{ color: "#B8860B" }}
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
}
