import React from 'react'
import { useState } from 'react';

function Card(props) {    
    return (
        <div className="max-w-xs py-4 px-8 bg-white rounded-lg m-2 text-center card drop-shadow">
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
                <p className="mt-2 text-gray-600">{props.detail}</p>
            </div>
            {/* <div className="flex justify-center mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
            </div> */}
        </div>
    )
}

export default Card