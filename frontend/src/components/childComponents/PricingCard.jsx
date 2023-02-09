import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../../images/cardIcon.jpg"

function PricingCard(props) {
    return (
        <div className="pricing__card rounded-lg py-4 px-8 bg-white m-2 text-center card drop-shadow mx-auto mt-16">
            <div className="flex justify-center md:justify-center -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={icon} />
            </div>
            <h1 className='text-2xl leading-loose'>{props.title}</h1>
            {props.cardData.map(item => {
                return (
                    <div className='flex justify-between  mx-auto border-b-2 my-4'>
                        <p>{`${item.name} :`}</p>
                        <p>{`₹ ${item.Charges}/-`}</p>
                    </div>
                )
            })}
            <div className="flex justify-center mt-4">
                <Link to={`${props.buy}`} className="text-xl font-medium text-indigo-500">Buy</Link>
            </div>
        </div>
    )
}

export default PricingCard