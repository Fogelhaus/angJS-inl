(function () {

    angular
        .module("mainApp")
        .controller("homeController", homeController)

    homeController.$inject = ["userService", "$rootScope", "$location", "$scope"];
    function homeController(userService, $rootScope, $location, $scope) {

        // $rootScope.logOut = function () {
        //     console.log(currentUser(id));

        //     $rootScope.globals.currentUser = undefined;
            
            
        //     $location.path("/login");
        //     $window.location.reload();

            
        // }
        $scope.logOut = function () {
            window.location.reload(); 
            $location.path("/login");
          };

        if ($rootScope.globals.currentUser !== undefined) {
            var vm = this;
            vm.user = null;
            vm.allUsers = [];

            function getCurrentUser(id) {
                userService.GetUser(id)
                    .then(function (user) {
                        vm.user = user;
                    })
            }

            function getAllUsers() {
                userService.GetUsers()
                    .then(function (users) {
                        vm.allUsers = users
                    })
            }

            function deleteUser(id) {
                userService.Delete(id)
                    .then(function () {
                        getAllUsers();
                    })
            }

            function initController() {
                getCurrentUser($rootScope.globals.currentUser.id);
                getAllUsers();
            }


            initController();
            vm.deleteUser = deleteUser;
        } else {
            $location.path("/login");
        }
    }

})();