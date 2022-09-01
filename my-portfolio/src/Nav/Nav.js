import React from 'react';
import moduleStyles from './Nav.module.css'

const Nav = () => {
    return (
        <div className={moduleStyles.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
            <a href=""></a>
        </div>
    );
};

export default Nav;