import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { cashPriceDb, futurePriceDb, mcxPriceDb } from './db/knowMoreDb';

function BuyPage() {
    const { id } = useParams();
    console.log(id)
    let data = cashPriceDb.get(id);
    if (data === undefined) {
        if (futurePriceDb.get(id) !== undefined)
            data = futurePriceDb.get(id);
        else
            data = mcxPriceDb.get(id);
    }

    const [amount, setAmount] = useState(0);
    const handleChange = (amt) => {
        setAmount(amt);
    }
    return (
        <>
            <div className="bg-white">
                <section className="container items-center px-2 pb-2 mx-auto mt-20 lg:flex max-w-screen-xl">
                    <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                        <h1 className='text-3xl'>Prices</h1>
                        <ul>
                            {data.cardData.map(item => {
                                return (
                                    <li className='text-2xl'><input type="radio" name='same' onChange={() => handleChange(item.Charges)}></input>{` ${item.name}`}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <img
                            src="https://cdns.webareacontrol.com/prodimages/200-X-200/N/e/NoImageAvailable-C.png"
                            className="w-full mx-auto mt-6 sm:w-10/12 lg:w-full"
                            alt="Image not available"
                            style={
                                {
                                    width: "510px",
                                    height: "340px",
                                    objectFit: "contain"
                                }
                            }
                        />
                        <p className='text-center text-xl'>{`Pay-₹ ${amount}/-`}</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BuyPage