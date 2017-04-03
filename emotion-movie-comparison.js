

var moviesAll; 
//{{"movie1":{"title":"finding nemo"},{ "joy": 50}, {"sadness": 10}, {"fear": 20}, {"anger": 10}, {"surprise": 10}}, {"movie2":{}}
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
	
