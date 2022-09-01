import React from 'react';
import moduleStyles from './Skills.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'

const Skills = () => {
    return (
        <div className={moduleStyles.skillsBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.skillsContainer}`}>
                <h2 className={moduleStyles.title}>Skills</h2>
                <div className={moduleStyles.skills}>

                </div>
            </div>
        </div>
    );
};

export default Skills;