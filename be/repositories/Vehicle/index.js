const db = require("../../models");

module.exports = {
    async create(vehicle) {
        try {
            await db.Vehicles.create({
                type: vehicle.type,
                use_for: vehicle.use_for,
                location: vehicle.location,
                status: vehicle.status,
            });
            // console.log(task);
        } catch (error) {
            console.log(error);
        }
    },
    async fetch() {
        try {
            const vehicle = await db.Vehicles.findAll();
            return vehicle;
        } catch (error) {
            console.log(error);
        }
    }
};