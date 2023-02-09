import React from 'react'

function Cover({name}) {
    return (
        <div className='cover h-80 bg-cover bg-no-repeat flex items-center justify-center pt-20'>
            <h1 className='text-4xl font-bold text-white'>{name}</h1>
        </div>
    )
}

export default Cover