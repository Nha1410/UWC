const locationRepo = require("../../repositories/Location");

module.exports = {
    async getAllLocation() {
        const location = await locationRepo.fetch();
        return location;
    },
    async createNewLocation(locationInfo) {
        //create and store the new task
        console.log(locationInfo);
        const task = await locationRepo.create({
            ...locationInfo,
        });
        return task;
    },
};