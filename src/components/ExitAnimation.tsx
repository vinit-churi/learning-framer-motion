import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <motion.div
      layout
      className="mx-auto bg-red-50 flex justify-center flex-col items-center p-10"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="h-40 w-40 rounded-lg bg-yellow-200 flex items-center justify-center"
          >
            Visible
          </motion.h1>
        )}
      </AnimatePresence>
      <motion.button
        layout
        className="px-5 py-2 rounded-lg bg-slate-500 text-yellow-200 mt-5"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle presence
      </motion.button>
    </motion.div>
  );
};

export default ExitAnimation;
