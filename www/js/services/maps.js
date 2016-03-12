app.factory('$maps', function($http){
    var api_key = 'AIzaSyCDu1PkeEiuXrKVott3_0gxQv5QINbhqdE';
    
    return {
        GetLocation: function(province){
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + province + ',Philippines&key=' + api_key).success(function(data){
                console.log(data);
            });
        },
        GetAPIKey: function(){
            return api_key;
        },
        GetAddress: function(location, callback, errorCallback){
          $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + ',' + location.long + '&key=' + api_key).success(function(data){
                var address = {
                  city: data.results[0].address_components[1].long_name,
                  province: data.results[0].address_components[2].long_name
                }
                callback();
                return address;
            }).error(function(error){
            errorCallback();
            return undefined;
          });
        }
    }
});
