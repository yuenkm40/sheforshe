import React, {useState, useEffect} from 'react'
import './conversations.scss'
import Lisa from '../assets/Lisa.jpg'
import axios from 'axios'
export default function Conversations({conversations, currentUser}) {
    const [user,setUser] = useState("");
    useEffect(() => {
        const friendId = conversations.members.find((m) => m!== currentUser.result._id);
     
        const getUser = async() => {
            try{
                const res = await axios.get('http://localhost:5000/user/' + friendId);
                setUser(res.data);
            }catch(error) {
                console.log(error);
            }
            
        };
        getUser();
    },[currentUser,conversations,user])
  return (
    <div className="conversations">
      <img className="conversationImg" src={Lisa} alt=""/>
      <span className="conversationName">{user?.name}</span>
    </div>
  )
}
