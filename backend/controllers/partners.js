import express from 'express';
import mongoose from 'mongoose';
import PostDesc from '../models/postDesc.js';

export const getPartners = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 8;
        //get starting index of every page
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await PostDesc.countDocuments({});

        const postPartners = await PostDesc.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
        console.log("getting partners");
        // console.log(postPartners);
        res.status(200).json({ data: postPartners, currentPage:Number(page), numberOfPage: Math.ceil(total/LIMIT)});
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getPartnersBySearch = async(req,res) => {
    const {searchQuery, tags} = req.query
    try {
        const name = new RegExp(searchQuery,'i');

        const partners = await PostDesc.find({ $or: [ {name}, {tags: { $in: tags.split(',') }}]});
        res.json({data:partners});
    }catch(error) {
        res.status(404).json({message: error.message})
    }
};

export const getPartner = async(req, res) => {
    const { id } = req.params;
    try {
        const partner = await PostDesc.findById(id);
        res.status(200).json(partner);
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