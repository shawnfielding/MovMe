# MoveMe
MovMe is an application that provides with a personalized services tailored to your specific mood for the day. Have you ever wanted to have a movie night in but didn't know what to watch but wanted something to perhaps enlighten you for the evening. 
Now you have that chance. 
We provide you with a service that asks how your day was each time you open up the application (because having a great day every day is important) and we take the indecisiveness out of choosing a movie based on how your feeling. 
Amazing, right? Why not open this up to include more entertainment? Well ladies and gentleman, that is in the near future. For now, sit back and enjoy our selection chosen just for our very special movie date, YOU! 
Are you ready to be moved?
# Screenshots
![MovMe Screenshot]
(https://github.com/shawnfielding/MovMe/blob/master/assets/images/Screen%20Shot%202017-04-03%20at%2010.34.21%20PM.png)
# Technologies used
* HTML5
* CSS 
* JavaScript
* jQuery
* node.js
* Firebase
* BootStrap
# Getting Started 
# Prerequisities
Clone a copy of the github file to your local machine for development and testing purposes. Modifications are permissible within the files themselves. no additional software is needed for testing purposes. 
# Running the tests 
To efficiently and accurately test cross browser functionality, it is recommended that you have the most common browsers installed on your browser: Safari, Firefox, IE and Chrome.
# Built With
* Indico IO API
* The Movie Database API
* Bootstrap
# Walk through

```
$("button").on("click", function() {
  event.preventDefault();
  var emotionScore;
  queryURL = 'https://apiv2.indico.io/emotion';
  var mood = $("#input-style").val().trim();
  console.log(mood);
  $.post(
    'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': "fc7ac440dd84c6520af1f0e889df8863",
      'data': mood,
    })
  ).then(function(res) {
    console.log(res)
  });
}); 
  for(var property in localMovies) {
  console.log(localMovies[property].Description);
   $.post(
    queryURL,
    {
      'api_key': "fc7ac440dd84c6520af1f0e889df8863",
      'data': localMovies[property].Description,
    }).then(function(res) {
    console.log(res);
    return res;
    database.ref(localMovies[property]).push({
      'emotion': res,
    }
    );
    });
  }
});
```
# Authors
* [Alex Vohs](https://github.com/avohs24) - 
* [Shawn Fielding](https://github.com/shawnfielding) -  
* [Tiffany Hyatt](https://github.com/trenette12) - 
* [Olugbenga Akingbe](https://github.com/akingbe1) - 
# License 
Copyright &copy; 2017 MovMe 
