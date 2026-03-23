import { MarkdownRenderer } from "./MardownRenderer";

export default function Paragraph({ text }: { text: string }) {
  return <MarkdownRenderer content={text} />;
}
