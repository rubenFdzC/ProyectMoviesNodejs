const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: "movie", required: false}]
    },{
        timestamps: true
    }
)

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;