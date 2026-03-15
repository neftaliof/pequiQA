import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { TreeSection } from "@/components/landing/TreeSection";
import { ThreePillars } from "@/components/landing/ThreePillars";
import { Problems } from "@/components/landing/Problems";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { QualityJourney } from "@/components/landing/QualityJourney";
import { Services } from "@/components/landing/Services";
import { QualityShield } from "@/components/landing/QualityShield";
import { Manifesto } from "@/components/landing/Manifesto";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { ContactForm } from "@/components/landing/ContactForm";
import { FloatingElements } from "@/components/landing/FloatingElements";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Header />
      <main className="relative" style={{ zIndex: 1 }}>
        <FloatingElements />
        <Hero />
        <TreeSection />
        <ThreePillars />
        <Problems />
        <MetricsSection />
        <QualityJourney />
        <Services />
        <QualityShield />
        <Manifesto />

        {/* Cases — Em construção */}
        <section className="relative py-16" style={{ background: '#F4EFE6' }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: '#F2B705', top: '-1px', height: '100px' }}
          />
          <div className="text-center max-w-xl mx-auto px-6">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C8860A' }}>
              Em construção
            </div>
            <h2 className="font-display text-3xl font-bold mb-4 leading-tight" style={{ color: '#0B2F1F' }}>
              Primeiros cases em andamento
            </h2>
            <p className="font-body text-sm leading-relaxed mb-8" style={{ color: '#133A28', opacity: 0.7 }}>
              Estamos construindo nossa história com os primeiros clientes.
              Se você quer fazer parte disso — condições especiais para projetos pioneiros.
            </p>
            <a
              href="https://wa.me/5548988526644?text=Quero%20ser%20um%20dos%20primeiros%20clientes%20da%20Pequi%20QA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg"
              style={{ background: "linear-gradient(135deg, #C8860A, #F0A500)", color: "#0e1a07" }}
            >
              Quero ser pioneiro
            </a>
          </div>
        </section>

        {/* Blog */}
        <section className="relative py-16 sm:py-20" style={{ background: '#0B2F1F' }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: '#F2B705', top: '-1px', height: '100px' }}
          />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 sm:mb-4">
                Conteúdo de qualidade
              </h2>
              <p className="text-lg font-body" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Artigos, guias e insights sobre qualidade de software.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} index={index} />
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button variant="accent" size="lg" asChild>
                <Link href="/blog">Ver todos os artigos</Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactForm />
        <FinalCTA />
      </main>
      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </>
  );
}
