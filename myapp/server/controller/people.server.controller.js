/**
 * Created by feng.song on 24/07/2016.
 */
var People = require('../model/people.server.model.js');

exports.list = function(req,res){
    var query = People.find();
    query.exec(function (error, results) {
        if(error) throw error;
        res.send(results);
    });
}

exports.getByKeyword = function(req,res){
    var query = People.find();
    var keyword = req.body.keyword;
    if(keyword.length > 0){
        query.where({name: keyword});
    }
    query.exec(function (error, results) {
        console.log(error);
        if(error) throw error;
        console.log(results)
        res.send(results)
    });
}