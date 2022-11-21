import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about section">
        <div className="about__container container">
          <p className="aboutLeft">
            <img src="/about.jpg" alt="" className="about__img" />
          </p>
          <div className="aboutRight">
            <h1 className="about__title section__title ">Our Story</h1>
            <p className="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
