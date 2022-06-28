import React, {useState,useEffect, useRef} from 'react'
import './messages.scss';
import Conversations from './Conversations'
import Message from './Message'
import axios from 'axios'
import MessageInput from './MessageInput'
import Robot from '../assets/robot.gif'
import {io} from 'socket.io-client';

export default function Messages() {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    
    const [conversations,setConversations] = useState([]);
    const[currentChat,setCurrentChat] = useState(null);
    const [messages,setMessages] = useState([]);
    const socket = useRef();
    const [arrivalMessage,setArrivalMessage] = useState(null);
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        });
    },[]);
    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)  &&
        setMessages((prev) => [...prev,arrivalMessage]);
    },[arrivalMessage,currentChat])
    useEffect(() => {
        const addUsers = async () => {
            try {
                socket.current.emit("addUser",user?.result._id);
                socket.current.on("getUsers",users => {
                console.log(users);
                })
            }catch(error) {
                console.log(error);
            }
        }
        addUsers();
        
    },[user])
    const handleSendMsg = async(newMessage) => {
        const msg = {
            sender: user.result._id,
            text:newMessage,
            conversationId: currentChat?._id,
        }
        const receiverId = currentChat.members.find(
            (member) => member !== user.result._id
        );
        socket.current.emit("sendMessage", {
            senderId: user.result._id,
            receiverId,
            text:newMessage,
        });

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
            <input  placeholder="Search for partners" className="chatMenuInput"/>
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
