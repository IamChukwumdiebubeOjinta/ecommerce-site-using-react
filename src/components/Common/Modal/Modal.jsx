import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import React from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: "0.1",
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`modal`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={handleClose} className="w-9 bg-black top-2">
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;