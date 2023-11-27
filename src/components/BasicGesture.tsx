import { motion, useAnimation } from "framer-motion";

const BasicGesture = () => {
  let initialX = 0;

  const handleDragStart = (event, info) => {
    // Save the initial X position when dragging starts
    initialX = info.point.x;
  };
  const handleDrag = (event, info) => {
    // Calculate the distance moved since the start of dragging
    const distance = info.point.x - initialX;

    // Determine the direction based on the distance
    const direction = distance > 0 ? 1 : distance < 0 ? -1 : 0;

    // Log the drag information
    // console.log("Drag Distance:", distance);
    console.log("Swipe Direction:", direction);
  };

  return (
    <motion.div
      drag="false" // Disable dragging
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      whileHover={{ scale: 1.1 }}
      style={{ width: "300px", height: "300px", backgroundColor: "blue" }}
    >
      Swipe me!
    </motion.div>
  );
};

export default BasicGesture;
