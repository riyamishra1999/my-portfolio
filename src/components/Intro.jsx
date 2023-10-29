import React from "react";
import Styles from "../styles/Intro.module.css";
import riya from "../../src/assets/riya.png";
import { Link } from "react-scroll";
import hireme from "../../src/assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro" className={Styles.intro}>
      <div className={Styles.introContent}>
        <span className={Styles.hello}>Hello,</span>
        <span className={Styles.introText}>
          I'm
          <span className={Styles.introName}> Riya </span> <br /> I'm a Website
          Developer
        </span>
        <p className={Styles.introPara}>
          I am a skilled and passionate web developer with experience in
          creating visually appealing and <br />
          friendly website. Explore my Portfolio to know about me more.
        </p>
        <Link>
          {" "}
          <button className={Styles.btn}>
            <img src={hireme} alt="????????" className={Styles.hireImg} /> Hire
            Me!
          </button>
        </Link>
      </div>

      <img src={riya} alt="profile" height={200}  />
    </section>
  );
};

export default Intro;
