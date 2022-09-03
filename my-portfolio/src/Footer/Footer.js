import React from 'react';
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import moduleStyles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={moduleStyles.footerBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.footerContainer}`}>
                <div>Vlad Dukhovnik</div>
                <div className={moduleStyles.divsBlock}>
                    <div className={moduleStyles.divElement}></div>
                    <div className={moduleStyles.divElement}></div>
                    <div className={moduleStyles.divElement}></div>
                    <div className={moduleStyles.divElement}></div>
                    <div className={moduleStyles.divElement}></div>
                    <div className={moduleStyles.divElement}></div>
                </div>
                <div>© 2022 All rights reserved</div>
            </div>

        </div>
    );
};

export default Footer;