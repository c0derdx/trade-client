import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection(props) {
    return (
        <div className="bg-white">
            <section className="container items-center px-2 pb-2 mx-auto mt-20 lg:flex max-w-screen-xl">
                <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold">
                        WE MAKE FROM THE BEST
                    </h1>
                    <p className="max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    From Equity to Commodity segment our analysts at Equitas Research Investment Advisor use their knowledge and expertise with the latest technical software for predicting the movement in financial market on a timely basis with remarkable accuracy.
                    </p>
                    <li>Our Vision is to be the most preferred choice</li>
                    <li>Our Mission is to do the successful implementation of our strategy.</li>
                    <li>Our Goal is to offer you more and more opportunities to earn more.</li>
                    <li>Our Value is in continuous improvement in our methods.</li>
                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link
                            to="/billing"
                            className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={props.image}
                        className="w-full mx-auto mt-6 sm:w-10/12 lg:w-full"
                    />
                </div>
            </section>
        </div>
    )
}

export default HeroSection