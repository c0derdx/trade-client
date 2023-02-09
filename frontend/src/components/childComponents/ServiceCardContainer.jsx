import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceCardContainer(props) {

    return (
        <div className='card__container text-center'>
            <h1 className='text-4xl font-bold leading-loose'>{props.title}</h1>
            <div className='flex justify-center flex-wrap items-center py-10'>
                {props.data.map((ele)=> {
                    return <ServiceCard
                    element = {ele}
                    heading = {props.title}
                    />
                })}
            </div>
        </div>
    )
}

export default ServiceCardContainer