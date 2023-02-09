import React from 'react'
import { useParams } from 'react-router-dom'
import { cashDb, futureDb, mcxDb } from '../db/knowMoreDb'
import Cover from './Cover';
import PricingCard from './PricingCard';


function KnowMore() {
    const { id } = useParams();
    console.log(id);
    let data = cashDb.get(id);
    if (data == undefined) {
        if (mcxDb.get(id) != undefined) {
            data = mcxDb.get(id);
        }else if (futureDb.get(id) != undefined) {
            data = futureDb.get(id);
        }
    }
    
    console.log(data.cardTitle);

    return (
        <>
            <Cover
                name="Know More"
            />
            <div className='flex justify-center w-full mx-auto max-w-screen-xl knowmore__container'>

                <div className='flex flex-col w-1/2'>

                    <h1 className='text-4xl font-bold leading-loose'>{data.title}</h1>
                    <p className=''>{data.caption}</p>
                    <h1 className='text-4xl font-bold leading-loose'>Services Features</h1>
                    <ul>

                        {
                            data.list1.map(item => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                    <h1 className='text-4xl font-bold leading-loose'>Services Features</h1>
                    <ul>
                        {
                            data.list2.map(item => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='flex items-center w-1/2 justify-items-center'>

                    <PricingCard
                        title={data.cardTitle}
                        cardData={data.cardData}
                        buy = {data.buy}
                    />
                </div>
            </div>
        </>
    )
}

export default KnowMore