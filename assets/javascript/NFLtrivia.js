$("#start").on("click",function() {
	$("#start").remove();
})

var questions = [{
	question: "Which of the following choices represents a correct term for a conference in the National Football League?",
	answers: ["Central Football Conference", "American Football Conference", "Nationalist Football Conference","Imperial Football Conference"],
	correctAnswer: "American Football Conference",
}, {
	question: "Which of the following National Football League team names is incorrect?",
	answers: ["Detroit Lions", "Chicago Bears", "Dallas Cowboys", "Cleveland Cardinals"],
	correctAnswer: "Cleveland Cardinals",
}, {
	question: "Select the name of award presented yearly to the winner of the Super Bowl?",
	answers: ["Brunswick-Balke Collendar Cup", "Ed Thorp Memorial Trophy", "JacK Wembley Trophy", "Vince Lombardi Trophy"],
	correctAnswer: "Vince Lombardi Trophy",	
}, {
	question: "When was the first year that the Super Bowl trophy was awarded?",
	answers: ["1920", "1934", "1969", "1970"],
	correctAnswer: "1970",
}];

var game = {
	questions: questions,
	currentQuestion:0,
	counter: 120,
	correct:0,
	incorrect:0,
	countdown: function(){

	},
	loadQuestion: function(){

	},
	timeUp: function(){

	},
	results: function(){

	},
	clicked: function(){

	},
	answeredCorrectly: function(){

	},
	answeredInCorrectly: function(){

	},
	reset: function(){
		
	}


}