// Document is ready
$(document).ready(function () {
	
    // Validate Username
        $('#usercheck').hide();
        let usernameError = true;
        $('#usernames').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#usernames').val();
        if (usernameValue.length == '') {
        $('#usercheck').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html
             ("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }
        
    // Submit button
        $('#submitbtn').click(function () {
            validateUsername();
            validatePassword();
            validateConfirmPassword();
            validateEmail();
            if ((usernameError == true) &&
                (passwordError == true) &&
                (confirmPasswordError == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
    
    
