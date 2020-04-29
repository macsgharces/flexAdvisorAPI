const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema ({
    academicID: {type: String, required: true},
    sysadmin_email: {type: String, required: true},
    school_addr: { type: String, required: true },
}, {
    timestamps: true,
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;