import React from 'react'
import profile from "../../assets/images/profile.jpg";

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
        <div className="col-1"></div>
        <div className="col-4">
            <img src={profile} className="img-fluid rounded m-4 p-4" style={{ width: "100%" }} alt="cover" />
        </div>
        <div class="col-6">
          <div class="row">
            <p className="m-4 p-4 col-12 intro-text">
              Hello! My name is Gabriela Zalta, I'm from Bogota, Colombia and I am a dynamic full-stack web developer currently seeking opportunities in front-end development.  I graduated from the University of Central Florida in 2019 with a degree in Integrated Business and a minor in International Business. After working in the business industry for a while, I realized that I wanted to shift gears a little and pursue my dream of becoming a programmer! As I learn more about web development and design, I have become increasingly excited about reaching my goals and to see what my future holds.
            </p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div> 
    </section>
  )
}

export default About;