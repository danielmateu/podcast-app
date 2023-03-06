import { Layout } from '@/components/Layout'
import { formatearDuracion, formatearFecha } from '@/helpers/helpers'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const EpisodePage = () => {
    const router = useRouter()
    const { id } = router.query
    const [episodeData, setEpisodeData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function fetchEpisodeData() {
            setIsLoading(true)
            const storedEpisodeData = localStorage.getItem(`episode-${id}`)
            const storedTimestamp = localStorage.getItem(`episode-${id}-timestamp`)
            const timestamp = Date.now()
            if (storedEpisodeData && storedTimestamp && (timestamp - storedTimestamp < 86400000)) {
                setEpisodeData(JSON.parse(storedEpisodeData))
                setIsLoading(false)
            } else {
                const response = await fetch(`https://itunes.apple.com/search?term=${id}&entity=podcastEpisode`)
                const data = await response.json()
                setEpisodeData(data)
                localStorage.setItem(`episode-${id}`, JSON.stringify(data))
                localStorage.setItem(`episode-${id}-timestamp`, timestamp)
                setIsLoading(false)
            }
        }
        fetchEpisodeData()
    }, [id])

    return (
        <Layout
            title={episodeData && episodeData.results[0].trackName}
            description={episodeData && episodeData.results[0].collectionName}
        >
            {isLoading && <p>Loading...</p>}
            {episodeData && (
                <div className='flex gap-4'>
                    <div className='flex flex-col gap-4 w-4/12 shadow-lg p-4 h-fit'>
                        <div className='flex items-center justify-center p-4'>
                            <Image
                                src={episodeData.results[0].artworkUrl60}
                                alt={episodeData.results[0].collectionName}
                                width={150}
                                height={150}

                            />
                        </div>
                        <div>
                            <p className='font-semibold'>{episodeData.results[0].collectionName}</p>
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

                        {/* <p>{formatearFecha(episodeData.results[0].releaseDate)}</p> */}
                        {/* <p>{formatearDuracion(episodeData.results[0].trackTimeMillis)}</p> */}
                        <audio controls className='w-full my-4'>
                            <source src={episodeData.results[0].previewUrl} type='audio/mp4' />
                        </audio>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default EpisodePage