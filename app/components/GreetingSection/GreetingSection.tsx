import Markdown from "react-markdown";
import type { DefaultSectionProps } from "~/types/DefaultSectionProps";

export default function GreetingSection({ section }: DefaultSectionProps) {
  return (
    <div className="markdown w-full h-[100vh] flex flex-col text-center justify-center items-center gap-[10vh]">
      <Markdown>{section.body}</Markdown>
    </div>
  );
}
