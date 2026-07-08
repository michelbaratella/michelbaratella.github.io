import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";

export default function Profile() {
  return (
    <div className="markdown">
      <Markdown>{myMarkdownFile}</Markdown>
    </div>
  );
}
