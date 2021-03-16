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
    const {removeFromDom} = props;
    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/' + playerId)
        .then((res) => {
            removeFromDom(playerId)
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