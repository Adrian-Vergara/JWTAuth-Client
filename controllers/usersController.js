(function(){
    'use strict';

    angular
        .module('App')
        .controller('UserController', UserController);

    function UserController(UsuariosService)
    {
        var vm = this;

        vm.usuario = {};
        vm.usuarioModi = {};
        vm.usuarios = [];
        vm.id_modificar;

        alert("entro");
        vm.registrar = function()
        {
            var promisePost = UsuariosService.registrar(vm.usuario);
            promisePost.then(
                function(pl){
                    var respuesta = pl.data;
                    if(respuesta.error == false)
                    {
                        vm.usuarios.push(respuesta.usuario);
                        vm.usuario = {};
                        alert(respuesta.mensaje);
                    }
                },
                function(errorPl){
                    console.log(errorPl);
                }
            );
        };

        vm.index;

        vm.datos = function(index){
            vm.index = index;
            vm.id_modificar = vm.usuarios[index].id;
            vm.usuarioModi = vm.usuarios[index];
            vm.index = index;
            console.log(vm.usuarioModi);
        };

        vm.actualizar = function() {
            var promisePut = UsuariosService.put(vm.id_modificar, vm.usuarioModi);
            promisePut.then(
                function(pl){
                    var respuesta = pl.data;
                    if(respuesta.error == false){
                        vm.usuarios[vm.index] = respuesta.usuario;
                        alert(respuesta.mensaje);
                    }
                },
                function(errorPl){
                    console.log(errorPl);
                }
            );
        };

        _init();

        function _init(){
            _cargarUsuarios();
        };

        function _cargarUsuarios(){
            var promiseGet = UsuariosService.get();
            promiseGet.then(
                function(pl){
                    if(pl.data.error == false)
                    {
                        vm.usuarios = pl.data.usuarios;
                    }
                },
                function(errorPl){
                    console.log(errorPl);
                }
            );
        };
    }
})();
