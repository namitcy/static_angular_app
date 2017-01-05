(function() {
    'use strict';

    angular
        .module('app')
        .factory('employeeService', employeeService);

    employeeService.$inject = ["$http"];

    function employeeService($http) {

  		return {
            list: listAllEmployees
          };

  		function listAllEmployees() {
  			return $http.get('../../json/employee.json', {
  			  cache: true
  			}).then(function successCallback(response) {
          return response;
        }, function errorCallback(response) {
          alert("Error occured while fetching data");
        });
  		}
	}
})();
