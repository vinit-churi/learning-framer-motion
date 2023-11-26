import { useState } from "react";
import { motion } from "framer-motion";
const BasicMotionTransitions = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  return (
    <div className="bg-yellow-50 rounded-xl p-10 flex gap-6">
      <motion.div
        animate={{ x, y, rotate }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ left: -0, right: 300, top: -0, bottom: 200 }}
        className="border-red-600 border-dotted border-2 rounded-xl h-60 w-60"
      ></motion.div>
      <div>
        <h1>controls</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="x">X</label>
            <input
              min={-200}
              max={175}
              id="x"
              type="range"
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
            />
            <p>{x}</p>
          </div>
          <div>
            <label htmlFor="Y">Y</label>
            <input
              min={-200}
              max={175}
              id="Y"
              type="range"
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
            />
            <p>{y}</p>
          </div>
          <div>
            <label htmlFor="rotate">Rotate</label>
            <input
              min={-180}
              max={180}
              id="rotate"
              type="range"
              value={rotate}
              onChange={(e) => setRotate(Number(e.target.value))}
            />
            <p>{rotate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicMotionTransitions;
