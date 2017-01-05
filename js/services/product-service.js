(function() {
    'use strict';

    angular
        .module('app')
        .factory('productService', productService);

    productService.$inject = ["$http"];

    function productService($http) {

  		return {
            sendData: sendMediData,
            getData: getMediData
          };

  		function getMediData() {
  			return $http.get("../../json/medi-data.json", {
  			  cache: true
  			}).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          alert("Error occured while fetching data");
        });
  		}

      function sendMediData(jsonData) {
  			return $http.post(api_host + '/product/', {
          data: jsonData
  			}).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          alert("Error occured while Sending data");
        })
  		}

	}
})();
