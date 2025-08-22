import "../styles/Jadwal.css";
import { motion } from "framer-motion";

const Jadwal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Jadwal</h1>
    </motion.div>
  );
};

export default Jadwal;
