import React from 'react'

const ListItems = () => {
    const categories = [
        "All", "Music", "React Routers", "computer programming", "reverberation", "Movie musicals",
        "India natioonal cricket team", "newz", "mixes", "Live", "Dubbing"
    ]

    return (
        <div className='flex gap overflow-x-scroll hide-scroll-bar px-4'>
            <div className='flex space-x-4 flex-nowrap'>
                {categories.map((category) => {
                    return (
                        <div
                            key={category}
                            className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
                        >
                            {category}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListItems
