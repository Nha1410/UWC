const db = require("../../models");

module.exports = {
    async fetch() {
        try {
            const location = await db.Location.findAll();
            console.log(location);
            return location;
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