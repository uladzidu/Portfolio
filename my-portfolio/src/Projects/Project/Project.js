import React from 'react';
import moduleStyles from './Project.module.css'

const Project = (props) => {
    return (
        <div className={moduleStyles.project}>
            <div className={moduleStyles.icon}></div>
            <h2>{props.title}</h2>
            <span className={moduleStyles.description}>{props.description}</span>
        </div>
    );
};

export default Project;