$( document ).ready(function() {
	user_score = 0
	$( '.regexForm' ).submit(function( event ) {
	  event.preventDefault();
	  var form = $(this);
	  console.log(form);
	  var regex_pass = form.find('.passString').html();
	  console.log(regex_pass);
	  var regex_fail = form.find('.failString').html();
	  console.log(regex_fail);
	  var regex_string = form.find('.regexEntry').val();
	  var RegularExpression  =  new RegExp(regex_string);
	  var testResult = regexTest(RegularExpression, regex_pass, regex_fail);
	  
	  evaluateTestResult(form, testResult);


	});	
});

var regexTest = function(regex, pass, fail) {
	// console.log(typeof(pass) === 'string');
	// console.log(typeof(fail) === 'string');
	// console.log(regex);
	// console.log(regex.test(pass));
	// console.log(regex.test(fail));
	var passResult = regex.test(pass);
	var failResult = regex.test(fail);
	if( passResult === true && failResult === false) {
		return true;
	}
	else {
		return false;
	}
}

var evaluateTestResult = function(form, result) {
	if(result === true) {
		console.log('user score is: ' + user_score);
		updateScore();
		form.find('input').attr('disabled', true);
		form.find('button').attr('disabled', true);
	} 
	else {
		user_score += 1;
		console.log('user score is: ' + user_score);
		updateScore();
	}
}

var updateScore = function() {
	$('.userScore').html(user_score);
}