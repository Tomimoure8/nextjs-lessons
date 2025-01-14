import React, { useState } from "react";

export const OtroButton = () => {
    const [counter, setCount] = useState(1);
    return (
        <>
            <p>Contador: {counter}</p>
            <button onClick={() => setCount (counter + 1)}>Clcik para aumentar</button>
        </>
    )
}    