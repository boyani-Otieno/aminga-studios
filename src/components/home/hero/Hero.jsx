import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import Heading from "../../common/Heading";
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
          <motion.div variants={textVariants}>
            <Heading
              title={
                <Typewriter
                  words={['Welcome to Aminga Studios!']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              }
              subtitle='Where we are building your dreams.'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
