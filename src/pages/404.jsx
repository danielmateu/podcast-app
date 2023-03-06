import { Layout } from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const Page404 = () => {
    return (
        <Layout>

            <main className='flex flex-col items-center gap-8'>
                <h1 className='text-center text-4xl'>Page - 404</h1>
                <Link
                    href='/'
                    className='hover:text-sky-500 transition-all'

                >
                    Go back home
                </Link>
            </main>

        </Layout>
    )
}

export default Page404