import React from 'react';
import moduleStyles from './Main.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'

const Main = () => {
    return (
        <div className={moduleStyles.mainBlock}>
            <div className={commonContainerStyle.commonContainer}>
                <div className={moduleStyles.greetings}>
                    <span>Hi there</span>
                    <h1>I am Vlad Dukhovnik</h1>
                    <p>Fronted Developer</p>
                </div>
                <div className={moduleStyles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;