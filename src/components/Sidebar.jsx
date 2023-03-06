import Image from 'next/image'
import React from 'react'

export const Sidebar = ({podcast}) => {

    return (
        <div className='shadow-lg flex flex-col   text-start rounded-xl p-2 m-2 w-4/12 h-fit'>
        {podcast && (
            <>
                <Image
                    src={podcast.artworkUrl600}
                    alt={`${podcast.collectionName} - ${podcast.trackName}`}
                    width={200}
                    height={200}
                    className='p-6 m-auto'
                />
                <hr />
                <div className='text-start py-4 px-2'>
                    <p className='font-semibold text-gray-600'>{podcast.collectionName}</p>
                    <p className='text-gray-400'>by {podcast.artistName}</p>
                </div>
                <hr />
                <div className='text-start py-4 px-2'>
                    <p className='font-semibold text-gray-600'>Description:</p>
                    <p className='text-gray-400'>{podcast.genres}</p>
                </div>
            </>
        )}
    </div>
    )
}
