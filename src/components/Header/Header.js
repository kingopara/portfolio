import { Close, MenuOutlined, WidgetsOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import mypic from '../../assets/cover/cover-img.png'

const Header = () => {

    const [active, setActive ] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='header'>
            <div className='header-pic'>
                <img src={mypic} alt='my picture' />
            </div>

            <div className='web'>
                <WidgetsOutlined className='web-menu' onClick={showMenu}/>
            </div>

            <nav>
                {/* <div className='head'>
                    <h1>Praise Opara</h1>
                </div> */}

                <ul className={active ? 'nav-menu active' : 'nav-menu'}>

                    <div className='web-close'>
                        <Close className='web-menu-close' onClick={showMenu}/>
                    </div>
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

                    {/* <div className="hamburger-menu">
                        <MenuOutlined className='menu'/>
                    </div> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header
