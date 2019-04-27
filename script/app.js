var app = angular
    .module('mainApp', ['ngRoute'])


    .controller('mainController', function($scope){
        $scope.products = products;
        $scope.productsShow = 10;
        $scope.productsTotal = $scope.products.length;

        $scope.sortColumn = "productname";
        $scope.reversesort = false;

        $scope.sortData = function(column) {
            $scope.reverseSort = ($scope.sortColumn == column) ?  !$scope.reverseSort : false;
            $scope.sortColumn = column;

        }
            $scope.getSortClass = function(column) {
                
                if ($scope.sortColumn == column) {
                    return $scope.reverseSort ? 'down-arrow' : 'up-arrow';
                }
                return '';
            }
            $scope.search = function(item) {
                if($scope.searchText == undefined) {
                    return true;
                }
                else {
                    if(
                        item.company.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                    ) {
                        return true;
                    }
                }

                return false;
            }
    });