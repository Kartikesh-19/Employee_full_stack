import mongoose from "mongoose";
import PostEmployeesSchema from "../models/postEmployees.js";

export const getEmployees = async (req, res) => {
    try {
        const postEmployees = await PostEmployeesSchema.find();
        console.log('postEmployees', postEmployees)
        res.status(200).json(postEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
export const createEmployees = async (req, res) => {
    try {
        const body = req.body;
        console.log('body',body)
        const newData = new PostEmployeesSchema(body)
        await newData.save()
        return res.status(200).send('Saved Sucessfully');
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};
export const updateEmployees = async (req, res) => {
    try {
        const body = req.body;
        const { _id } = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No details with this id')
        const update = await PostEmployeesSchema.findByIdAndUpdate(_id, body, { new: true });
        res.json(update)
        // return res
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};
export const deleteEmployees = async (req, res) => {
    try {
        const { id } = req.body; // Use req.params to get the value of the 'id' parameter
        const deletedData = await PostEmployeesSchema.findByIdAndDelete(id);
        
        if (!deletedData) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        return res.status(200).send('Deleted Saved Sucessfully');

    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};