import React from 'react';
import moduleStyles from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={moduleStyles.project}>
            <div style={props.style} className={moduleStyles.imgContainer}>
                <img src="" alt=""/>
                <a className={moduleStyles.imgText} href="">Look</a>
            </div>
            <div className={moduleStyles.projectInfo}>
                <h3 className={moduleStyles.projectTitle}>{props.title}</h3>
                <span className={moduleStyles.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Project;