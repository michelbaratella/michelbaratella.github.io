import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";
import { motion } from "motion/react";

export default function Home() {
  const cleanedFile = myMarkdownFile.replace(/^\s*-{3,}\s*$/gm, "");
  const sections = cleanedFile.split(/\n(?=#+\s)/);

  // 1. Parent variants controlling the stagger orchestrations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        // This coordinates child animations, starting each one exactly 1s apart
        staggerChildren: 0.5,
      },
    },
    exit: { opacity: 0 },
  };

  // 2. Child variants (no need to specify delays here!)
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
      animate="animate" // Triggers the cascade
      exit="exit"
    >
      {sections.map((sectionContent, index) => (
        // Children inherit 'initial' and 'animate' states automatically from the parent
        <motion.section
          key={index}
          variants={sectionVariants}
          className="markdown"
        >
          {/* add custom component here "card" to render styled sections */}
          <Markdown>{sectionContent}</Markdown>
        </motion.section>
      ))}
    </motion.div>
  );
}
