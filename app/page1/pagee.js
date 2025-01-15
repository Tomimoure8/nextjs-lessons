'use client'

import { useState } from 'react'
import React from 'react'
import styles from './main.module.css';

export const ContadorButton = () => {
    const [counter, setCount] = useState(1)

    return (
        <div className={styles.contador}>
            <h1 className={styles.contador}>Contador</h1>
                <p className={styles.contador}>Hiciste click: {counter} </p>
            <button className={styles.button} onClick={() => setCount(counter + 1)}>Aumentar contador</button> <br/>
            <button className={styles.button} onClick={() => setCount(counter - 1)}>Restar contador</button> <br/>
            <button className={styles.button} onClick={() => setCount(0)}>Restablecer contador</button>
        </div>
    )
}
