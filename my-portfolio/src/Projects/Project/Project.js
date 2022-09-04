import React from 'react';
import moduleStyles from './Project.module.css'

const Project = (props) => {
    return (
        <div className={moduleStyles.project}>
            <div className={moduleStyles.imgContainer}>
                <img src="" alt=""/>
                <a className={moduleStyles.imgText} href="">Look</a>
            </div>
            <h3>{props.title}</h3>
            <span className={moduleStyles.description}>{props.description}</span>
        </div>
    );
};

export default Project;