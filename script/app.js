var app = angular
    .module('mainApp', ['ngRoute', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when("/", {
                templateUrl: "partials/grid.view.html"
            })
            .when("/viewList", {
                templateUrl: "partials/list.view.html"
            })
            .when("/home", {
                controller: "homeController",
                templateUrl: "partials/home/home.view.html",
                controllerAs: "vm"
            })
            .when("/login", {
                controller: "loginController",
                templateUrl: "partials/login/login.view.html",
                controllerAs: "vm"
            })
            .when("/register", {
                controller: "registerController",
                templateUrl: "partials/register/register.view.html",
                controllerAs: "vm"
            })

    })
    .factory("productsGet", function ($http) {
        return {
            products: function () {
                return $http.get("http://localhost:3001/api/products").then(function (response) {
                    return response.data;
                });
            }
        }
    })
    .run(run);

run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
function run($rootScope, $location, $cookies, $http) {
    $rootScope.globals = $cookies.getObject("globals") || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common["Authorization"] = 'Bearer ' + $rootScope.globals.currentUser.token;
    }

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var restrictedPage = $.inArray($location.path(), ["/login", "/register", "/#"]) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        $rootScope.loggedIn = $rootScope.globals.currentUser;
        $rootScope.isLoggedIn();

        if (restrictedPage && !loggedIn) {
            $location.path("/login");
            if ($location.path == restrictedPage && !loggedIn) {
                $location.path("/login");
                console.log($location.path());
            }

            if ($location.path == "/home" && !loggedIn) {
                console.log($location.path());
                console.log("Logged In");
                $location.path("/login");
            }


            console.log(loggedIn);
        }
    })
}




app.controller('mainController', function ($scope, $rootScope, productsGet) {

    $rootScope.isLoggedIn = function () {
        if ($rootScope.loggedIn == undefined) {
            return false;
        } else {
            return true;
        }
    }
    productsGet.products().then(function (data) {
        $scope.products = data;

        // Antal produkter per sida
        $scope.productsShow = 10;
        $scope.productsTotal = $scope.products.length;

        //sortering och sök
        $scope.sortColumn = "productname";
        $scope.reversesort = false;

        $scope.sortData = function (column) {
            //RESULTAT KAN HAMNA UTANFÖR SYNLIGA LISTAN VID REVERSESORT
            // $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        // $scope.getSortClass = function (column) {

        //           if ($scope.sortColumn == column) {
        //               return $scope.reverseSort ? 'down-arrow' : 'up-arrow';
        //         }
        //        return ''; 
        // }

        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (
                    item.company.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                ) {
                    return true;
                }
            }
            return false;
        }

        //Grid eller listvy
        $scope.cardActive = true;

        //Stjärnor i rating
        var ratingMax = 5;

        $scope.getRepeater = function () {
            return new Array(ratingMax);
        };

        $scope.getNumber = function (num) {
            return new Array(num);
        }

    });
})