const express = require('express')
const locationService = require("../../services/Location");

module.exports = {
    // test rest controller
    async test(req, res) {
        res.send("success");
    },
    async store(req, res) {
        const { location, description, beginX, beginY, endX, endY } = req.body;
        try {
            //create and store the new staff
            const task = await locationService.createNewLocation({
                location, description, beginX, beginY, endX, endY
            });
            // console.log(task);

            res.status(201).json({ success: `New location created!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },
    async fetch(req, res) {
        try {
            //fetch data for staff 
            const location = await locationService.getAllLocation();
            console.log(location);
            res.status(200).json(location);
            // res.status(201).json({ success: `get all staff success!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },
};
