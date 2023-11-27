import { motion } from "framer-motion";

const KeyFrames = () => {
  return (
    <div>
      <h1>KeyFrames</h1>
      <motion.div
        className="w-8 h-8 rounded-full bg-yellow-200"
        animate={{ x: [0, 100, 0], y: [0, 100, 200, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],

          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div
        className="bg-red-200 w-8 h-8 rounded-full"
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        whileHover={{ scale: [null, 1.5] }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default KeyFrames;
