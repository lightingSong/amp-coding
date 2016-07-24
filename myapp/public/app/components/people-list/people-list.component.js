/**
 * Created by feng.song on 20/07/2016.
 */
angular.
    module('myApp').
    component('peopleList', {
        templateUrl: 'components/people-list/people-list.template.html',
        bindings: {
            people: '=',
            onSearch: '&'
        },
        controller: function(){
            var ctrl = this;
            ctrl.search = function(){
                ctrl.onSearch({keyword: ctrl.keyword});
            }
        }
    });