const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type: String, require: false},
        email: {type: String, require: true},
        password: {type: String, require: true},
        membership: {type: Number, require: false},
        postalCode: {type: Number, require: false},
    },{
        timestamps: true
    }
)

const User = mongoose.model ('user', userSchema);

module.exports = User;