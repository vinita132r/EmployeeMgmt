<<<<<<< HEAD:server/Controllers/Updatenotifycontroller.js
const Updatenotify = require("../Models/Updatenotifyschema");

const DailyUpdate = require('./models/dailyUpdate'); // adjust path accordingly
const Notification = require('./models/Notification'); // adjust path accordingly

const verifyupdate = async (req, res) => {
  const { pid } = req.params;

  try {
    const updated = await DailyUpdate.findByIdAndUpdate(
      pid,
      { 
        status: 'verified', 
        verifiedat: new Date()
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Daily update not found' });
    }

    // Create notification for the employee
    const message = `Your daily update on ${new Date(updated.updatedate).toLocaleDateString()} has been verified by the admin.`;
    await Notification.create({
      userid: updated.employeeid,
      message,
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = { verifyupdate};


=======
const Updatenotify = require("../Models/Updatenotifyschema");

const DailyUpdate = require('./models/dailyUpdate'); // adjust path accordingly
const Notification = require('./models/Notification'); // adjust path accordingly

const verifyupdate = async (req, res) => {
  const { pid } = req.params;

  try {
    const updated = await DailyUpdate.findByIdAndUpdate(
      pid,
      { 
        status: 'verified', 
        verifiedat: new Date()
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Daily update not found' });
    }

    // Create notification for the employee
    const message = `Your daily update on ${new Date(updated.updatedate).toLocaleDateString()} has been verified by the admin.`;
    await Notification.create({
      userid: updated.employeeid,
      message,
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = { verifyupdate};


>>>>>>> 61ec3471 (second commit):EmployeeDetails Database/Controllers/Updatenotifycontroller.js
