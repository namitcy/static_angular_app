(function() {
    'use strict';

	angular
    .module('app')
    .controller('ProductController',["apiService", ProductController]);

	function ProductController(apiService) {
		var vm = this;
    vm.init = init();
    vm.sendJson = sendJson;

		function init(){
			 apiService.product.getData().then(function (data) {
          vm.mediData = JSON.stringify(data);
       });
		}

    function sendJson(){
      apiService.product.sendData(JSON.parse(vm.mediData)).then(function (data) {
        console.log(data);
      });
    }

  }
})();
