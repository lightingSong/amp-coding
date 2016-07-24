/**
 * Created by feng.song on 24/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    name: String
})

var People = mongoose.model('People', peopleSchema);

/* generate data */

var list =['sean','hayley','lucy','eric','yaw'];

list.forEach(function(value){
    new People({name: value}).save();
})

module.exports = People;