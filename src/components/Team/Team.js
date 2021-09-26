import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
const Team = () => {
    const [teams, setTeams] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/teamData.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    const handleChange = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);

    }

    return (
        <div className="row container mt-5">
            <div className="col-10">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        teams.map(team => <Member handleChange={handleChange} key={team.id} team={team}  ></Member>)
                    }
                </div>


            </div>
            <div className="col-2">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Team;