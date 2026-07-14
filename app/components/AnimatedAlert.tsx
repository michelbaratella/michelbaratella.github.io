import { motion, AnimatePresence } from "framer-motion";
import { Alert } from "@mantine/core";
import { CopyIcon } from "@phosphor-icons/react";

export default function AnimatedAlert({ isOn }: { readonly isOn: boolean }) {
  return (
    <AnimatePresence>
      {isOn && (
        <motion.div
          className="fixed ml-4"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <Alert
            variant="light"
            color="green"
            title="Email copied!"
            icon={<CopyIcon size={42} />}
            className="fixed"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
