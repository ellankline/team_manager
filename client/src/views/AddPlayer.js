import React from 'react';
import PlayerForm from '../components/PlayerForm';
import { Link } from '@reach/router';

const AddPlayer =  () => {
    return (
        <div>
            <h1>Manage Players</h1>
            <hr />
            <div>
            <Link to="/players/list">List</Link><Link to="/players/addplayer">Add Player</Link>
                <hr />
                <PlayerForm/>
            </div>
            
        </div>
    );
};

export default AddPlayer;