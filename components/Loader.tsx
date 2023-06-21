import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.7 }}
        className="w-screen fixed h-screen bg-black"
      >
        <h4>top</h4>
      </motion.div>
    </div>
  );
}
