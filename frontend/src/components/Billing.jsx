import React from 'react'
import Cover from './childComponents/Cover'
import PricingCard from './childComponents/PricingCard'
import PricingCardContainer from './childComponents/PricingCardContainer'
import { cashArr, futureArr, mcxArr } from './db/knowMoreDb'

function Billing() {

    return (
        <>
            <Cover
                name="Billing"
            />
            <PricingCardContainer
                title = "EQUITY CASH"
                data = {cashArr}
            />
            <PricingCardContainer
                title = "EQUITY FUTURE & OPTION"
                data = {futureArr}
            />
            <PricingCardContainer
                title = "COMODITY (MCX) FUTURE & OPTION"
                data = {mcxArr}
            />
        </>
    )
}

export default Billing