import React from 'react';
import moduleStyles from './Contacts.module.css'
import commonContainerStyle from '../commonFiles/commonStyles/commonContainer.module.css'


const Contacts = () => {
    return (
        <div className={moduleStyles.contactBlock}>
            <div className={`${commonContainerStyle.commonContainer} ${moduleStyles.contactContainer}`}>
            <h2>Contacts</h2>
                <form className={moduleStyles.form} action="">
                    <input type="text" placeholder={'<input>'}/>
                    <input type="text" placeholder={'<input>'}/>
                    <textarea placeholder={'<textarea>'}></textarea>
                </form>
            <button type='submit' >Send</button>
            </div>
        </div>
    );
};

export default Contacts;