//Indico JS

var config = {
  apiKey: "AIzaSyB3cKe_KGVOsgTIkr6lSiszMiczU0PNYSM",
  authDomain: "movme-92cb7.firebaseapp.com",
  databaseURL: "https://movme-92cb7.firebaseio.com",
  storageBucket: "movme-92cb7.appspot.com",
  messagingSenderId: "314238857658"
};

firebase.initializeApp(config);
var database = firebase.database();
var queryURL;


$("button").on("click", function() {
  event.preventDefault();

  var emotionScore;
  queryURL = 'https://apiv2.indico.io/emotion';

	var mood = $("#input-style").val().trim();
	console.log(mood);

  $.post(
  	'https://apiv2.indico.io/emotion',
  	JSON.stringify({
  		'api_key': "61cb69fcfa24357a37c920ee85cc3374",
  		'data': mood,

  	})
  ).then(function(res) {
  	console.log(res)
  });

}); 


//-----------------------------------------------------------------------------------------------------------------------------------------------------


//DescriptionGetter JS

var config = {
  apiKey: "AIzaSyB3cKe_KGVOsgTIkr6lSiszMiczU0PNYSM",
  authDomain: "movme-92cb7.firebaseapp.com",
  databaseURL: "https://movme-92cb7.firebaseio.com",
  storageBucket: "movme-92cb7.appspot.com",
  messagingSenderId: "314238857658"
};

firebase.initializeApp(config);
var database = firebase.database();
var queryURL;
  
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

