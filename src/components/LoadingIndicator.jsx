import React from 'react'

export const LoadingIndicator = () => {
    return (
        <div className="fixed top-0 right-0 m-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    )
}
