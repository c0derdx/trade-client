import React from 'react'
import Card from './Card'

function CardContainer() {
    return (
        <div className='card__container text-center'>
            <h1 className='text-4xl font-bold leading-loose'>Your Success is our only business</h1>
            <p className='text-xl w-2/3 mx-auto'>We’ve been in this Financial Advisory Business and we were able to help hundreds of Indian stock market traders and thousands of beginners in the stock market.</p>
            <div className='flex justify-center flex-wrap items-center py-10'>
                <Card
                title = "Professional"
                detail = "We believe in the best relation with clients and professionalism in only work, that makes us different from others."
                />
                <Card
                title = "Most Trusted"
                detail = "As we are in this market for many years, we automatically builtreputation by delivering only results that define our trust."
                />
                <Card
                title = "Active during Market"
                detail = "Always available during market hours for any kind of queries and consultations to provide more value to our customers."
                />
            </div>
        </div>
    )
}

export default CardContainer