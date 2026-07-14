import { motion, type Variants } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
} as const;

export const MotionSettings = ({
  variants,
  children,
}: {
  variants: Variants;
  children: React.ReactNode;
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    exit="hidden"
    whileInView="show"
  >
    {children}
  </motion.div>
);
