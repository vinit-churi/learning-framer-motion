import { useMotionValue, useTransform, motion } from "framer-motion";

const MotionValue = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div
      className="h-28 w-28 rounded-lg bg-purple-200"
      drag="x"
      style={{ x, opacity }}
    />
  );
};

export default MotionValue;
