<<<<<<< HEAD:server/Controllers/Dailyupdatecontroller.js
const DailyUpdate = require("../Models/Dailyupdateschema");

const savedailyupdate = async (req, res) => {
    console.log(req.body);

    const employeeid = req.params.pid; // <-- from URL
    let { updatedate, dailyupdate } = req.body;

    updatedate = updatedate ? new Date(updatedate) : new Date();

    const a = new DailyUpdate({ updatedate, dailyupdate, employeeid });

    try {
        const result = await a.save();
        res.status(200).json({
            message: "Submitted daily update successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getallupdates = async (req, res) => {
    try {
        const updates = await DailyUpdate.find().populate('employeeid');
        res.status(200).json(updates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const verifyupdate = async (req, res) => {
    const { pid } = req.params;

    try {
        const updated = await DailyUpdate.findByIdAndUpdate(
            pid,
            { 
              status: 'verified', 
              verifiedate: new Date() // also update verifiedate field
            },
            { new: true }
        ).populate('employeeid', 'empname image');
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add this in your Express router
const getusernotifications= async (req, res) => {
    const { userid } = req.body;

    try {
        const updates = await DailyUpdate.find({
            employeeid: userid,
            status: 'verified'
        }).populate('employeeid', 'empname').sort({ createdAt: -1 });

        res.status(200).json({ data: updates });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = { savedailyupdate,getallupdates,verifyupdate,getusernotifications};


=======
const DailyUpdate = require("../Models/Dailyupdateschema");

const savedailyupdate = async (req, res) => {
    console.log(req.body);

    const employeeid = req.params.pid; // <-- from URL
    let { updatedate, dailyupdate } = req.body;

    updatedate = updatedate ? new Date(updatedate) : new Date();

    const a = new DailyUpdate({ updatedate, dailyupdate, employeeid });

    try {
        const result = await a.save();
        res.status(200).json({
            message: "Submitted daily update successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getallupdates = async (req, res) => {
    try {
        const updates = await DailyUpdate.find().populate('employeeid');
        res.status(200).json(updates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const verifyupdate = async (req, res) => {
    const { pid } = req.params;

    try {
        const updated = await DailyUpdate.findByIdAndUpdate(
            pid,
            { 
              status: 'verified', 
              verifiedate: new Date() // also update verifiedate field
            },
            { new: true }
        ).populate('employeeid', 'empname image');
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add this in your Express router
const getusernotifications= async (req, res) => {
    const { userid } = req.body;

    try {
        const updates = await DailyUpdate.find({
            employeeid: userid,
            status: 'verified'
        }).populate('employeeid', 'empname').sort({ createdAt: -1 });

        res.status(200).json({ data: updates });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = { savedailyupdate,getallupdates,verifyupdate,getusernotifications};


>>>>>>> 61ec3471 (second commit):EmployeeDetails Database/Controllers/Dailyupdatecontroller.js
