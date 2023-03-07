import React from 'react'

export const Filter = ({ searchTerm, setSearchTerm, filteredPodcasts }) => {

    return (
        <div className="flex gap-2 mb-16 justify-end items-center ">
            <label
                data-cy='filter-label'
                htmlFor="filter"
                className='bg-sky-400 px-2 rounded-md text-white font-semibold'>{filteredPodcasts.length}
            </label>
            <input
                type="text"
                placeholder='Filter podcasts...'
                id='filter'
                className='p-2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-cy='filter-input'
            />
        </div>
    )
}
