'use strict';

/**
 * @ngdoc function
 * @name timelogApp.controller:TimelogCtrl
 * @description
 * # TimelogCtrl
 * Controller of the timelogApp
 */
angular.module('timelogApp')
  .controller('TimelogCtrl', function ($scope) {

      //clock function
     	$scope.clock = {
     		currentTime: new Date()
     	};
     	var updateTime = function(){
     		$scope.clock.currentTime = new Date()
     	};
     	setInterval(function(){
     		$scope.$apply(updateTime);
     	}, 1000);
     	updateTime();
     	//End clock function

     	//Firebase data binding 
     	$scope.timelogData = new Firebase("https://dvtimelog.firebaseio.com/timelogData");

     	$scope.saveTime = function(){
         
         //Used date.js and time.js javascipt file to 
         //use Date.parse() and TimeSpan()

         var st2 = Date.parse(document.forms["form"]["timepicker2"].value)
         var ft2 = Date.parse(document.forms["form"]["timepicker3"].value)

         var diff = new TimeSpan(ft2 - st2);

         console.log("Hours: ", diff.hours);
         console.log("Minutes: ", diff.minutes);
     

         /*
         var st2 = document.forms["form"]["timepicker2"].value
         var ft2 = document.forms["form"]["timepicker3"].value
       

         //spliting time value into arrays
         var sp1 = st2.split(':');
         var sp2 = ft2.split(':');
         //converting time into seconds
         var seconds_start = (+sp1[0]) * 60 * 60 + (+sp1[1]) * 60 + (+sp1[2]);
         var seconds_fin = (+sp2[0]) * 60 * 60 + (+sp2[1]) * 60 + (+sp2[2]);
         console.log(seconds_start + ' / ' + seconds_fin);
         
         //subtracting both values 
         var total_sec = seconds_fin - seconds_start;
         console.log(total_sec);

         //converting seconds to hours to get total hours
         console.log(secondsToTime(total_sec));
         */      



         	
         //To save in firbase DB
       	$scope.timeSave = {};    	
     		$scope.timelogData.push({
     			workPlace: $scope.workPlace,
     			startTime: $scope.startTime,
     			finishTime: $scope.finishTime
     		});
   		
  	   };
   })
