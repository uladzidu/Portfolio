import React from 'react';
import moduleStyles from './Title.module.scss'


const Title = (props) => {
    return (
        <div className={moduleStyles.title}>
            <h2>{props.text}</h2>
        </div>
    );
};

export default Title;