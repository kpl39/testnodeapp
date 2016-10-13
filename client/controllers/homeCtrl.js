angular
	.module('hello')
	.controller('home', HomeController); 

	HomeController.$inject = ['DataService']

	function HomeController(DataService) {
		var vm = this; 

		vm.name = DataService.name;
		vm.dog = DataService.dog;
		vm.date = DataService.date;
		vm.greeting = 'Hello World!'
	};

