import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div className="friend">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show Details of {id}</Link>
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;