import React from 'react';
import moduleStyles from './skill.module.css'

const Skill = (props) => {
    return (
        <div className={moduleStyles.skill}>
            <div className={moduleStyles.icon}></div>
            <h3>{props.title}</h3>
            <span className={moduleStyles.description}>{props.description}</span>
        </div>
    );
};

export default Skill;