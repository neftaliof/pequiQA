import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import MarkdownContent from "@/components/MarkdownContent";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const baseUrl = "https://pequiqa.com.br";

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
        {/* Hero */}
        <section className="bg-primary py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm font-medium mb-6 transition-colors"
              >
                ← Voltar ao blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="px-3 py-1 bg-accent text-white rounded-full text-xs sm:text-sm font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <article className="max-w-4xl mx-auto py-20">
              <MarkdownContent content={post.content} />
            </article>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Gostou do conteúdo?"
          subtitle="Vamos conversar sobre como posso ajudar sua empresa."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Li o artigo e gostaria de conversar.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
