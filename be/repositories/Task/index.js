const db = require("../../models");

module.exports = {
    async fetch() {
        try {
            const task = await db.Task.findAll();
            console.log(task);
            return task;
        } catch (error) {
            console.log(error);
        }
    },
    async create(taskInfo) {
        try {
            const task = await db.Task.create({
                title: taskInfo['title'],
                staff_id: taskInfo['selectedStaff'],
                location_id: taskInfo['selectedLocation'],
                vehicle_id: taskInfo['selectedVehicle'],
                note: taskInfo['note'],
                time: taskInfo['startDate'],
            });
            // console.log(task);
        } catch (error) {
            console.log(error);
        }
    },
};