/**
 * Created by feng.song on 24/07/2016.
 */
'use strict';

describe('myApp component test', function() {
    beforeEach(module('myApp'));
    describe('people list component', function(){

        it('With heading People Search', function() {
                var element = $compile("<people-list></people-list>")($rootScope);
                expect(element.html()).toContain("People Search");
        });
    })
});