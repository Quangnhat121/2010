import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
export default function FinalScene() {
  return (
    <footer className="final-scene section">
      <div className="moon" />
      <div className="stars" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="final-script">With all my love</span>
        <h2>
          Happy Vietnamese
          <br />
          Women’s Day — 20.10
        </h2>
        <p>
          Gửi đến cô gái đặc biệt nhất trong lòng anh,
          <br />
          bằng tất cả sự dịu dàng mà anh có.{" "}
          <Heart size={16} fill="currentColor" />
        </p>
        {/* <button
          className="ghost-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp /> Xem lại món quà
        </button> */}
        <small>Made with love, just for you.</small>
      </motion.div>
    </footer>
  );
}
