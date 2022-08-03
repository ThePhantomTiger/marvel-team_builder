import React from 'react'
import "./MemberDisplayer.css"
function MemberDisplayer({ position, id, character, setTeam }) {

    const { image, name, description } = { ...character };

    const handleClick = () => {
        console.log(`Current ID IS ${id}`);
        setTeam(oldTeam => {
            return oldTeam.filter((member) => {
                return member.id !== id;
            })
        });
    }

    return (
        <div className="memberDisplayer">
            <h1>Position: {position}</h1>
            <img src={image} alt="comic-img"></img>
            <div className="memberDisplayer__textarea">
                <h2>Name: {name}</h2>
                <h2>Description:</h2>
                <p>{description}</p>
                <button onClick={handleClick}>Remove From Team</button>
            </div>
        </div>
    )
}

export default MemberDisplayer