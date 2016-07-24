/**
 * Created by feng.song on 21/07/2016.
 */
var peopleCtr = require("../controller/people.server.controller.js")
module.exports = function (app) {
    app.route('/peoplelist')
        .get(function(req,res){
            return peopleCtr.list(req,res)
        })
        .post(function(req,res){
            return peopleCtr.getByKeyword(req,res);
        })
};