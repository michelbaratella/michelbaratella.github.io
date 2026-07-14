import Markdown from "react-markdown";
import useIsDesktop from "~/hooks/useIsDesktop";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { DefaultSectionProps } from "~/types/DefaultSectionProps";

export default function Card({ section, index = 0 }: DefaultSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // Determine the starting and ending scale based on whether it's desktop or mobile
  const startScale = isDesktop ? 0.5 : 0.8;
  const endScale = 1;
  const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);

  // The opacity is always from 0 to 1, regardless of desktop or mobile
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // The y-axis translation is always from 200px to 0px, regardless of desktop or mobile
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);

  // The x-axis translation is conditional based on whether it's desktop or mobile
  const startX = isDesktop ? (isEven ? 250 : -250) : 0;
  const endX = isDesktop ? (isEven ? -250 : 250) : 0;
  const x = useTransform(scrollYProgress, [0, 1], [startX, endX]);

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ scale, opacity, y, x }}
        id={`section-${index}`}
        className={`bg-gray-100 w-full max-w-lg rounded-2xl p-6 m-6 shadow-2xl transition-shadow duration-300 hover:shadow-md mx-auto
        ${isEven ? "md:-translate-x-8" : "md:translate-x-8"}`}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 markdown">
          <Markdown>{section.header?.raw}</Markdown>
        </span>
        <div className="mt-3 text-sm leading-relaxed text-gray-800 markdown">
          <Markdown>{section.body}</Markdown>
        </div>
      </motion.div>
    </>
  );
}
