import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={ `${styleContainer.container} ${style.skillsContainer}` }>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title = 'Js' description = 'eqwewrewrewrweqrwerqwerwqerwerwerqw' />
                    <Skill title = 'Css' description = 'fdsklhfsdafhsdfhsdafhsafsakhflshflshlfal' />
                    <Skill title = 'Html' description = 'dsfffffffffffffffffffffwqlej;qwewefdsfsdkfjsfjsdlflkfjlsfjkls' />
                </div>
            </div>
        </div>
    );
};
