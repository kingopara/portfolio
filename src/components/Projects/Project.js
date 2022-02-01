import React from 'react'
import './project.css'
import techblog from '../../assets/Projects/techblog.png'
import pizzahunt from '../../assets/Projects/pizza-hunt.png'
import noteTaker from '../../assets/Projects/noteTk2.png'
import budgetTracker from '../../assets/Projects/budget-tracker.png'
import deepThoughts from '../../assets/Projects/deep-thoughts.png'
import bookSearch from '../../assets/Projects/bookSearch.png'

function Project() {
    return (
        <div className='projects'>
            <div className='project-area'>
                <h1>PROJECTS</h1>

            </div>

            <div className='project-container'>
                <div className='project-card'>
                    <img src={techblog} alt='' />
                    <button >DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>

                <div className='project-card'>
                    <img src={pizzahunt} alt='' />
                    <button>DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>

                <div className='project-card'>
                    <img src={noteTaker} alt='' />
                    <button>DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>

                <div className='project-card'>
                    <img src={budgetTracker} alt='' />
                    <button>DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>

                <div className='project-card'>
                    <img src={deepThoughts} alt='' />
                    <button>DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>

                <div className='project-card'>
                    <img src={bookSearch} alt='' />
                    <button>DEMO</button>
                    {/* <button>GitHub</button> */}
                </div>
            </div>
            
        </div>
    )
}

export default Project
