const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
    },
    password: { type: String, required: true },
});

//checking if email exists
userSchema.path("email").validate( function (emailInput) {
    const email = mongoose.model("User").findOne({ email: emailInput });
    return !!email;
}, "Email already exists!");

//checking if passwords match
userSchema.virtual("repeatPassword").set(function (value){
    if(value !== this.password){
        throw new Error("Passwords do not match");
    }
})

userSchema.pre("save", async function (){
    
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});


const User = mongoose.model('User', userSchema);
module.exports = User;

