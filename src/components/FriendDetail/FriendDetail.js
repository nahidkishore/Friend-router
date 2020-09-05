import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const {friendId}= useParams();
  const [friend, setFriend]=useState({});
  useEffect(() =>{
    const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(response =>response.json())
    .then(data => setFriend(data));
  },[])
  return (
    <div>
      <p>This is friend Details components: {friendId}</p> 
     <h3>name:{friend.name}</h3>
     <p>Email{friend.email}</p>
     <p>Phone: {friend.phone}</p> 
     <p>Website: {friend.website}</p>     
    </div>
  );
};

export default FriendDetail;