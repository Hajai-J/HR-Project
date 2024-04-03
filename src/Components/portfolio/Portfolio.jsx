import React, { useRef } from "react";
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: "1",
    title: "Human Resource",
    img: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi totam sunt cumque quasi. Facilis, nam? Illum, id odio. Aspernatur numquam quis, tenetur eos praesentium totam doloribus! Modi aliquid rem tempora.",
  },
  {
    id: "2",
    title: "Socil Work",
    img: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi totam sunt cumque quasi. Facilis, nam? Illum, id odio. Aspernatur numquam quis, tenetur eos praesentium totam doloribus! Modi aliquid rem tempora.",
  },
  {
    id: "3",
    title: "LeaderShip",
    img: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi totam sunt cumque quasi. Facilis, nam? Illum, id odio. Aspernatur numquam quis, tenetur eos praesentium totam doloribus! Modi aliquid rem tempora.",
  },
  {
    id: "4",
    title: "Organization Skills",
    img: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi totam sunt cumque quasi. Facilis, nam? Illum, id odio. Aspernatur numquam quis, tenetur eos praesentium totam doloribus! Modi aliquid rem tempora.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container" >
        <div className="wrapper">
          <div className="imageCointainer"  ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textCotainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={items.id} />
      ))}
    </div>
  );
};

export default Portfolio;
