import React from 'react'
import profile from "../../assets/images/profile.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 className= "sub-title">about me</h1>
      <img src={profile} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello! My name is Gabriela Zalta, I'm from Bogota, Colombia and I am a dynamic full-stack web developer currently seeking opportunities in front-end development.  I graduated from the University of Central Florida in 2019 with a degree in Integrated Business and a minor in International Business. After working in the business industry for a while, I realized that I wanted to shift gears a little and pursue my dream of becoming a programmer! As I learn more about web development and design, I have become increasingly excited about reaching my goals and to see what my future holds.
      </p>
      </div>
    </section>
  )
}

export default About;