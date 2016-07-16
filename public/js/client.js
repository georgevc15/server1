$(function(){

	$('#form_edit_cat').on('submit', function(event) {
	   event.preventDefault();

	   var form = $(this);
	   var serverData = form.serialize();
	   var currentUrl = window.location;
	   var petId = $("#petid").val();

		var localLink = 'localhost';
		var a = new RegExp('\\b' + localLink + '\\b');
		//console.log (a.test(currentUrl)); // false
		  
		if(a.test(currentUrl) == true) {  var serverLink = 'http://localhost:3000/cat/'+petId;  } else {  var serverLink = 'https://serene-plateau-90342.herokuapp.com/cat'+petId   }

	   //if(currentUrl == 'http://localhost:3001/') {  var serverLink = 'http://localhost:3001/dog/'+petId;  } else {  var serverLink = 'https://evening-inlet-33905.herokuapp.com/'+petId   }
		  console.log("server link"+serverLink);
		   $.ajax({
			  type: 'PUT', url: serverLink, data: serverData
		   })
			.error(function() {
			  $('.failed').fadeIn().delay(3000).fadeOut('slow'); 
			  //location.reload();
			})
			.success(function(serverResponse){
				 //appendToList([serverResponse]);
				 //form.trigger(reset);
				 $('.success').show('slow').fadeOut("slow"); 
				
			  //setTimeout(function(){ 
			   //  location.reload();
			 // }, 1000);

			});
	});

});