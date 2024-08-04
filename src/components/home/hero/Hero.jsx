import React from "react";
// import { GiInspiration } from "react-icons/gi";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='hero'>
      <div className='container'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Heading title='Welcome to Aminga Studios!' subtitle='Where we are building your dreams.' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
