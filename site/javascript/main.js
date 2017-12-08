// Ajax call
$(document).ready(function(){
    $("#registration_form").submit(function(event){
        var user_information = {
        	login_name : $("#login_name").val(),
			pass : $("#pass").val(),
			re_pass : $("#re_pass").val(),
			account : $("#account").val(),
			text : $("#interests").val()
        };

        $.post("http://localhost:4200/formsubmit", user_information, function(result){
            $("#submit_message").css("display","block");
        });
        // prevent submittion of form - just need to remember the trick: to pass 'event' to function and to place event.preventDefault()
        event.preventDefault();

    });
});

$(document).ready(function(){
    $("#subscr_form").submit(function(event){
        var user_information = {
            login_name : $("#firstname").val(),
            email : $("#email").val(),
        };

        $.post("http://localhost:4200/formsubmit", user_information, function(result){
            $("#message").css("display","block");
        });
        // prevent submittion of form - just need to remember the trick: to pass 'event' to function and to place event.preventDefault()
        event.preventDefault();

    });

});
// load ru
var loadRu = function() {
    $.get("http://localhost:4200/translate/ru", function(result){
    	var navigation = JSON.parse(result).navigation;
		$("#main").text(navigation.main);
		$("#about").text(navigation.about);
		$("#production").text(navigation.production);
		$("#contacts").text(navigation.contacts);
		$("#registration").text(navigation.registration);
    });	
}
// load en 
var loadEn = function() {
	$.get("http://localhost:4200/translate/en", function(result){
    	var navigation = JSON.parse(result).navigation;
		$("#main").text(navigation.main);
		$("#about").text(navigation.about);
		$("#production").text(navigation.production);
		$("#contacts").text(navigation.contacts);
		$("#registration").text(navigation.registration);
    });
}
// load default
loadRu();