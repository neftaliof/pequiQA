import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Pequi QA",
  description: "Artigos, guias e insights sobre qualidade de software, testes e boas práticas de QA.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = ["Todos", "Processos", "Automação", "Carreira", "Mercado", "Ferramentas"];

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-primary py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
                Blog
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                Artigos, guias e insights sobre qualidade de software.
              </p>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-6 sm:py-8 bg-background-alt border-b border-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-body font-semibold text-sm sm:text-base transition-colors ${
                    category === "Todos"
                      ? "bg-accent text-white"
                      : "bg-white text-text/70 hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
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

                <div className="text-center mt-10 sm:mt-12 p-6 sm:p-8 bg-background-alt rounded-lg max-w-2xl mx-auto">
                  <p className="text-base sm:text-lg text-text/70">
                    Estamos preparando mais conteúdo de qualidade para você. Em breve teremos novos
                    artigos sobre automação de testes, métricas de qualidade e muito mais.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-16 max-w-2xl mx-auto">
                <p className="text-lg text-text/70 mb-6">
                  Nenhum artigo publicado ainda. Em breve teremos conteúdo de qualidade para você.
                </p>
                <p className="text-sm text-text/60">
                  Temas: automação de testes, métricas de qualidade, processos de QA e muito mais.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
