import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownContent from "@/components/MarkdownContent";
import { getPostBySlug, getAllPosts, formatBlogDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const baseUrl = "https://pequiqa.com.br";
const WHATSAPP_BLOG_URL =
  "https://wa.me/5548988526644?text=Ol%C3%A1!%20Li%20o%20artigo%20e%20gostaria%20de%20conversar.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado - Pequi QA",
    };
  }

  return {
    title: `${post.title} - Blog Pequi QA`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Blog Pequi QA`,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}/`,
      siteName: "Pequi QA",
      locale: "pt_BR",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero — mesmo estilo manifesto/landing */}
        <section
          className="relative py-14 sm:py-20 md:py-24"
          style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: "#F2B705", top: "-1px", height: "80px" }}
          />
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              ← Voltar ao blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {post.category && (
                <span
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                  style={{ background: "#F2B705", color: "#0B2F1F" }}
                >
                  {post.category}
                </span>
              )}
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <Calendar size={16} />
                <span>{formatBlogDate(post.date)}</span>
              </div>
            </div>
            <h1
              className="font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.25rem)" }}
            >
              {post.title}
            </h1>
            <p className="font-body text-lg sm:text-xl" style={{ color: "rgba(255,255,255,0.9)" }}>
              {post.excerpt}
            </p>
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
          />
        </section>

        {/* Conteúdo */}
        <section
          className="py-12 sm:py-16 md:py-20"
          style={{ background: "#F4EFE6" }}
        >
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <article className="py-12 sm:py-16">
              <MarkdownContent content={post.content} />
            </article>
          </div>
        </section>

        {/* CTA — mesmo bloco do manifesto */}
        <section className="relative py-20" style={{ background: "#F4EFE6" }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: "#F2B705", top: "-1px", height: "80px" }}
          />
          <div className="max-w-[600px] mx-auto px-6 sm:px-8 text-center">
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "#0B2F1F" }}
            >
              Gostou do conteúdo?
            </h2>
            <p
              className="font-body mb-8"
              style={{ fontSize: "1.0625rem", color: "#133A28", opacity: 0.85 }}
            >
              Vamos conversar sobre como podemos ajudar sua empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg transition-all hover:opacity-95"
                style={{
                  background: "#F2B705",
                  color: "#0B2F1F",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@pequiqa.com.br?subject=Li um artigo do blog"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg border-2 transition-all hover:opacity-90"
                style={{
                  borderColor: "#F2B705",
                  color: "#0B2F1F",
                }}
              >
                <Mail className="w-5 h-5" />
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
