import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            [DineEase] is a cozy dining spot in [Mumbai], known for its delicious [Cuisine Type] dishes and warm, welcoming atmosphere. We’re passionate about great food, excellent service, and creating memorable moments for every guest. Whether it’s a casual meal or a special occasion, we’ve got you covered. Book your table easily with our quick reservation system and enjoy a seamless dining experience.  
            </p>
            <Link to="/ourmenu">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
