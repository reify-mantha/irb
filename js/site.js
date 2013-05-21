$(document).ready(function(){ 
		window.addEventListener("hashchange", shiftWindow);
		$('.nav-list').affix();
		buttonHandlers();
		
	});



var shiftWindow = function() {scrollBy(0, -60)};

function scroller(){
 	alert('test');
 	$('.nav-list').scrollspy();
 	$('[data-spy="scroll"]').each(function(){var $spy = $(this).scrollspy('refresh')});
	
	//adjust anchor jumps
	if(location.hash) shiftWindow();


};

// window.onload = init;
// 
// 
// var formReview = function(){
// 	var stuff = document.getElementById("#sentence").value;
// 	alert(stuff);
// 	var text=sentence.innerHTML;
// 	if (text == "This is the saof attempt.") {
// 		document.getElementbyId("response").innerHTML="<h1>Excellent!<h1>";
// 		}
// }
// 
// function init(){
// }


 function buttonHandlers(){
 	var submission = document.getElementById("submit");
	submission.onclick = processForm;
}

function processForm() {
	var needsFDA = document.getElementById("fda");
	var isDeceased = document.getElementById("dead");
	var isSystematic = document.getElementById("sys");
	var isGeneralizable = document.getElementById("gen");
// 	var needInteraction = document.getElementById("interact");
// 	var isIdentifiable = document.getElementById("identify");
// 	var isPrivate = document.getElementById("priv");
// 	var isGvtFunded = document.getElementById("gvt");
// 	var response = "Test";
// 	
// 	switch (){
// 	
	
	
	
	
// 	}
// 	
// 	document.getElementById("response").innerHTML = response;
// }

