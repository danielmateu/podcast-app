import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="flex justify-between border-b-2 p-4 mb-4">
            <Link href='/' className="text-sky-400 hover:text-sky-500 font-semibold transition-all ">
                <h1>Podcaster</h1>
            </Link>
        </header>
    )
}
