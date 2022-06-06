import express from 'express';
import mongoose from 'mongoose';
import Conversation from '../models/conversation.js';

export const createConversation = async(req,res) => {
    const newConversation = newConversation = new Conversation ({
        members: [req.body.senderId, req.body.receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getConversations = async (req,res) => {
    const { userId } = req.params;
    try {
        const conversation = await Conversation.find({
        members: {$in: userId},
    });

    console.log(conversation);
    res.status(200).json(conversation);
}catch(error) {
    res.status(500).json({message: error.message});
   
}
};