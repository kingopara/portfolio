import React from 'react'
import "./About.css"
import picture from '../../assets/cover/webdev.jpeg'

function About() {
    return (
        <section className='bg'>
            <div className='about'>
                <div className='about-text'>
                    <p>
                        I'm a Full Stack Web Developer with a background in Petroleum Engineering with acquired knowledge and skills across multiple industries including the Semiconductor, Oil and Gas and safety. 
                        Earned a certificate in Full Stack Web Development from the University of Texas, Austin with proficiency in the MERN Stack.
                        
                        Always had a passion for creativity and problem solving and being a full stack web developer brings all that to life. 
                        My effective communication with my goal oriented and critical thinking nature combined with my acquired knowledge and skills, excites me to build better experiences on the web.
                    </p>
                </div>

                <div className='about-img'>
                    <img src={picture} alt='web developer set up' />
                </div>
            </div>
        </section>
    )
}

export default About
