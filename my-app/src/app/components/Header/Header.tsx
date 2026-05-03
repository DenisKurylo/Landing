import React from 'react';
import cl from './header.module.scss'

const Header = () => {
    return (
        <div className={cl.header}>
            <h1>Landing page title</h1>
            <h5>And a subheading describing your site, too</h5>
            <button>Send form</button>
        </div>
    );
};

export default Header;