import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";
import { motion } from "motion/react";

// Helper function to generate a stable slug from section content
function getSectionKey(content: string, fallbackIndex: number): string {
  const headingMatch = content.match(/^#+\s+(.+)$/m);

  if (headingMatch && headingMatch[1]) {
    return headingMatch[1]
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  // Fallback: If no heading exists, use a safe slice of the text
  return `section-${fallbackIndex}-${content.slice(0, 15).trim().replace(/\s+/g, "-")}`;
}

export default function Home() {
  const cleanedFile = myMarkdownFile.replace(/^[ \t]*-{3,}[ \t]*$/gm, "");
  const sections = cleanedFile.split(/\n(?=#+\s)/);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <motion.div
      className="markdown"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {sections.map((sectionContent, index) => {
        const sectionKey = getSectionKey(sectionContent, index);

        return (
          <motion.section
            key={sectionKey}
            variants={sectionVariants}
            className="markdown"
          >
            <Markdown>{sectionContent}</Markdown>
          </motion.section>
        );
      })}
    </motion.div>
  );
}
