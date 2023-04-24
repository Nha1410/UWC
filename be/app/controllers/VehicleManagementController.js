const VehicleService = require("../../services/Vehicle");

module.exports = {
    // test rest controller
    async test(req, res) {
        res.send("success");
    },
    async store(req, res) {
        const type = req.body.type;
        const use_for = req.body.use_for;
        const location = req.body.location;
        const status = req.body.status;
        try {
            //create and store the new staff
            const task = await VehicleService.newVehicle({
                type, use_for, location, status
            });
            // console.log(task);

            res.status(201).json({ success: `stored!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },
    async fetch(req, res) {
        try {
            const vehicle = await VehicleService.getVehicles();
            res.status(200).json(vehicle);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    },
};
