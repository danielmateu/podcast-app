import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Episode = ({episodeData}) => {
    return (
        <div className='flex gap-4'>
                    <div className='flex flex-col gap-4 w-4/12 shadow-lg p-4 h-fit'>
                        <div className='flex items-center justify-center p-4'>
                            <Link
                                href={`/podcast/${episodeData.results[0].collectionId}`}
                            >
                                <Image
                                    src={episodeData.results[0].artworkUrl60}
                                    alt={episodeData.results[0].collectionName}
                                    width={150}
                                    height={150}
                                    className='hover:animate-pulse'

                                />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={`/podcast/${episodeData.results[0].collectionId}`}
                                className='font-semibold'>{episodeData.results[0].collectionName}</Link>
                            {/* Artist */}
                            <p> by {episodeData.results[0].collectionName}</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Description:</p>
                            {/* Cut and show the first 20 words */}
                            <p className='text-justify'>{episodeData.results[0].description.split(' ').slice(0, 10).join(' ')}</p>
                        </div>
                        {/* Description */}

                    </div>
                    <div className='w-8/12 shadow-lg p-6'>
                        <h2 className='font-semibold'>{episodeData.results[0].trackName}</h2>
                        <p className='text-justify'>{episodeData.results[0].description}</p>
                        <audio controls className='w-full my-4'>
                            <source src={episodeData.results[0].previewUrl} type='audio/mp4' />
                        </audio>
                    </div>
                </div>
    )
}
