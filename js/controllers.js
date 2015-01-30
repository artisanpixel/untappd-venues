var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http',
	function ($scope, $http) {
	$http.get('https://api.untappd.com/v4/venue/checkins/2209641?client_id=0DE7A54FBDAD070E3119F42FA41C4423CA8ADBB4&client_secret=3486D07522C32D1AF5DF8CBBA414AB6F94A0F8A9').success(function(data) {
		$scope.untappd = data;
	});
}]);