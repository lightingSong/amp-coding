/**
 * Created by feng.song on 21/07/2016.
 */
'use strict';
angular.module('myApp')
.controller('PeopleCtr',['$scope','People',function($scope, people){
         people.getPeople().then(function(data){
                $scope.people = data;
         });
        $scope.sort = function(){

        }
        $scope.search = function(searchData){
            people.getPeopleByKeyword({keyword:searchData}).then(function(data){
                console.log(data);
                $scope.people = data;
            })
        }
}]);