'use strict';

/**
 * @ngdoc function
 * @name timelogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timelogApp
 */
angular.module('timelogApp')
	.controller('ShowlogCtrl', function ($scope) {
		//Firebase data binding 
			$scope.timelogData = new Firebase("https://dvtimelog.firebaseio.com/timelogData");
			 
			 ///load data from firebase
			 $scope.timelogData.on('value', function(snapshot){
				$scope.timeSave = snapshot.val();
				$scope.$apply();
			 });


			 ///firebase data delete function
			 $scope.deleteRec = function(id){
				var recRef = new Firebase("https://dvtimelog.firebaseio.com/timelogData/" + $id);
				recRef.remove();
			 }
	})
