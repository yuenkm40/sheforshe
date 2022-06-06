import React, {useState}  from 'react'
import './messageinput.scss'
import Picker from 'emoji-picker-react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

export default function MessageInput({handleSendMsg}) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event,emoji) => {
        let msg = newMessage;
        msg += emoji.emoji;
        setNewMessage(msg);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage.length>0) {
            handleSendMsg(newMessage);
            setNewMessage("");
        }
        
    }
  return (
    <div className="messageInput">
        <div className="button-container">
            <div className="emoji">
            <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
            
            </div>
            {
                showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>
            }
        </div>
            <textarea className="chatMessageInput" 
            placeholder="Please write your message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <button className="chatSubmitButton" onClick={handleSubmit}><IoMdSend/></button>
    </div>
  )
}
