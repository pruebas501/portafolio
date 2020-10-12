import React from 'react';

import styles from './contact.module.css';

import EarthLowPoly from '../images/earthToon2.svg';

function contact () {

    return (
        <div>
            Contact
            <img className={styles.planeta} src={EarthLowPoly} alt="earth Low Poly"></img>
        </div>
    );
}

export default contact;