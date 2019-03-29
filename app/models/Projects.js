const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({

    project_name:{
        type: String,
        required: true,
    },
    image[{
        type: String,
        required: true,
    }],
},{"collection":"projects", "timestamps": true})


mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

module.exports = mongoose.model("projects", ProjectsSchema);