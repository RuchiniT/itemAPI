import mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel.js';

const items = mongoose.model('items', ContactSchema);

export const addNewItems = (req, res) => {
    const newItems = new items(req.body);
    
    newItems.save()
    .then((items) => res.json(items))
    .catch((err) => res.status(500).send(err));
};

export const getItems = (req, res) => {
    items.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
};

export const getItemsWithID = (req, res) => {
    items.findById(req.params.itemId)
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
};

export const updateItems = (req, res) => {
    items.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true})
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
};

export const deleteItems = (req, res) => {
    items.findByIdAndDelete({_id: req.params.itemId})
        .then(res.json({message: 'Successfully deleted item'}))
        .catch((err) => res.status(500).send(err));
};
