import { useState } from 'react'

const CatHistory = ({catHistory}) =>{
    return (

        <div className='history-sidebar'>
            
            <h3>Who have we seen so far?</h3>

            {catHistory.map((cat, index) => (
                <div key={index}>
                    <p>{cat.catName}</p>
                    <p>{cat.catOrigin}</p>
                    <img src={cat.catImage} alt={cat.catName} width='50px' />
                </div>
                ))}

        </div>
    )
}

export default CatHistory;

