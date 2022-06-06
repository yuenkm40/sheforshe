import React, {useState,useEffect} from 'react'
import './messages.scss';
import Conversations from './Conversations'
import Message from './Message'
import axios from 'axios'
import MessageInput from './MessageInput'
import Robot from '../assets/robot.gif'

export default function Messages() {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    
    const [conversations,setConversations] = useState([]);
    const[currentChat,setCurrentChat] = useState(null);
    const [messages,setMessages] = useState([]);
    const handleSendMsg = async(newMessage) => {
        const msg = {
            sender: user.result._id,
            text:newMessage,
            conversationId: currentChat?._id,
        }
        try{
            const res = await axios.post('http://localhost:5000/messages/',msg);
            setMessages([...messages, res.data]);
        }catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get('http://localhost:5000/conversations/' + user?.result._id);
                setConversations(res.data);
            
            } catch(error) {
                console.log(error);
            }
        };
        getConversations();
    },[user.result._id])
    console.log(currentChat);
    console.log(currentChat?._id);
  
   useEffect(() => {
       const getMessages = async() => {
           try{
            const res = await axios.get('http://localhost:5000/messages/' + currentChat?._id);
            setMessages(res.data);
           }catch(error) {
               console.log(error);
           }
           
       }
       getMessages();
   })
   console.log(messages);
  return (
    <div className="messages">
      <div className = "chatMenu">
        <div className = "chatMenuWrapper">
            <input  placeholder="Search for mentors" className="chatMenuInput"/>
            {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                <Conversations conversations={c} currentUser = {user}/>
                </div>
            ))}
        </div>
      </div>

      <div className="chatBox">
          <div className="chatBoxWrapper">
          {currentChat ?
          <>
            <div className="chatBoxTop">
            {messages.map((m) => (
                <Message message={m} own={m.sender === user.result._id}/>
            ))}
              
            </div>
            <MessageInput  handleSendMsg = {handleSendMsg} /> 
            </> :<div className="welcome">
            <img src={Robot} alt=""/>
            <h3>Open a conversation to start a chat!</h3>
            </div>}
          </div>
      </div>
    </div>
  )
}
