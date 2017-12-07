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
