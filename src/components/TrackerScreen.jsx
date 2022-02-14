import React from 'react'
import { useContext } from 'react/'
import Context from '../Context'

function TrackerScreen() {
    const{income,expense} = useContext(Context)
    const incomeTrans = income[0]
    const expenseTrans = expense[0] 
    return (
        <div className="screen">
            <h2>
                Current Balance<br/>
                {`$${incomeTrans - expenseTrans }`}
                </h2>
            <div className="screen-tracker">
                <h2>
                    income<br/>
                    {incomeTrans}
                </h2>
                <h2>
                    expense<br/>
                    {expenseTrans}
                </h2>
            </div>
        </div>
    )
}

export default TrackerScreen