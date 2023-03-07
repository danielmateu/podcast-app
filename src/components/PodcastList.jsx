import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'animate.css';

export const PodcastList = ({ filteredPodcasts }) => {
    return (
        <ul className='grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center '>
            {filteredPodcasts.map((podcast) => (
                <Link
                    key={podcast.id.attributes['im:id']}
                    href={`/podcast/${podcast.id.attributes['im:id']}`}
                >
                    <li className='flex flex-col items-center shadow-xl hover:shadow-md transition-all rounded-xl py-2 px-4 relative my-12 '>
                        <Image
                            src={podcast['im:image'][2].label}
                            alt={podcast['im:name'].label}
                            width={100} height={100} className='rounded-full absolute -top-24  hover:scale-110 hover:rotate-12 hover:shadow-lg transition-all hover:cursor-pointer'
                            data-cy='podcast-image'
                        />
                        <div className='h-24 flex flex-col justify-end'>
                            <h3
                                data-cy='podcast-name'
                                className='font-semibold text-gray-700'>{podcast['im:name'].label.toUpperCase().split(' ').slice(0, 2).join(' ')}
                            </h3>

                            <p
                                data-cy='podcast-author'
                                className='text-gray-600'>{podcast['im:artist'].label.split(' ').slice(0, 4).join(' ')}
                            </p>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
