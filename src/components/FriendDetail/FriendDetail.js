import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] =  useState({});
    const {name, email, phone, website} = friend;
    useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
    .then(res => res.json())
    .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h3>Friend Details: {friendId}</h3>
            <h5>{name}</h5>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetail;