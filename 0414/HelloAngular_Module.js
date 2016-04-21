/**
 * Created by renqu on 2016/4/13.
 */
var myModule = angular.module('HelloAngular',[]);

myModule.controller('HelloAngular',['$scope',function($scope){
  $scope.greeting = {
    text:'quinn '
  }
}]);

myModule.directive('hello',function(){
  return {
    restrict:'E',
    template:'<div>ai7hoo</div>',
    replace:true
  }
});