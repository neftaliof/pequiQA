import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPageContent } from "./BlogPageContent";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Blog - Pequi QA",
  description: "Artigos, guias e insights sobre qualidade de software, testes e boas práticas de QA.",
  openGraph: {
    title: "Blog - Pequi QA",
    description: "Artigos sobre QA, testes, automação e boas práticas de qualidade de software.",
    url: `${baseUrl}/blog/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <BlogPageContent posts={posts} />
      </main>
      <Footer />
    </>
  );
}
