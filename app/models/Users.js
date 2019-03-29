const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_FACTOR = 10; /* Iteración de hash*/

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    birth_date:{
        type: Date
    },
    gender:{
        type: String,
        enum: ["MALE", "FEMALE"]
    },
    contact:[{
        phone:{
            type: String,
            //required: true,
        },
        email:{
            type: String,
            //required: true,
        }
    }],
    posts:[{
        type: Schema.Types.ObjectId,
        ref: "posts"
    }],
    liked:[{
        type: Schema.Types.ObjectId,
        ref: "posts"
    }],
    profile_image:{
        type: String
    },
    detail_profile:{
        type: String,
        required: true
    },
    radio:{
        type: String
    },
    altitud:{
        type: String
    },
    latitud:{
        type: String
    },
    is_active:{
        type: Boolean,
        default: true
    },
    last_connect:{
        type: Date, default: Date.now
    }

},{"collection":"users", "timestamps": true})

UserSchema.pre("save", function(next){
    let user = this;

    if(!user.isModified("password")) {return next()}

    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next()
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

module.exports = mongoose.model("users", UserSchema);