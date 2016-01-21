(function(){
    'use strict';

    angular
        .module('App')
        .controller('AuthController', AuthController);

    function AuthController($auth, $state) {
        var vm = this;
        vm.credenciales = {};
        alert("algo");
        vm.login = function(){
            alert(vm.credenciales.email+" "+vm.credenciales.password);
            $auth.login(vm.credenciales).then(function(data){
                $state.go('users', {});
            });
        };
    }
})();
