import React from 'react';
import moduleStyles from './Header.module.css'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={moduleStyles.header}>
            <Nav/>
        </div>
    );
};

export default Header;