import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import picture from "../../assets/1.jpg";

import "./moreInfo.css";
import { Link } from "react-router-dom";

const MoreInfo = () => {
  const { scrollYProgress } = useScroll();
  const first = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const second = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="info">
      <div className="back__button">
        <Link to="/">
          <i class="uil uil-angle-left-b"></i>
        </Link>
      </div>
      <div className="info__container">
        <div className="info__me">
          <div className="info__more">
            <img className="info__picture" src={picture} alt="" />
            <span>
              I am a AFRIZA using a JavaScript tech stack, namely
              MERN stack (MongoDB, Express JS, React JS, and Node JS). I also
              have an interest in user interface and user experience, have some
              experience in design and illustration.
            </span>
          </div>
          <a href="#info__contact">
            Feel free to contact me <i class="uil uil-arrow-up-right"></i>
          </a>
          <div className="info__sosmed">
            <span>Also available on</span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6289618714018/?text=Hello%20Eja"
            >
              WhatsApp <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/ahmdfrizza/"
            >
              Instagram <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
            >
              LinkedIn <i class="uil uil-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <div className="info__achieve">
          <div className="info__item">
            <h1></h1>
            <div className="info__detail">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
              >
                TESTIMONI{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
              >
                ABOUT{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="info__item">
            <h1>Experience</h1>
            <div className="info__detail">
              <a target="_blank" rel="noreferrer noopener" href="">
                JOKI MOBILE LEGENDS - WEB DEVELOPER{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info__typography">
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: first }}
            className="info__typo"
          >
            contact <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> -
          </motion.h1>
        </div>
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: second }}
            className="info__typo"
          >
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
