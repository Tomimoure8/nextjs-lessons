'use client'

import { useState } from 'react'
import React from 'react'

export const ContadorButton = () => {
    const [counter, setCount] = useState(1)

    return (
        <>
            <h1>Contador</h1>
            <p>Hiciste click: {counter} </p>
            <button onClick={() => setCount(counter + 1)}>Aumentar contador</button> <br/>
            <button onClick={() => setCount(counter - 1)}>Restar contador</button> <br/>
            <button onClick={() => setCount(0)}>Restablecer contador</button>
        </>
    )
}
