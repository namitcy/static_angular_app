(function() {
    'use strict';

    angular
        .module('app')
        .factory('departmentService', departmentService);

    departmentService.$inject = ["$http"];

    function departmentService($http) {

    		return {
              list: listAllDepartments,
              add: addDepartment,
              edit: editDepartment,
              remove: removeDepartment
            };

    		function listAllDepartments() {
    			return $http.get(api_host + '/department/', {
    			  cache: true
    			}).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(response) {
            alert("Error occured while fetching data");
          });
    		}

        function removeDepartment(id){
          var url = api_host + '/department/'+ id;
          $http.delete(url).then(function successCallback(response) {
            return response;
          }, function errorCallback(response) {
            alert("Error occured while Deleting Department");
    			});
        }

        function addDepartment(name){
          var url = api_host + '/department';
          return $http.post(url, {name: name}).then(function successCallback(response) {
            return response;
          }, function errorCallback(response) {
            alert("Error occured while Adding Department");
          });
        }

        function editDepartment(id, name){
          var url = api_host + '/department/' + id;
          return $http.put(url,{name: name}).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(response) {
            alert("Error occured while Updating Department data");
          });
        }

	}
})();
