$(document).ready(function(){
    var name = $('#name');
    var email = $('#email');
    var dob = $('#date');
    var country = $('#country');
    name.focus(function(){
        name.css('background-color', 'lightblue');
    });
    country.focus(function(){
        country.css('background-color', 'lightblue');
    });
    dob.focus(function(){
        dob.css('background-color', 'lightblue');
    });
    email.focus(function(){
        email.css('background-color', 'lightblue');
    });

    email.blur(function(){
        email.css('background-color', '');
    })

    dob.blur(function(){
        dob.css('background-color', '');
    })

    country.blur(function(){
        country.css('background-color', '');
    })

    name.blur(function(){
        name.css('background-color', '');
    })

    $('#country').change(function(){
        var a = $(this).val();
        $('#data').html(a)
    })

    $('#form').submit(function(){
        console.log('Fk you');
    })
})