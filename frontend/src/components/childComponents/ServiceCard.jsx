import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../../images/cardIcon.jpg"

function ServiceCard(props) {
    return (
        <div className="max-w-sm py-4 px-8 bg-white rounded-lg m-2 text-center card drop-shadow my-8">
            <div className="flex justify-center md:justify-center -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={icon} />
            </div>
            <div>
                <h2 className="text-gray-800 text-2xl font-semibold">{props.element.title}</h2>
                <p className="mt-2 text-gray-600">{props.element.description}</p>
            </div>
            {!(props.heading === "COMMODITY (MCX) SERVICES") ? <div className="flex justify-center mt-4">
                <Link to={`${props.element.buttonValue}`} className="text-xl font-medium text-indigo-500">Know More </Link>
            </div> : ""}
        </div>
    )
}

export default ServiceCard