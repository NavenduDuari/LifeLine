const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        unique: true
    },
    bloodGroup:{
        type:String,
        require:[true,'Blood group is required']
    },
    contact:{
        type:String,
        required:[true,'Contact no. is required']
    }
});


const donorModel=mongoose.model('Donor',donorSchema);

module.exports = donorModel;
