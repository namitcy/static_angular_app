(function() {
    'use strict';

	angular
    .module('app')
    .controller('DepartmentController',["apiService", DepartmentController]);

	function DepartmentController(apiService) {
		var vm = this;
    vm.init = init();

		function init(){
         vm.dataSource = getDataSource();
         vm.kendoGridOptions = getKendoGridOptions(vm.dataSource);
		}

    function getKendoGridOptions(dataSource){
        return {
          dataSource: dataSource,
          pageable: true,
          height: 550,
          toolbar: ["create"],
          columns: [
            { field:"id",title:"Department Id"},
            { field: "name", title:"Department Name"},
            { command: [{name: "edit", text: "Edit"}, {name:"destroy", text: "Delete"}], width: "200px" },
          ],
            editable: {
              mode: "inline",
              confirmation: "Are you sure you want to remove this item?"
              },
  		      filterable: {
  			         mode: "row"
  		      }
        }
    }

    function getDataSource(data){
      return new kendo.data.DataSource({
        transport: {
              read: {
                  url: function(options){
                      return api_host + '/department/';
                  },
                  dataType: "json",
                  type: "GET",
                  contentType: "application/json"
              },
              update: {
                  url: function(options){
                      return api_host + '/department/' + options.id;
                  },
                  type: "PUT"
              },
              create: {
                  url: function(options){
                      return api_host + '/department/';
                  },
                  type: "POST"
              },
              destroy: {
                  url: function(options){
                      return api_host + '/department/' + options.id;
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
            }
          }
        }
      });
    }

	}
})();
