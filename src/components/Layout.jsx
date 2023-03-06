import Head from 'next/head'
import React from 'react'
import { Header } from './Header'

export const Layout = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{`Podcast musical - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>
            <div className='p-4'>
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </>
    )
}
