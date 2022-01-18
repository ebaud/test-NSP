$(document).ready(function($) {
    $('#userForm').submit(function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var surname = $("#surname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        console.log(name, surname, email, password);

        $.ajax({
            url: "http://localhost:3000/users",
            method: 'POST',
            data: {
                surname: surname,
                name: name,
                email: email,
                password: password
            },
            success: function(result){
                console.log(result);
                window.location.href='list.html';
            }
        })
    });
 });
