import express from 'express';
import mongoose from 'mongoose';
import Event from '../models/event.js';
import User from '../models/user.js';
import getCoordsForAddress from './location.js';

export const createEvent = async(req,res) => {

    //***NEED TO DO*** destructure all the properties appropriately
    const {title, description, image, type, address, date, creator} = req.body;

    //Find first the user for the event
    let user;
    try {
        user = await User.findById(userId);
    } catch(error) {
        res.status(404).json({message: error.message});
    }

    // Convert address to lat long
    let coordinates;
    try{
        coordinates = await getCoordsForAddress(address);
    }catch(error){
        return next(error);
    }

    //***NEED TO DO*** create a new event with the appropriate values passed
    const newEvent = new Event({
        title,
        description,
        image,
        type,
        address,
        date,
        location: coordinates,
        creator
    });

    try{
        //Creation of session to start a transaction following the properties of ACID
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await newEvent.save({ session: sess });
        //Adding the created event to user to establish relation between the two models
        user.events.push(newEvent);
        await user.save({session: sess});
        await sess.commitTransaction();
        
    }catch(error) {
        res.status(500).json({message: error.message});
    }

    res.status(200).json(newEvent);
};

export const getEvents = async(req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getEvent = async(req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        res.status(200).json(event);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
