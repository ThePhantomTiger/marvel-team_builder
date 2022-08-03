import React from 'react'
import MemberDisplayer from './MemberDisplayer'
import "./TeamDisplayer.css"
function TeamDisplayer({ team, setTeam }) {


    return (
        <div className="teamDisplayer">
            <h1 className="teamDisplayerHeading">Your Team</h1>
            {
                team.map(teamMember => {
                    return <MemberDisplayer key={teamMember.id} {...teamMember} setTeam={setTeam} />
                })
            }
        </div>
    )
}

export default TeamDisplayer