import Image from 'next/image'
import React from 'react'

export const Podcast = () => {

    return (
        <li className='flex flex-col items-center shadow-xl hover:shadow-md transition-all rounded-xl py-2 px-4 relative my-12'>
            <Image src={props['im:image'][2].label} alt={props['im:name'].label} width={100} height={100} className='rounded-full absolute -top-16  hover:scale-110 hover:rotate-12 hover:shadow-lg transition-all hover:cursor-pointer' />
            <div className='h-24 flex flex-col justify-end'>
                <h2 className='font-semibold text-gray-700'>{props['im:name'].label.toUpperCase().split(' ').slice(0, 2).join(' ')}</h2>
                <p className='text-gray-600'>{props['im:artist'].label}</p>
                {/* Description */}
                {/* <p className='text-gray-400'>{podcast.summary.label}</p> */}
            </div>
        </li>
    )
}
