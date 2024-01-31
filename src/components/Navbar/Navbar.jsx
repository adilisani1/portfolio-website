import React from 'react';

import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';
import { Social } from './social/Social';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='fl'>
                    <Sidebar />
                </div>
                <a className='logo'>
                    <img style={{ width: "55px" }} src='/public/ad-logo.png' alt='adlogo' />
                </a>
                <div className='fl'>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Navbar