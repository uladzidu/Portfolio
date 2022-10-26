import React from 'react';
import moduleStyles from './Main.module.scss'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import profilePhoto from '../assets/image/photo_2021-07-12_20-06-50.jpg'

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
                    <img src={profilePhoto} alt="profilePhoto"/>
                </div>
            </div>
        </div>
    );
};

export default Main;