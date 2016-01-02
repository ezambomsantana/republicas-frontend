angular.module("myApp").controller("LoginController", [
    '$scope', '$location', '$http',
    function ($scope, $location, $http) {

        $scope.login = function () {
            var data = $.param({
                json: JSON.stringify({
                    email: $scope.email,
                    password: $scope.password
                })
            });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-E3 Allow-Origin': '*'
                }
            }

            $http
                .post
                (
                    "http://localhost:8080/users/login",
                    data,
                    config
                )
                .success(function (data, status) {
                    console.log(response.data);
                    $location.path("priview");
                    //$location.path("main");
                })
                .error(function (data, status) {
                    $scope.message='Erro ao realizar login';
                })
        }
    }
])
;