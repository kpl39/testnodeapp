angular
	.module('hello')
	.factory('DataService', DataService);


	function DataService() {
		var dataObj = {
			name: 'Kyle', 
			dog: 'Cole', 
			date: 'June 26',
		}
		return dataObj; 


	}