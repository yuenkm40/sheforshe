import express from 'express';
import mongoose from 'mongoose';
import Event from '../models/event.js';
import User from '../models/user.js';
import getCoordsForAddress from './location.js';

export const createEvent = async(req,res) => {

    //Destructure all the properties appropriately
    const {title, description, image, type, address, date, creator} = req.body;
    console.log(req.body.image);

    //Find first the user for the event
    let user;
    try {
        user = await User.findById(creator.result._id);
    } catch(error) {
        throw error;
    }

    // Convert address to lat long
    let coordinates;
    try{
        coordinates = await getCoordsForAddress(address);
    }catch(error){
        throw error;
    }

    // const newEvent = new Event({
    //     title: "sadf",
    //     description:"description",
    //     image:"data:image/jpeg;base64,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",
    //     type: "spotlight",
    //     address: "311 New Upper Changi Road",
    //     date: "FRI, JUN 5 2022, 2:45 PM",
    //     location: { "lat": 1.324592, "lng": 103.9292631 },
    //     creator: "629c3db853732bcd579034af",
    // });

    //Create a new event with the appropriate values passed
    const newEvent = new Event({
        title,
        description,
        image,
        type,
        address,
        date,
        location: coordinates,
        creator: user,
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
