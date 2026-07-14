import { motion } from "motion/react";

export default function DefaultPageAnimation({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <motion.div
      className="markdown"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
