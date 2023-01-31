import React from 'react'
import Typed from 'react-typed';

function Home() {
    return (
        <div className="h-screen flex items-center justify-center text-center">
            <div className='h-40 w-100'>
                <h1 className='text-4xl text-center'>
                    <Typed
                        strings={['Here you can find anything']}
                        typeSpeed={40}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum esse facere</p>
            </div>
        </div>
    )
}

export default Home