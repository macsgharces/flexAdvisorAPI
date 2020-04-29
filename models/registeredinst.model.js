const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const registeredInst_Schema = new Schema ({
    institutionName: {type: String},
    academicID: {type: String},
    Users: [],
}, {
    timestamps: true,
});

const Registered_Institution = mongoose.model('Registered_Institution', registeredInst_Schema);

module.exports = Registered_Institution