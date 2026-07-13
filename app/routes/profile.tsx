import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";
import { motion } from "motion/react";

export default function Profile() {
  return (
    <motion.div
      className="markdown"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Markdown>{myMarkdownFile}</Markdown>
    </motion.div>
  );
}
