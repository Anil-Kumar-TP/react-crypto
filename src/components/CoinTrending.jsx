import React from 'react'

const CoinTrending = ({ coin }) => {
    return (
        <>
            <div className='font-light mb-2 p-2 bg-gray-200 border-2 rounded hover:bg-gray-400 cursor-pointer'>
                <div className='flex items-center gap-1'>
                    <span className='font-semibold'>{coin.score + 1}.</span>
                    <img src={coin.small} alt="" className='w-6'/>
                    <p>{coin.name}</p>
                    <small className='text-xs'>({coin.symbol})</small>
                </div>
            </div>
        </>
    )
}

export default CoinTrending;