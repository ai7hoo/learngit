angular.module('myApp',[]).controller('myCtrl',function($scope){
    $scope.msg = [{
        'name':'ai7hoo',
        'age':26
    },{
        'name':'ai7hoo',
        'age':26
    },{
        'name':'ai7hoo',
        'age':26
    },{
        'name':'ai7hoo',
        'age':26
    },];
    $scope.sayHello = function(){
        return $scope.msg[0].name;
    }
});