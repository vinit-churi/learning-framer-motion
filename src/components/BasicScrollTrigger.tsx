import { motion } from "framer-motion";
const BasicScrollTrigger = () => {
  return (
    <div className="bg-yellow-50 w-full text-center">
      <div className="min-h-screen">
        empty space to see the scroll animation in action
      </div>
      <h2>BasicScrollTrigger</h2>
      <div className="mt-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="h-28 w-28 rounded-xl bg-lime-200 mx-auto"
        ></motion.div>
      </div>
    </div>
  );
};

export default BasicScrollTrigger;
