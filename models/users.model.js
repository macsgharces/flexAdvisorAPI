const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {type: String, required: true},
    fullname: {type: String, required: true},
    password: {type: String, required: true},
    institutionID:{type: String, required: true},
    roles: { type: String, required: true },
    program: { type: String },
    assignedDir: {type: String},
    assignedAdv: {type: String},
    assignedStu: [],
    classPerSemester: {type: String},
    IEP: [],
    IEPstatus: {type: Boolean },
    classPerSemester: {type: Number},
    classesTaken: {type: Number},
    messageThread: [],

}, {
    timestamps: true,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;