import { formatearDuracion, formatearFecha } from '@/helpers/helpers'
import Link from 'next/link'
import React from 'react'

export const EpisodesInfo = ({podcastData}) => {
    return (
        <div className=' flex flex-col w-8/12 shadow-lg p-6'>
            <h2 className='text-2xl font-semibold text-gray-600 shadow-lg p-2 rounded-xl my-4'>
                {/* Episodes {podcastData.resultCount - 1} */}
                {/* Episodes {podcastData.results.length} */}
                <p>Episodes {podcastData?.resultCount - 1}</p>
            </h2>
            <div className=''>
                <div className=''>
                    <div className='flex items-center justify-between font-bold'>
                        <p className='text-left p-2'>Title</p>
                        <div className='flex gap-4 '>
                            <p className='text-left'>Date</p>
                            <p className='text-left'>Duration</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    {podcastData && podcastData.results.map((podcast) => (
                        podcast.trackId !== podcast.collectionId && (
                            <div className='flex flex-col' key={podcast.trackId}>
                                {/* <h1>Episodes {podcastData.resultCount - 1}</h1> */}
                                <div className='flex items-center justify-between m-2 bg-slate-100 hover:bg-slate-200 p-2 transition-all'>
                                    <Link
                                        podcast={podcast}
                                        href={`/episode/${podcast.trackId}`}
                                    >
                                        <p className=''>{podcast.trackName}</p>
                                    </Link>

                                    <div className='flex gap-4 '>
                                        <p className=''>{formatearFecha(podcast.releaseDate)}</p>
                                        <p className=''>{formatearDuracion(podcast.trackTimeMillis)}</p>
                                    </div>
                                </div>
                                {/* <audio controls muted>
                                            <source src={podcast.previewUrl} type='audio/mp4' />
                                        </audio> */}
                            </div>
                        )
                    )
                    )}
                </div>
            </div>

        </div>
    )
}
