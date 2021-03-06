import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/message.js';

export const createMessage = async(req,res) => {
    const newMessage = new Message(req.body);
    try{
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getMessages = async(req,res) => {
    const {conversationId} = req.params;
    try{
        const messages = await Message.find({
            conversationId: conversationId,
        });
        res.status(200).json(messages);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
};