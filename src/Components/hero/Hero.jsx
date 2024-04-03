import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
  }
};

const sliderVariants = {
    initial: {
      x: 0,
     
    },
    animate: {
      x: "-200%",
      transition: {
        repeat:Infinity,
        repeatType:"mirror",
        duration: 20,
        staggerChildren: 0.1,
      },
    }
  };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MADHAVAN HR</motion.h2>
          <motion.h1 variants={textVariants}>
            Social Worker Human Resource
          </motion.h1>
          <motion.div className="button" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVariants} animate="animate" initial="initial">
        Writer Content Creator Influencer LeaderShip
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero1.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
