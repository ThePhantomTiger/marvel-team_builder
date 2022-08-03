import React, { useEffect, useState } from 'react'
import "./CharacterAdder.css"
import positions from '../data/positions.js'
function CharacterAdder(props) {


    // Create State

    const [selectedPosition, setSelectedPosition] = useState();
    const [positionCounts, setPositionCounts] = useState(null);


    // Get Props
    const character = props.character;
    const { name, image } = { ...character };
    const description = character?.description !== "" ? character.description : "No Description Available";
    const setIsOpen = props.isOpenSetter;
    const [team, setTeam] = [props.team, props.setTeam];
    const [count, setCount] = [props.count, props.setCount];
    console.log(props);



    let hasTwo = [];
    if (positionCounts) {
        hasTwo = Object.entries(positionCounts).filter(position => {
            return positions[positionCounts[0]] !== 1 && position[1] >= 2;
        });
    }



    useEffect(() => {
        const tPositionCounts = {};
        team.forEach((member) => {
            const position = member.position;
            const current = tPositionCounts[position];
            if (current === undefined) {
                tPositionCounts[position] = 1;
            } else {
                tPositionCounts[position] += 1;
            }
        });
        setPositionCounts(tPositionCounts);

    }, [team])





    return (
        <div className="characterAdder">
            <div className="characterAdder__imageDisplay">
                <img alt="character_image" src={image} loading="lazy"></img>
            </div>
            <div className="characterAdder__formAndText">
                <div className="characterAdder__text">
                    <h1>Name: {name}</h1>
                    <h1>Description:</h1>
                    <p>{description}</p>
                </div>



                <div className="characterAdder__form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const field = e.target.children[2];
                        const position = field.value;
                        setTeam(oldTeam => [...oldTeam, { character, position, "id": count }]);
                        setCount(count => count + 1);

                        setIsOpen(false);



                    }}>
                        <label for="position">Choose Player Position</label>
                        <br></br>
                        <select id="position" name="position" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
                            {


                                Object.entries(positions).filter(position => {

                                    if (positionCounts && position[0] in positionCounts) {

                                        const current = positionCounts[position[0]];
                                        const max = position[1];


                                        if (max <= current) {
                                            return false;
                                        }

                                        if (hasTwo.length > 0 && position[0] !== "Goalkeeper") {
                                            return false;
                                        }


                                    }
                                    return true;

                                }).map((position) => {
                                    return <option key={position[0]} value={position[0]} > {position[0]}</option>
                                })}
                        </select>
                        <br></br>
                        <input type="submit" value="Add"></input>
                        <input id="exitBtn" type="button" value="Exit" onClick={() => setIsOpen(false)}></input>


                    </form>
                </div>



            </div>
        </div >
    )
}

export default CharacterAdder