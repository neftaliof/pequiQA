import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Pequi QA",
  description: "Artigos, guias e insights sobre qualidade de software, testes e boas práticas de QA.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Como estruturar um plano de testes eficiente",
      excerpt:
        "Aprenda a criar um plano de testes que realmente funciona, com templates práticos e exemplos reais de empresas que implementaram com sucesso.",
      date: "15 de março, 2024",
      slug: "como-estruturar-plano-de-testes",
      category: "Processos",
    },
    {
      title: "O que é body shopping em QA e por que evitar",
      excerpt:
        "Entenda os riscos do modelo de body shopping, como identificar quando você está sendo vítima e como escolher uma consultoria transparente.",
      date: "10 de março, 2024",
      slug: "o-que-e-body-shopping-em-qa",
      category: "Mercado",
    },
    {
      title: "Como transformar profissionais de suporte em QAs",
      excerpt:
        "Um guia completo para criar um programa de transição de carreira estruturado, com cases reais e resultados mensuráveis.",
      date: "5 de março, 2024",
      slug: "transformar-suporte-em-qa",
      category: "Carreira",
    },
  ];

  const categories = ["Todos", "Processos", "Automação", "Carreira", "Mercado", "Ferramentas"];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Blog
              </h1>
              <p className="text-xl text-white/90">
                Artigos, guias e insights sobre qualidade de software.
              </p>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-8 bg-background-alt border-b border-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-body font-semibold transition-colors ${
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} index={index} />
              ))}
            </div>

            {/* Mensagem temporária */}
            <div className="text-center mt-12 p-8 bg-background-alt rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-text/70">
                Estamos preparando mais conteúdo de qualidade para você. Em breve teremos novos
                artigos sobre automação de testes, métricas de qualidade e muito mais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
