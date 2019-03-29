const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const DirectionSchema = new Schema({

    address:{
        type: String,
        required: true,
    },
    num_ext:{
        type: String,
    },
    num_int:{
        type: String,
    },
    country:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zip_code:{
        type: int,
        required: true
    },
    user:{
        type: types.ObjectId,
        ref: "users"
    },

},{"collection":"direcctions", "timestamps": true})


mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

module.exports = mongoose.model("direcctions", DirectionSchema);