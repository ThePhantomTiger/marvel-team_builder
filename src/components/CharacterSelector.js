import React, { useState, useEffect } from 'react'
import requestMarvelData from '../utility/getMarvelCharacterData.js'
import formMarvelImageURL, { sizes } from '../utility/formMarvelImageURL.js'


import "./CharacterSelector.css"
import CharacterCard from './CharacterCard'
import CharacterAdder from './CharacterAdder.js'



function CharacterSelector({ team, setTeam }) {


    const [page, setPage] = useState(0);
    const [characters, setCharacters] = useState(null);
    const [addNewCharacter, setAddNewCharacter] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [count, setCount] = useState(0);

    const pageSize = 5;
    const limit = 5;


    const format_characters = (char_data) => {
        const data = char_data.map(character => {
            const url = formMarvelImageURL(character.thumbnail, sizes.uncanny);
            const [name, id, description] = [character.name, character.id, character.description];
            return {
                'image': url,
                'name': name,
                'id': id,
                'key': id,
                'description': description
            };
        })
        return data;

    }

    const onBtnClick = (increment_amount) => {
        setPage(Math.max(page + increment_amount, 0));
    }

    useEffect(() => {
        const getData = async () => {
            const offset = page * pageSize;
            const response = await requestMarvelData({ "offset": offset, "limit": limit });

            const count = response?.data?.data?.count;
            if (count === undefined || count === 0) {
                return;
            }

            const data = response?.data?.data?.results;
            const formatted_result = format_characters(data);
            setCharacters(formatted_result);

        }

        getData();
    }, [page, setCharacters])

    const handleClick = (addNew, character) => {
        if (team.length >= 5) {
            return
        }
        setAddNewCharacter(addNew);
        setSelectedCharacter(character);
    }

    return characters && (
        <div className='characterSelectorContainer'>
            <h1>Select Your Team Members</h1>
            <div className="characterSelector">
                <button onClick={() => { onBtnClick(-1) }}>&lt;</button>
                {characters.map(character => {
                    return <CharacterCard onClick={(() => { handleClick(true, character) })} {...character} />
                })}

                <button onClick={() => { onBtnClick(1) }}>&gt;</button>

            </div>
            {addNewCharacter && <CharacterAdder count={count} setCount={setCount} isOpenSetter={setAddNewCharacter} character={selectedCharacter} team={team} setTeam={setTeam} />}


        </div>

    )
}

export default CharacterSelector