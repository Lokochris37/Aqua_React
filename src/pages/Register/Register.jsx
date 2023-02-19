import React from "react";
import { RegisterForm } from "./components/RegisterForm";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
 
function Register(){
    const location = useLocation();
    
    return (
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <RegisterForm />
      </motion.div>
    );
}

export {Register}