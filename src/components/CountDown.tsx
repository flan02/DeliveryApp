'use client'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-01-14")

const CountDown = () => {
    return (
        <Countdown date={endingDate} className='font-bold text-5xl xl:text-7xl text-yellow-300' />
    )
}

export default CountDown