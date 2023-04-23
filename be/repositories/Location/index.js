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
    async create(locationInfo) {
        try {
            const task = await db.Location.create({
                ...locationInfo,
            });
            // console.log(task);
        } catch (error) {
            console.log(error);
        }
    },
};