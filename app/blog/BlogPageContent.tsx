"use client";

import Link from "next/link";
import PostCard from "@/components/PostCard";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
};

export function BlogPageContent({ posts }: { posts: Post[] }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 sm:py-24"
        style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.2 }}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="font-body text-white/80 text-lg sm:text-xl"
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Artigos, guias e insights sobre qualidade de software.
          </motion.p>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>

      {/* Lista de posts */}
      <section className="relative py-16 sm:py-20" style={{ background: "#F4EFE6" }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post, index) => (
                  <PostCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                    index={index}
                  />
                ))}
              </div>

              <div
                className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto text-center"
                style={{
                  background: "rgba(11, 47, 31, 0.04)",
                  border: "1px solid rgba(242, 183, 5, 0.15)",
                }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: "1rem", color: "#133A28", opacity: 0.85, lineHeight: 1.7 }}
                >
                  Estamos preparando mais conteúdo. Em breve: automação de testes, métricas de
                  qualidade e boas práticas de QA.
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-16 max-w-xl mx-auto">
              <p
                className="font-body mb-4"
                style={{ fontSize: "1.125rem", color: "#133A28", opacity: 0.8 }}
              >
                Nenhum artigo publicado ainda. Em breve teremos conteúdo de qualidade para você.
              </p>
              <p className="font-body text-sm" style={{ color: "#133A28", opacity: 0.6 }}>
                Temas: automação de testes, métricas de qualidade, processos de QA.
              </p>
            </div>
          )}
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>
    </>
  );
}
