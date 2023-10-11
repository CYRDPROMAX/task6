import React from "react";
import './intro.css';
import {Link} from 'react-scroll';
const Intro = () => {
    return (
        <section id="Intro">
            <div className="introcontent">
                <span className="greeting">Yo, Peasants!</span>
                <span className="greet">Dive into Greatest's Tech Playground. !</span>
                <p className="intropara">Craving knowledge, crafting code, and creating up dreams of the future! <br></br> With a heart fueled by passion and a mind adorned in lines of code, I embark on a quest to master the tech universe. Unleashing creativity, one byte at a time!</p>
                <Link to="contact" smooth={true} duration={500}>
  <button className="menubutton">
    <img src="/summon.png" alt="message" style={{ width: '50px', height: '50px', marginRight: '10px' }} className="images"/>
    Summon My Skills
  </button>
</Link>
            </div>
            
            <img src="/hacker.png" alt="bg1" className="bg1" />
        </section>
    )
}

export default Intro;

