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
