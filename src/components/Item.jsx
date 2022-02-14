import React from 'react'

function Item({description,amount}) {
    return (
        <div className="item">
            <p>{description}</p>
            <h4>{amount}</h4>
        </div>
    )
}

export default Item