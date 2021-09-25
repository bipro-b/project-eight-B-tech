import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('/teamData.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div className="row container mt-5">
            <div className="col-10">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        teams.map(team => <Member key={team.id} team={team}  ></Member>)
                    }
                </div>


            </div>
            <div className="col-2">
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Team;