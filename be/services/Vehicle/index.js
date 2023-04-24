const vehicleRepo = require("../../repositories/Vehicle");

module.exports = {
    async getVehicles() {
        const vehicle = await vehicleRepo.fetch();
        return vehicle;
    },
    async newVehicle(vehicle) {
        await vehicleRepo.create({
            ...vehicle,
        });
    },
};