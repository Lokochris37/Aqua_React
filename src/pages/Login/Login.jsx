import React from "react";
import { LoginForm } from "./components/LoginForm";
import { AnimatePresence, motion } from "framer-motion";
import {useLocation} from "react-router-dom"
 
function Login(){
    const location = useLocation();
    return (
      <motion.div 
      key={location.pathname}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <AnimatePresence >
          <LoginForm />
        </AnimatePresence>
      </motion.div>
    );
}

export {Login}