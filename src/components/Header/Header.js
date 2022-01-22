import { MenuOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className='head'>
                    <h1>Praise Opara</h1>
                </div>

                <ul className='menu'>
                    <li>
                        <Link to='#'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='#'>Contact</Link>
                    </li>
                    <li>
                        <Link to='#'>Resume</Link>
                    </li>

                    <div className="hamburger-menu">
                        <MenuOutlined className='menu'/>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header
