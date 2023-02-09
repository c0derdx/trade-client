import React from 'react'

function ProfileCard(props) {
    return (
        <div className="max-w-sm py-4 px-8 bg-white rounded-lg m-2 text-center card drop-shadow my-8">
            <div>
                <h2 className="text-gray-800 text-2xl font-semibold">{props.title}</h2>
                <p className="mt-2 text-gray-600">{props.detail}</p>
            </div>
            {/* {!(props.heading === "COMMODITY (MCX) SERVICES") ? <div className="flex justify-center mt-4">
                <Link to={`${props.element.buttonValue}`} className="text-xl font-medium text-indigo-500">Know More </Link>
            </div> : ""} */}
        </div>
    )
}

export default ProfileCard