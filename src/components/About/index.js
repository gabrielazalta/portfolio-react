import React from 'react'
import profile from "../../assets/images/profile.jpg";
import certificate from "../../assets/images/certificate.JPG";
import badge from "../../assets/images/badge.JPG";

function About() {
  return (
    <section>
    <div className="row m-4 pt-5">
      <div className="col-3"></div>
      <div className="col-6 text-center mb-3">
          <h1 className="sub-title">about me</h1>
      </div>
      <div className="col-3"></div>
    </div>
    <div className="container shadow">
      <div className="row">
      <div>
        <p className="m-4 p-4 col-11 text-center bold-text">
            Hello! My name is Gabriela Zalta and I am a dynamic full-stack web developer currently seeking opportunities in front-end development.
        </p>
      </div>
        <div className="col-5">
            <img src={profile} className="img-fluid rounded m-4 p-4" style={{ width: "100%" }} alt="cover" />
        </div>
        <div class="col-6">
          <div class="row">
            <p className="m-4 p-4 col-12 intro-text">
              I am from Bogota, Colombia, I graduated from the University of Central Florida in 2019 with a degree in Integrated Business and a minor in International Business. After working in the business industry for a while, I realized that I wanted to shift gears a little and pursue my dream of becoming a programmer! As I learn more about web development and design, I have become increasingly excited about reaching my goals and to see what my future holds.
            </p>
          </div>
          <p className="m-4 p-4 col intro-text">
            Skilled in: HTML, CSS, Javascript, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack
          </p>
        </div>
      </div>

      <div className="row pb-4">
        <div className="col-1"></div>
      <div className="col-5">
            <img src={certificate} className="img-fluid rounded m-2 p-2" style={{ width: "95%" }} alt="certificate" />
        </div>
        <div className="col-5" href="https://api.badgr.io/public/assertions/827jriF-SVykUt63GUDc_w?identity__email=gzalta96%40gmail.com">
            <img src={badge} className="img-fluid rounded m-2 p-2" style={{ width: "75%" }} alt="badge" />
        </div>
      </div>

    </div> 
    </section>
  )
}

export default About;