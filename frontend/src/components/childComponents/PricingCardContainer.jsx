import React from 'react'
import PricingCard from './PricingCard'

function PricingCardContainer(props) {
    return (
        <div className='card__container text-center'>
            <h1 className='text-4xl font-bold leading-loose'>{props.title}</h1>
            <div className='flex justify-center flex-wrap items-center py-10'>
                {props.data.map(item => {
                    return (
                        <PricingCard
                            title={item.title}
                            cardData={item.cardData}
                            buy={item.buy}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PricingCardContainer