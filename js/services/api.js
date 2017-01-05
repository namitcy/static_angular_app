(function() {
    'use strict';

    angular
        .module('app')
        .factory('apiService', ["employeeService", "departmentService", "productService", apiService]);

    function apiService(employeeService, departmentService, productService) {
		return{
			employee: employeeService,
			department: departmentService,
      product: productService
		}
	}
})();
