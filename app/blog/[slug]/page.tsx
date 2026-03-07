import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

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
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1 bg-accent text-white rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar size={16} />
                  <span className="text-sm">{post.date}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-white/90">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-primary
                  prose-p:text-text/80 prose-p:leading-relaxed
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-primary prose-strong:font-semibold
                  prose-ul:text-text/80 prose-ol:text-text/80
                  prose-li:marker:text-accent
                  prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-primary prose-pre:text-white
                  prose-blockquote:border-l-accent prose-blockquote:text-text/70 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Gostou do conteúdo?"
          subtitle="Vamos conversar sobre como podemos ajudar sua empresa."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Li o artigo e gostaria de conversar.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:jenafreelabs@gmail.com",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
