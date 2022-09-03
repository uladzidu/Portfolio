import React from 'react';
import moduleStyles from './Projects.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={moduleStyles.projectsBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.projectsContainer}`}>
                <h2 className={moduleStyles.title}>Projects</h2>
                <div className={moduleStyles.projects}>
                    <Project title='Social Network' description='rwerqwrwqrerwqredddddddddddddddddd'/>
                    <Project title='Todolist' description='werwrqwrwrrqrwq'/>
                    <Project title='Portfolio' description='wrwrwqrqrqrqwe'/>
                </div>
            </div>
        </div>
    );
};

export default Projects;