import React, { useEffect, useState } from 'react'
import { silentPrompts } from './data/silentPrompts'

interface EnSilenceProps {
    displayTime: number
}
const EnSilence = ({ displayTime }: EnSilenceProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < silentPrompts.length - 1) {
            setTimeout(() => { setIndex(index + 1) }, displayTime)
        }
    }, [displayTime, index])
    return (
        <p>
            {silentPrompts[index].prompt}
        </p>
    )
}

export default EnSilence