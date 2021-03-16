import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PlayerList = (props) => {
        const [allPlayers, setAllPlayers] = useState([]);
    
        useEffect(() => {
            axios
                .get('http://localhost:8000/api')
                .then((res) => {
                    console.log(res.data);
                    setAllPlayers(res.data);
                })
                .catch((err => {
                    console.log(err);
                }))
        }, [])
    
    const deletePlayer = (id) => {
        axios.delete('http://localhost:8000/api/' + id)
        .then((res) => {
            const deletedPlayer = res.data;
            console.log(deletedPlayer);
            const filteredPlayers = allPlayers.filter((player) => player._id !== id);
            setAllPlayers(filteredPlayers);
        });
    }

    
    return (
        <div>
            {props.players.map((player, idx)=>{
                return <p key={idx}>{player.name}, {player.prefPos}
                    <button onClick={(e)=>{deletePlayer(player._id)}}>Delete Player</button>
                    </p>
            })}
        </div>
    );
};

export default PlayerList;