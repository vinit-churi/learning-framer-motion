import { useState } from "react";
import { motion } from "framer-motion";
const LayoutAnimation = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOn((prev) => !prev)}
        className={`bg-red-200 h-14 w-24 rounded-full flex items-center ${
          isOn ? "justify-end" : "justify-start"
        }`}
      >
        <motion.div
          transition={{ duration: 0.1 }}
          layout
          className="bg-yellow-200 rounded-full h-12 w-12 mx-1"
        ></motion.div>
      </div>
    </div>
  );
};

export default LayoutAnimation;
