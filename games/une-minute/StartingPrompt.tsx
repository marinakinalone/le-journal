import React, { useEffect, useState } from 'react'
import { EnSilence, EnMusique } from './index'
import { silentPrompts } from './data/silentPrompts';

const StartingPrompt = () => {
    const [displayMusicPrompt, setDisplayMusicPrompt] = useState(false);
    const silentDisplayTime = 2000 //7000


    useEffect(() => {
        setTimeout(() => { setDisplayMusicPrompt(true) }, silentDisplayTime * (silentPrompts.length))

    }, [displayMusicPrompt])

    return (
        <section>
            <EnSilence displayTime={silentDisplayTime} />
            {displayMusicPrompt ? (<EnMusique />) : (<></>)}

        </section>
    )
}

export default StartingPrompt