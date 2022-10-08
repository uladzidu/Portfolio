import React from 'react';
import moduleStyles from './Projects.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={moduleStyles.projectsBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.projectsContainer}`}>
                <div className={moduleStyles.title}>
                    <h2>Projects</h2>
                </div>
                <div className={moduleStyles.projects}>
                    <Project title='Social Network' description='werwrqwrwrrqrwq'/>
                    <Project title='Todolist' description='werwrqwrwrrqrwq'/>
                </div>
            </div>
        </div>
    );
};

export default Projects;