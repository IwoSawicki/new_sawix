import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        // exit={{ height: "100%" }}
        className="w-screen fixed h-screen bg-black"
      ></motion.div>
    </div>
  );
}
