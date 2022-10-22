import React from 'react';
import moduleStyles from './Projects.module.scss'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'
import Project from './Project/Project';
import Title from '../commonFiles/components/title/Title';
import todoImage from './../assets/image/istockphoto-1330040188-170667a.jpg'
import socialImage from './../assets/image/social-media-network_74855-4575.jpg'


const Projects = () => {

    const social = {
        backgroundImage: `url(${todoImage})`,
    }


    const todo = {
        backgroundImage: `url(${socialImage})`,
    }

    return (
        <div className={moduleStyles.projectsBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.projectsContainer}`}>
                <Title text='Projects'/>
                <div className={moduleStyles.projects}>
                    <Project style = {todo} title='Social Network' description='werwrqwrwrrqadsadsadadadasdasrwq'/>
                    <Project style = {social} title='Todolist' description='werwrqwrwrrqrwq'/>
                </div>
            </div>
        </div>
    );
};

export default Projects;