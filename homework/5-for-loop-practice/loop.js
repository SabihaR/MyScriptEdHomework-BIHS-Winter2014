$(document).ready(function() {

	$('#problem1 button').click(function() {

		var colors = ["red", "blue", "green", "yellow", "gray"];
		var answer = "";
		
		for (var i = 0; i<colors.length; i++) {
		answer = answer + " " + colors[i];
		 } 

		$('#answer1').text(answer);

	});

	$('#problem2 button').click(function() {

		var names = ["Edwin", "Natasha", "Manish", "Chris"];
		var answer = "";

		// Add code here
		for (var i = 0; i<names.length; i++) {
		answer = answer + " " + names[i];
		 } 

		$('#answer2').text(answer);

	});

	$('#problem3 button').click(function() {

		var numbers = [20, 40, 60, 80, 100, 120];
		var answer = "";

		// Add code here
		for (var i = 0; i<numbers.length; i++) {
		    if(numbers[i] == 40 || numbers[i] == 80 || numbers[i] == 120){
		    answer = answer + " " + numbers[i];
		 } 
		}

		$('#answer3').text(answer)

	});

	$('#problem4 button').click(function() {

		var answer = "";

		// Add code here
		for (var i = 0; i<10; i++){
		    answer = answer + " " + "BK ALL DAY!";
		}

		$('#answer4').text(answer)

	});
});