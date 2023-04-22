const express = require('express')
const TaskService = require("../../services/Task");

module.exports = {
    // test rest controller
    async test(req, res) {
        res.send("success");
    },
    async store(req, res) {
        // const { title, selectedStaff, selectedLocation, selectedVehical, note, startDate } = req.body;
        const title = req.body.title;
        const selectedStaff = req.body.selectedStaff['value'];
        const selectedLocation = req.body.selectedLocation['value'];
        const selectedVehicle = req.body.selectedVehicle['label'];
        const startDate = req.body.startDate;
        const note = req.body.note;
        try {
            //create and store the new staff
            const task = await TaskService.createNewTask({
                title, selectedStaff, selectedLocation, selectedVehicle, note, startDate
            });
            // console.log(task);

            res.status(201).json({ success: `New staff created!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },
    async fetch(req, res) {
        try {
            //fetch data for staff 
            const task = await TaskService.getAllTask();
            console.log(task);
            res.status(200).json(task);
            // res.status(201).json({ success: `get all staff success!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },

    // async edit(req, res) {
    //     const { name, position, phone, address } = req.body;
    //     console.log(name, position, phone, address);
    //     try {
    //         //create and store the new staff
    //         const staff = await TaskService.createNewStaff({
    //             name, position, phone, address
    //         });
    //         console.log(staff);

    //         res.status(201).json({ success: `New staff created!` });
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json({ message: err.message });
    //     }
    // },
};
