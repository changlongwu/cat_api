
import { useState } from 'react'

const AnimalCard = ({callAPI, catName,catOrigin,currenImage, addToBanList}) =>{
    return (
        
        <div className="AnimalCard">


            <h2>Trippin' on Cats</h2>
            <h4>Discover cats from your wildest dreams!</h4>
            <h5>😺😸😹😻😼😽🙀😿😾</h5>

            <div className="card-container">
                <h3>{catName}</h3>
                {/* <h3>{catOrigin}</h3> */}
                {catOrigin && <button
                onClick={()=>addToBanList(catOrigin)}
                >{catOrigin}</button>}

                {currenImage && <img src={currenImage} alt="" width='500px'/>}

                <button className="discover-button" onClick={callAPI}>🔀 Discover!</button>
            </div>

        </div>

    )
}

export default AnimalCard;