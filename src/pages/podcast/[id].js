import { Layout } from '@/components/Layout'
import { Sidebar } from '@/components/Sidebar';
import { formatearDuracion, formatearFecha } from '@/helpers/helpers';
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PodcastPage = () => {

    const router = useRouter()
    const { id } = router.query
    const [podcastData, setPodcastData] = useState(null)
    const [podcast, setPodcast] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [episodesCount, setEpisodesCount] = useState(0)

    useEffect(() => {
        async function fetchPodcastData() {
            setIsLoading(true)
            const storedPodcastData = localStorage.getItem(`podcast-${id}`)
            const storedTimestamp = localStorage.getItem(`podcast-${id}-timestamp`)
            const timestamp = Date.now()
            if (storedPodcastData && storedTimestamp && (timestamp - storedTimestamp < 86400000)) {
                setPodcastData(JSON.parse(storedPodcastData))
                setPodcast(JSON.parse(storedPodcastData).results[0])
                setIsLoading(false)
            } else {
                const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
                const data = await response.json()
                setPodcastData(data)
                setPodcast(data.results[0])
                localStorage.setItem(`podcast-${id}`, JSON.stringify(data))
                localStorage.setItem(`podcast-${id}-timestamp`, timestamp)
                setIsLoading(false)
            }
        }
        fetchPodcastData()
    }, [id])

    useEffect(() => {
        if (podcastData) {
            setEpisodesCount(podcastData.resultCount - 1)
        }
    }, [podcastData])

    return (
        <Layout
            title={podcastData && podcastData.results[0].collectionName}
            description={podcastData && podcastData.results[0].collectionName}
        >
            <main className='flex'>

                <Sidebar podcast={podcast} />

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
            </main>

        </Layout>
    )
}

export default PodcastPage