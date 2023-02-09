import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6 xl:px-2.5 max-w-screen-xl footer mx-auto">
            <div className="container mx-auto px-0">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-0">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Equitas Research</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Secure your future with smart investments.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <h4 className="text-2xl fonat-semibold text-blueGray-700">CONTACT</h4>
                            <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                                Email :- infoequitasr@gmail.com
                            </h5>
                            <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                                Phone No. :- +91 9109186732
                            </h5>
                            <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                                Shivaji Nagar Ujjain, Madhya Pradesh
                            </h5>
                            {/* <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-0">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-0 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/billing">Billing</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="w-full lg:w-4/12 px-0">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">MIT License</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Terms &amp; Conditions</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2023</span> Equitas Research
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer