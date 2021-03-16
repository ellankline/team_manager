import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import PlayerList from '../components/PlayerList';

const Main =  () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    }, []);

    const removeFromDom = id => {
        setPlayers(players.filter(player => player._id !== id));
    };

    return (
        <div>
            <h1>Manage Players</h1>
            <hr />
            <div>
                <Link to="/players/list">List    </Link><Link to="/players/addplayer">     Add Player</Link>
                <hr/>
                {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
            </div>
            
        </div>
    );
};

export default Main;