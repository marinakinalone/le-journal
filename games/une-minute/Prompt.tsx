import React, { useEffect, useState } from 'react'

const Prompt = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => { setDisplay(true) }, 5000)

    }, [])

    return (
        <>
            <h1>Et si nous prenions juste une minute pour penser à toutes les personnes qui nous ont aimés ?</h1>
            {display ? (<h2>Juste une minute de silence.</h2>) : (<></>)}
        </>
    )
}

export default Prompt