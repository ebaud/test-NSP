$(document).ready(function($) {
    $.ajax({
        url: "http://localhost:3000/users",
        method: 'GET',
        success: function(result){
            console.log(result);
            var name;
            $.each(result, function( i, value ) {
                index = "<td>" + i + "</td>";
                name = "<td>" + value.name + "</td>";
                surname = "<td>" + value.surname + "</td>";
                email = "<td>" + value.email + "</td>";
                $('#myTable').append("<tr>" + index + name + surname + email + "</tr>");
              });
        }
    })
    
 });
