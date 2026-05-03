'use client'

import React, {useState} from 'react';
import cl from './navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Slide} from "@mui/material";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={'relative'}>
            <div className={cl.nav}>
                <p>Site name</p>
                <div className={cl.content}>
                    <p>Page</p>
                    <p>Page</p>
                    <p>Page</p>
                    <button>Send form</button>
                </div>
                <div className={cl.mobile_menu} onClick={() => setOpen(!open)}>
                    {!open ? <MenuIcon/> : <CloseRoundedIcon/>}
                </div>
            </div>
            <Slide in={open} direction={'left'} mountOnEnter unmountOnExit>
                <div className={cl.dropdown}>
                    <p>Page</p>
                    <p>Page</p>
                    <p>Page</p>
                    <button>Send form</button>
                </div>
            </Slide>
        </div>
    );
};

export default Navbar;