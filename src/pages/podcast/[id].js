import { EpisodesInfo } from '@/components/EpisodesInfo';
import { Layout } from '@/components/Layout'
import { Sidebar } from '@/components/Sidebar';

const PodcastPage = ({ podcastData }) => {

    return (
        <Layout
            title={podcastData && podcastData.results[0].collectionName}
            description={podcastData && podcastData.results[0].collectionName}
        >
            <main className='flex flex-col sm:flex-row items-center sm:items-start'>
                <Sidebar podcastData={podcastData} />
                <EpisodesInfo podcastData={podcastData} />
            </main>

        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
    const data = await response.json()
    // console.log(data);

    return {
        props: {
            podcastData: data
        }
    }
}

export default PodcastPage

