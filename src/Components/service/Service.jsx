import React, { useRef } from "react";
import "./Service.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Service = () => {

    const ref =  useRef()
    const isInView = useInView(ref,{margin:"-100px"} )

  return (
    <motion.div
      className="service"
      variants={variants}
      initial="initial"
    //   animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
      <motion.div className="text-container" variants={variants}>
        <p>
          I focus on help your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Origination
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            eligendi at voluptatibus qui laudantium obcaecati facere facilis
            alias, fugiat dolores laboriosam eos recusandae velit sed dicta
            excepturi laborum, autem molestias.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            eligendi at voluptatibus qui laudantium obcaecati facere facilis
            alias, fugiat dolores laboriosam eos recusandae velit sed dicta
            excepturi laborum, autem molestias.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            eligendi at voluptatibus qui laudantium obcaecati facere facilis
            alias, fugiat dolores laboriosam eos recusandae velit sed dicta
            excepturi laborum, autem molestias.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            eligendi at voluptatibus qui laudantium obcaecati facere facilis
            alias, fugiat dolores laboriosam eos recusandae velit sed dicta
            excepturi laborum, autem molestias.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
