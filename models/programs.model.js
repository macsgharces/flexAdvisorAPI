const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema ({
    program_director: {type: String, required: true},
    program_name: {type: String, required: true},
    academicID: { type: String, required: true },
    class_list: []
}, {
    timestamps: true,
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;