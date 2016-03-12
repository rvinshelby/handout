// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform, $cordovaGeolocation, $rootScope, $maps, $http) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
		
		$rootScope.location = {
			lat: '',
			long: '',
			city: ''
		}
		
		//get location
		var posOptions = {timeout: 10000, enableHighAccuracy: false};
		$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			$rootScope.location.lat  = position.coords.latitude
			$rootScope.location.long = position.coords.longitude
			 
			console.log('Root Scope location', $rootScope.location);
			
			$rootScope.address = {};
			
			//IF LAT LONG... REVERSE GEOCODE
			$http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $rootScope.location.lat + ',' + $rootScope.location.long + '&key=AIzaSyCDu1PkeEiuXrKVott3_0gxQv5QINbhqdE').success(function(data){
				
				console.log(data);
				var address = {
					city: data.results[0].address_components[1].long_name,
					province: data.results[0].address_components[2].long_name
				}
				
				$rootScope.address =  address;
				
				for (var i=0; i<data.results[0].address_components.length; i++) {
					for (var b=0;b<data.results[0].address_components[i].types.length ;b++) {

						if (data.results[0].address_components[i].types[b] == "locality") {
							//this is the object you are looking for
							city= data.results[0].address_components[i];
							
							$rootScope.location.city = city.long_name;

						}
					}
				}
				
				console.log($rootScope.location);
				
			}).error(function(error){
				console.log('Error in geocoding');
			});
			
		}, function(err) {
			console.log('Error getting location');
		});
		
  });
});

