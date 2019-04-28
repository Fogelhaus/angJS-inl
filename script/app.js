var app = angular
    .module('mainApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "partials/list.view.html"
        })
            .when("/viewGrid", {
                templateUrl: "partials/grid.view.html"
            })
    })


    .factory("productsGet", function ($http) {
        return {
            products: function () {
                return $http.get("http://localhost:5000/api/products").then(function (response) {
                    return response.data;
                });
            }
        }
    })

    .controller('mainController', function ($scope, productsGet) {

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