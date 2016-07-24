/**
 * Created by feng.song on 21/07/2016.
 */
'use strict';
angular.module('myApp')
    .factory('People', ['$log', '$http',function ($log,$http) {

        return {
            getPeople: function() {
                // the query code here.
                return $http.get('peoplelist').then(function(response){
                    return response.data;
                });
            },
            getPeopleByKeyword: function(keyword) {
                // the query code here.
                console.log(keyword);
                return $http.post('peoplelist',keyword).then(function(response){
                    return response.data;
                });
            }
        };

    }])