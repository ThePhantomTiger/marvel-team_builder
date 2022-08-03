import React from 'react'
import './CharacterCard.css'


function CharacterCard({ onClick, id, name, description, image }) {
    return (
        <div onClick={onClick} className="characterCard">
            <div className="characterCard__loadingDiv"></div>
            <img alt="character_image" src={image} loading="lazy"></img>
            <div className="characterCard__textinfo">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default CharacterCard