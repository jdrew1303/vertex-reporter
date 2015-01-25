// CONFIG
var URL_TO_JASMINE_REPORTERS_XML_OUTPUT = "http://beta.ability.es:81/test/TEST-ability.xml";

var xhrObj = new XMLHttpRequest;

// On Document READY
document.addEventListener("DOMContentLoaded", function(event) {
	if (!do_debug) return;
	// Create the indicator element in DOM
	var template =
		'<div class="regression-element">'+
			'<div class="regression-icon"><i class="fa fa-github-alt"></i>'+
			'<div class="regression-count">0</div></div>'+
			'<div class="regression-panel"></div>'+
		'</div>';
	$(template).appendTo(document.body);
	
	checkForRegressions();
	setInterval(checkForRegressions, 3600000);

	var iconClicked = $('.regression-icon').click(showHidePanel);
});


function showHidePanel() {
	$('.regression-panel').toggle();
}

function checkForRegressions() {
	xhrObj.open("GET", URL_TO_JASMINE_REPORTERS_XML_OUTPUT ,true);
	xhrObj.responseType = "document";
	xhrObj.onreadystatechange = checkHttpRequest;
	xhrObj.send();
}


function checkHttpRequest() {
	if(this.readyState==4 && this.status==200) {
		var response = xhrObj.responseXML.getElementsByTagName('testsuite');
		var testCount = response.length;
		var fails= parseInt(response[0].attributes.failures.value);

		var count =  parseInt(response[0].attributes.tests.value);
		var errors = +parseInt(response[0].attributes.errors.value);

		$('.regression-count').css('display','block');

		$('.regression-count').css('background-color',fails ? 'black' : 'green' );
		$('.regression-icon').css('color',fails ? 'red' : 'green' );
		$('.regression-count').html(fails ? fails : count );
		
		if (fails)
			addResultsToDom(resultsXMLtoJSON(response));
	}
	else {
		// Connection error
	}
}

function resultsXMLtoJSON(response) {
	var testResults= [];
 
	for (i=0; i < response[0].children.length; i++) {
		var testcase = response[0].children[i];
		if (testcase && testcase.children && testcase.children[0] )
			testResults.push({ name: testcase.attributes.name.value, success: 0, time:testcase.attributes.time.value, error: testcase.children[0].attributes.message.value });
		else 
			testResults.push({ name: testcase.attributes.name.value, success: 1, time:testcase.attributes.time.value });
	}
		
	return testResults;
}

function addResultsToDom(results) {
	$('.regression-panel').empty();
	
	for ( i=0;i<results.length ; i++) {
		var status = '<span class="label label-success">Success</span>';
		if (!results[i].success)  {
			$('.regression-icon > i').removeClass();
			$('.regression-icon > i').addClass('fa fa-bug fa-spin');
			status = '<span style="cursor:pointer" onclick="alert(\''+results[i].error+'\')" class="label label-danger">FAIL</span>';
		}

		var template =  '<div class="regression-result"> ' + status + ' ' + results[i].name+'</div>';
		$('.regression-panel').append(template);
	}
	
}
