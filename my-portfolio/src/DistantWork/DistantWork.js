import React from 'react';
import moduleStyles from './DistantWork.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'


const DistantWork = () => {
    return (
        <div className={moduleStyles.distantWorkBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.distantWorkContainer}`}>
                <h2 className={moduleStyles.header}>Distant Work</h2>
                <div className={moduleStyles.text}>To hire me</div>
            </div>
        </div>
    );
};

export default DistantWork;