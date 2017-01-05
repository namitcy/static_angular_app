(function() {
    'use strict';

	angular
		.module('app', [
			'ui.router',
      'kendo.directives'
		]);

	angular
		.module('app')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('company/employee');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html'
			})

			.state('company', {
				url: '/company',
				templateUrl: 'templates/company.html'
			})

			.state('company.employee', {
				url: '/employee',
				templateUrl: 'templates/employee.html',
				controller: 'EmployeeController as empC'
			})

			.state('company.department', {
				url: '/department',
				templateUrl: 'templates/department.html',
				controller: 'DepartmentController as deptC'
			})

			.state('company.product', {
				url: '/product',
				templateUrl: 'templates/product.html',
        controller: 'ProductController as productC'
			})

			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			});

	}
})();
