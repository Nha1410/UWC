const taskRepo = require("../../repositories/Task");

module.exports = {
    async getAllTask() {
        const task = await taskRepo.fetch();
        return task;
    },
    async createNewTask(taskInfo) {
        //create and store the new task
        console.log(taskInfo);
        const task = await taskRepo.create({
            ...taskInfo,
        });
        return task;
    },
};