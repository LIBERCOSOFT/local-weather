$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ latitude + "&lon=" + longitude, function(json){
        $("#weather").html(json['weather'][0]['main']);
        $("#temp").html(json['main']['temp'].toFixed(1));
        $("#name").html(json['name'] + ", " + json['sys']['country']);
        $("#btn").click(function(){
          if($("#btn").html() == "°F"){
            $("#temp").html(json['main']['temp'].toFixed(1));
            $("#btn").html("°C");
          }else{
            $("#temp").html(Math.ceil(json['main']['temp'] * 1.8 + 32));
            $("#btn").html("°F");
          }
        });
       var weather = $("#weather").html().toLowerCase();
        if (weather == "clear"){
           jQuery("<img/>").prependTo("#image").attr({
             src: 'http://www.sevenoaksart.co.uk/images/smallsun.gif',
             alt: 'Clear Weather',
             height: '100'
});
        }else if(weather == "clouds"){
          jQuery("<img/>").prependTo("#image").attr({
             src: 'http://www.sevenoaksart.co.uk/images/cloudy.gif',
             alt: 'Cloudy Weather',
             height: '100'
});
        }else if(weather == "drizzle"){
          jQuery("<img/>").prependTo("#image").attr({
             src: 'http://78.media.tumblr.com/e94f841e3e06492a4678b63ea1b39810/tumblr_n3s0vecW7Q1tq47ppo1_500.gif',
             alt: 'Drizzle Weather',
             height: '100'
});
        }else if(weather == "thunderstom"){
          jQuery("<img/>").prependTo("#image").attr({
             src: 'http://www.sevenoaksart.co.uk/images/lightning1.gif',
             alt: 'Thunderstom Image',
             height: '100'
});
        }else if(weather == "snow"){
          jQuery("<img/>").prependTo("#image").attr({
             src: 'http://www.sevenoaksart.co.uk/images/snowclouds.gif',
             alt: 'Snowy Weather',
             height: '100'
});
        }else if(weather == "rain"){
          jQuery("<img/>").prependTo("#image").attr({
             src: 'https://cdn.dribbble.com/users/141880/screenshots/1969172/weatherlorerain.gif',
             alt: 'Rainy Weather',
             height: '100'
});
        }else{
          jQuery("<img/>").prependTo("#image").attr({
             src: 'https://i.pinimg.com/originals/e8/9b/f6/e89bf6cf6cad8ca28985a98e0a59f5df.gif',
             alt: 'NO Image For The Weather',
             height: '100'
});
        }
      });
    });
  }
});