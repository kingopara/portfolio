import React from 'react'
import './home.css'
import Header from '../Header/Header'
import picture from '../../assets/cover/B&WPIC.jpg'

function Home() {
    return (
        <div className='home'>

            <Header/>

            <div className="home-content">
                <div>
                    <h1>PRAISE OPARA</h1>
                    <p>
                        I'm a Full Stack Web Developer with a background in Petroleum Engineering with acquired knowledge and skills across multiple industries including the Semiconductor, Oil and Gas and safety. 
                        Earned a certificate in Full Stack Web Development from the University of Texas, Austin with proficiency in the MERN Stack.
                        
                        Always had a passion for creativity and problem solving and being a full stack web developer brings all that to life. 
                        My effective communication with my goal oriented and critical thinking nature combined with my acquired knowledge and skills, excites me to build better experiences on the web.
                    </p>
                </div>

                <div className="home-img">
                    <img src={picture} alt="selfie of me" />
                </div>
            </div>
        </div>
    )
}

export default Home
