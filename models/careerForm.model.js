const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CareerFormSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    position: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    selected: {
        type: Boolean
    },
    rejected: {
        type: Boolean
    }
});
const Career = mongoose.model('career', CareerFormSchema);

module.exports = Career;
