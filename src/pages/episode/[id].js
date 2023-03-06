import { Episode } from '@/components/Episode'
import { Layout } from '@/components/Layout'

const EpisodePage = ({ episodeData }) => {

    return (
        <Layout
            title={episodeData && episodeData.results[0].trackName}
            description={episodeData && episodeData.results[0].collectionName}
        >
            {/* {isLoading && <p>Loading...</p>} */}
            {episodeData && (
                <Episode episodeData={episodeData} />
            )}
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const response = await fetch(`https://itunes.apple.com/search?term=${id}&entity=podcastEpisode`)
    const data = await response.json()
    
    return {
        props: {
            episodeData: data
        }
    }
}

export default EpisodePage