database.ref().on('value', function emotionSignature(snapshot){
  var localMovies = snapshot.val().Movies;
queryURL = 'https://apiv2.indico.io/emotion';
  var corsRequest = new XMLHttpRequest();
  var requestURL = 'https://www.themoviedb.org';
   
  function domainRequest() {
    if(corsRequest) {    
      corsRequest.open('GET', requestURL, true);
      corsRequest.onreadystatechange = handler;
      corsRequest.send(); 
    }
  }

  // var corsURL = "https://movme-92cb7.firebaseio.com/cors";
  // var corsRequest = createCORSRequest('GET', corsURL);
  // corsRequest.send();
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


// database.ref().on('value', function emotionSignature(snapshot){
//   var localMovies = snapshot.val().Movies;
//   // for(var property in localMovies) {
//   console.log(localMovies[12].Description);
//    $.post(
//     queryURL,
//     JSON.stringify({
//       'api_key': "61cb69fcfa24357a37c920ee85cc3374",
//       'data': localMovies[12].Description,

//     })
//     ).then(function(res) {
//     console.log(res)
//     });
//   }
// );



//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//MovieGetter JS

// Initialize Firebase
        var config = {
          apiKey: "AIzaSyB3cKe_KGVOsgTIkr6lSiszMiczU0PNYSM",
          authDomain: "movme-92cb7.firebaseapp.com",
          databaseURL: "https://movme-92cb7.firebaseio.com",
          projectId: "movme-92cb7",
          storageBucket: "movme-92cb7.appspot.com",
          messagingSenderId: "314238857658"
        };
        firebase.initializeApp(config);
      
      var database = firebase.database();
      $(document).ready(function() {
// ------- Objects for importing ------
        var genre = {
          genreId: 0,
          genreName: ""
        };

        var theMovie = {
          movieId : 0,
          movieName: "",
          movieDescription: "",
          movieGenres: [],
          movieImage: "",
        }


// --------- This function queries the movie site and gets all possible genres and their id's
// --------- It loops through them and puts them into our database.
// --------- It then makes an array of them and sends it to the function that gets the movies associated.
        function getObjectGenresIdsWithAjax() {
          console.log("got to the first function")
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=9e47aea3d7ab855ced2fcc031863b928",
            "method": "GET",
            "headers": {},
            "data": "{}"
          }
          $.ajax(settings).done(function(response) {
            var genreObjectArray = response.genres;
            console.log(JSON.stringify(genreObjectArray));
            console.log(typeof genreObjectArray);
            console.log(genreObjectArray.length);
            // this part pushes the genres to the database
            $.each(genreObjectArray, function(x) {
              genre.genreId = genreObjectArray[x].id;
              genre.genreName = genreObjectArray[x].name;
              database.ref('genres').push({genre});
            });
            var theArrayGenreIds = [];
            for (var i = 0; i < genreObjectArray.length; i++) {
              theArrayGenreIds.push(genreObjectArray[i]["id"]); // I should now have the genre Ids alone in an array.
            }
          getMoviesfromArrayIDs(theArrayGenreIds)
        })
      }
// --------  This starts everything.
      getObjectGenresIdsWithAjax();



 //-----------------------------------------------------------------------------------------------------------------------------------------------------

//Comparison Code

var moviesAll; 
var emotionJoy; 
var emotionAnger;
var emotionSurprise;
var emotionFear;
var emotionSadness;
var emotionJoyPlus = emotionJoy + 10; 
var emotionJoyMinus = emotionJoy - 10; 
var emotionAngerPlus = emotionJoy + 10;
var emotionAngerMinus = emotionJoy - 10;
var emotionSurprisePlus = emotionJoy + 10;
var emotionSurpriseMinus = emotionJoy - 10;
var emotionFearPlus = emotionJoy + 10;
var emotionFearMinus = emotionJoy - 10;
var emotionSadnessPlus = emotionJoy + 10;
var emotionSadnessMinus = emotionJoy - 10;



//This on-click function will take the user's first emotion, pull each movie within 10 percentage points of the emotion score, and push those movies to an array
//It will then use that new array of movies and compare the next emotion with these movies, pull the movies within 10 percentage points of that score
//The matching movies will then be pushed to a new array
//This will keep going until we have a list of movies that match each emotional score

$("button").on("click", function() {

var emotionJoyMovies = testMoviesWithJoyEmotion(moviesAll, emotionJoyPlus, emotionJoyMinus); 
var emotionAngerMovies = testMoviesWithAngerEmotion(emotionJoyMovies, emotionAngerPlus, emotionAngerMinus); 
var emotionSurpriseMovies = testMoviesWithSurpriseEmotion(emotionAngerMovies, emotionSurprise, emotionSurpriseMinus);
var emotionFearMovies = testMoviesWithFearEmotion(emotionSurpriseMovies, emotionFearPlus, emotionFearMinus);
var emotionSadnessMovies = testMoviesWithSadnessEmotion(emotionFearMovies, emotionSadnessPlus, emotionSadnessMinus); 

//console.log(emotionSadnessMovies);
});


function testMoviesWithJoyEmotion(movies, emotionPlus, emotionMinus) {
  var localArray = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].joy <= emotionPlus && movies[i].joy >= emotionMinus) {
      localArray.push(movies[i]);
    }
  }
  return localArray;
};


function testMoviesWithAngerEmotion(movies, emotionPlus, emotionMinus) {
  var localArray = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].anger <= emotionPlus && movies[i].anger >= emotionMinus) {
      localArray.push(movies[i]);
    }
  }
  return localArray;
};

function testMoviesWithSurpriseEmotion(movies, emotionPlus, emotionMinus) {
  var localArray = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].surprise <= emotionPlus && movies[i].surprise >= emotionMinus) {
      localArray.push(movies[i]);
    }
  }
  return localArray;
};

function testMoviesWithFearEmotion(movies, emotionPlus, emotionMinus) {
  var localArray = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].fear <= emotionPlus && movies[i].fear >= emotionMinus) {
      localArray.push(movies[i]);
    }
  }
  return localArray;
};

function testMoviesWithSadnessEmotion(movies, emotionPlus, emotionMinus) {
  var localArray = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].sadness <= emotionPlus && movies[i].sadness >= emotionMinus) {
      localArray.push(movies[i]);
    }
  }
  return localArray;
};     