import { motion } from "framer-motion";
import { useState } from "react";
const BasicVariants = () => {
  const [animateList, setAnimateList] = useState("");
  const [animateItem, setAnimateItem] = useState("");
  const variants = {
    list: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
    item: {
      hidden: {
        y: -10,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div>
      <h1>Basic Variants</h1>
      <div className="bg-yellow-50">
        <button
          className="bg-red-500 text-white p-3 rounded-xl m-2"
          onClick={() => {
            setAnimateList("hidden");
            setAnimateItem("hidden");
          }}
        >
          hide
        </button>
        <button
          className="bg-red-500 text-white p-3 rounded-xl m-2"
          onClick={() => {
            setAnimateList("visible");
            setAnimateItem("visible");
          }}
        >
          show
        </button>
      </div>
      <div>
        <motion.ul animate={animateList} variants={variants.list}>
          <motion.li animate={animateItem} variants={variants.item}>
            item 1
          </motion.li>
          <motion.li animate={animateItem} variants={variants.item}>
            item 2
          </motion.li>
          <motion.li animate={animateItem} variants={variants.item}>
            item 3
          </motion.li>
          <motion.li animate={animateItem} variants={variants.item}>
            item 4
          </motion.li>
          <motion.li animate={animateItem} variants={variants.item}>
            item 5
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default BasicVariants;
