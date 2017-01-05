(function() {
    'use strict';

	angular
    .module('app')
    .controller('EmployeeController',["apiService", EmployeeController]);

	function EmployeeController(apiService) {

		var vm = this;
		vm.init = init();

		function init(){
      vm.dataSource = getDataSource();
      vm.kendoGridOptions = getKendoGridOptions(vm.dataSource);
		}

    function getKendoGridOptions(dataSource){
        return {
          dataSource: dataSource,
          resizable: true,
          navigatable: true,
          navigatable: true,
          sortable: {
              mode: "single",
              allowUnsort: false
          },
          pageable: true,
          height: 450,
          toolbar: ["create"],
          columns: [
              { field: "id",title:"Id", width: "50px"},
              { field: "name", title:"Name"},
              { field: "designation", title:"Designation", width: "150px"},
              { field: "city", title:"City"},
              { field: "salary", title:"Salary"},
              { command: [{name:"destroy", text: "Delete"}], width: "100px" }
            ],
            editable: true,
        }
    }

    function getDataSource(data){
      return new kendo.data.DataSource({
        transport: {
              read: {
                  url: function(options){
                      return api_host + '/employee/';
                  },
                  dataType: "json",
                  type: "GET",
                  contentType: "application/json"
              },
              update: {
                  url: function(options){
                      return api_host + '/employee/' + options.id;
                  },
                  type: "PUT"
              },
              create: {
                  url: function(options){
                      return api_host + '/employee/';
                  },
                  type: "POST"
              },
              destroy: {
                  url: function(options){
                      return api_host + '/employee/' + options.id;
                  },
                  type: "DELETE"
              },
              parameterMap: function (options, operation) {
                  return options;
              }
        },
        pageSize: 10,
        autoSync: true,
        schema: {
          model: {
            id: "id",
            fields: {
              id: {editable: false, nullable: true},
              name: {  validation: { required: true } },
              designation: {  validation: { required: true } },
              city: {  validation: { required: true } },
              salary: { type: "number", validation: { required: true } },
            }
          }
        }
      });
    }
	}
})();
