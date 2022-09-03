import React from 'react';
import moduleStyles from './Skills.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import Skill from "./skill/skill";

const Skills = () => {
    return (
        <div className={moduleStyles.skillsBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.skillsContainer}`}>
                <h2 className={moduleStyles.title}>Skills</h2>
                <div className={moduleStyles.skills}>
                    <Skill title = 'CSS' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, aut deserunt dolor dolorum eligendi ex fugiat impedit iste, nobis placeat provident quae quia quibusdam suscipit tempore ullam vitae.'/>
                    <Skill title = 'JS' description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, aut deserunt dolor dolorum eligendi ex fugiat impedit iste, nobis placeat provident quae quia quibusdam suscipit tempore ullam vitae."}/>
                    <Skill title = 'React' description='tempore ullam vitae.'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;