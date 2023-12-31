import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsOfMotion = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      <motion.button layout onClick={() => setVisibility((prev) => !prev)}>
        hide/show
      </motion.button>
      <AnimatePresence>
        {visibility && (
          <>
            {/* <motion.div
              initial={{ rotate: "0deg", scale: 0 }}
              animate={{ rotate: "180deg", scale: 1 }}
              transition={{ duration: 0.4, ease: "easeIn", infinite: true }}
              exit={{ rotate: "0deg", scale: 0 }}
              className="bg-black h-96 w-96"
            ></motion.div> */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeIn", infinite: true }}
              exit={{ opacity: 0, scale: 0 }}
              className="bg-black h-96 w-96"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BasicsOfMotion;
