import React from "react";
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
                <h2>Skills</h2>
      <div className="skills-container">
        <div className="intro-paragraph">
          <p>
            In the boundless expanse of the digital realm, where lines of code dance like constellations in the night sky,
            I find my sanctuary. My journey began with the cryptic languages of C, C++, and Java, each unlocking new doors
            to the universe of programming possibilities.
          </p>
          
          <p>
            Venturing further into the enchanted forest of web development, I mastered the MERN stack,
            weaving intricate spells with HTML, CSS, and JavaScript. The cloud became my playground as I embraced the AWS Cloud Practitioner's mantle,
            orchestrating virtual symphonies in the ethereal computing space.
          </p>
          
          <p>
            Navigating the labyrinthine landscapes of operating systems and computer networks,
            I discovered the hidden pathways that govern the heartbeat of the digital world. In the language of assembly,
            I articulated the movements of machines, crafting real-time projects in the sacred art of ASL (Assembly Language).
          </p>

          <p>
            As I tread the corridors of knowledge, Discrete Mathematics became my compass, guiding me through the abstract realms
            where algorithms and logic intertwine. Each skill acquired, a pixel in the mosaic of my digital odyssey.
          </p>
        </div>
<div className="category">
  <h3>Programming Languages</h3>
  <ul>
    <li>C</li>
    <li>C++</li>
    <li>Java</li>
    <li>Python</li>
    <li>MYSQL</li>
  </ul>
</div>

<div className="category">
  <h3>Web Development</h3>
  <ul>
    <li>MERN Stack</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</div>

<div className="category">
  <h3>Cloud and Systems(Intro level)</h3>
  <ul>
    <li>AWS Cloud Practitioner</li>
    <li>Operating Systems</li>
    <li>Computer Networks</li>
  </ul>
</div>

<div className="category">
  <h3>Other Skills</h3>
  <ul>
    <li>Discrete Mathematics</li>
    <li>Assembly Language</li>
  </ul>
</div>

<div className="category">
  <h3>Projects</h3>
  <ul>
    <li>Real-Time ASL Project</li>
  </ul>
</div>

      </div>
    </section>
  );
}

export default Skills;
