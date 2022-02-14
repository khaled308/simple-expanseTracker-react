import React from 'react'
import { useContext } from 'react'
import Context from '../Context'
import Item from './Item'
function History() {
    const {history} = useContext(Context)
    const historyTrack = history[0]
    
    return (
        <div className='history'>
            <h2>Transaction History</h2>
            {
                historyTrack.map((item,index)=><Item description={item.description} amount={item.amount}  key={index}/>)
            }
        </div>
    )
}

export default History