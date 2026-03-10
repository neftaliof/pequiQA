import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div
      className={`prose prose-lg max-w-none
        prose-headings:font-display prose-headings:font-bold prose-headings:text-primary
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:text-text/80 prose-p:mb-8 prose-p:leading-loose
        prose-h2:mt-16 prose-h2:mb-6
        prose-h3:mt-10 prose-h3:mb-4
        prose-ul:my-8 prose-ul:space-y-2 prose-ul:text-text/80
        prose-ol:my-8 prose-ol:space-y-2 prose-ol:text-text/80
        prose-li:mb-3 prose-li:leading-relaxed prose-li:marker:text-accent
        prose-hr:border-[#F4F0E8] prose-hr:my-12
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-primary prose-strong:font-semibold
        prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
        prose-pre:bg-primary prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg
        prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:text-text/70 prose-blockquote:italic prose-blockquote:pl-6
        prose-table:w-full prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden
        prose-th:bg-accent/20 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-primary
        prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-accent/20 prose-td:text-text/80
        prose-thead:bg-accent/10
        ${className}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
