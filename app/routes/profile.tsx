import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";
import DefaultPageAnimation from "~/components/DefaultPageAnimation";

export default function Profile() {
  return (
    <DefaultPageAnimation>
      <Markdown>{myMarkdownFile}</Markdown>
    </DefaultPageAnimation>
  );
}
