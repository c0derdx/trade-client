import React from 'react'
import Typed from 'react-typed';
import "../styles/Home.css"

function Home() {
    return (
        <div className="h-screen flex items-center justify-center text-center home">
            <div className='w-1/2 bg-blue'>
                <h1 className='text-4xl text-center leading-loose'>
                    <Typed
                        strings={['MAKING YOUR TRADE EASY ELEGANT & EFFICIENT']}
                        typeSpeed={40}
                    />
                </h1>
                <p className='my-10px'>WE BELIEVE IN DELIVERING YOU THE COMFORTABLE AND PROFITABLE TRADING RECOMMENDATIONS</p>
            </div>
        </div>
    )
}

export default Home