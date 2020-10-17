import React from 'react';

import styles from './about.module.css';

function about () {

    return (
        <div className={styles.container}>
            <h2>About me</h2>
            <strong>I am Yechoen a programer developer</strong>
            <p>I am currently a front-end developr working at INETUM specialiced at React.</p>
            {/* <p>About my life, I've been born in Maryland where I was named by a corean church pastor Yechoen (예천) with the meaning of Heaven's art.</p> */}

        </div>
    );
}

export default about;