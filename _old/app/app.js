// Define the `cvApp` module
var cvApp = angular.module('cvApp', []);

// Define the `cvApp` controller on the `cvApp` module
cvApp.controller('cvAppController', function cvAppController($scope) {
    params = {};
    window.location.search.replace(/\?/,'').split('&').map(function(o){ params[o.split('=')[0]]= o.split('=')[1]});

    if(params.language == undefined)
        $scope.language = language["pt-BR"];
    else
        $scope.language = language[params.language];
});