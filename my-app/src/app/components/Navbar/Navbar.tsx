import React from 'react';
import cl from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={cl.nav}>
            <p>Site name</p>
            <div className={cl.content}>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
                <button>Send form</button>
            </div>
        </div>
    );
};

export default Navbar;