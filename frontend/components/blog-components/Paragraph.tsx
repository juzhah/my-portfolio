import { MarkdownRenderer } from "./MardownRenderer";

export default function Paragraph({ text }: { text: string }) {
  return (
    <div className="w-3/4 mx-auto ">
      <MarkdownRenderer content={text} />
    </div>
  );
}
