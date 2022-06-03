import express from 'express';
import mongoose from 'mongoose';
import PostDesc from '../models/postDesc.js';

export const getPartners = async (req, res) => {
    try {
        const postPartners = await PostDesc.find().select('name');
        console.log("getting partner");
        console.log(postPartners);
        res.status(200).json(postPartners);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createPartner = async (req,res) => {
    const partner = req.body;
    const newPartner = new PostDesc(partner);
    try{
        await newPartner.save();
        res.status(201).json(newPartner);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}