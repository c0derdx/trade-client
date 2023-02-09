import React from 'react'
import Cover from './childComponents/Cover'
import ServiceCardContainer from './childComponents/ServiceCardContainer'
import { cash, future, mcx } from './db/serviceDB'

function Services() {

    return (
        <>
            <Cover
                name="Services"
            />
            <ServiceCardContainer
                data = {cash}
                title = {"SMART EQUITY CASH SERVICES"}
            />
            <ServiceCardContainer
                data = {future}
                title = {"SMART EQUITY FUTURE SERVICES"}
            />
            <ServiceCardContainer
                data = {mcx}
                title = {"COMMODITY (MCX) SERVICES"}
            />
        </>
    )
}

export default Services