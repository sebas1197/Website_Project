
$(document).ready(function () {
    //Select - theme
    $('#to-green').click(function (e) { 
        e.preventDefault();
        $('#body-theme').attr('href','CSS/green.css');
    });
    $('#to-red').click(function (e) { 
        e.preventDefault();
        $('#body-theme').attr('href','CSS/red.css');
    });
    $('#to-blue').click(function (e) { 
        e.preventDefault();
        $('#body-theme').attr('href','CSS/blue.css');
    });


    // Scroll up to body
    $('.up-to-body').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },500);

        return false;
    });


    // False login
    $('#login form').submit(function (e) { 
        e.preventDefault();
        localStorage.setItem('name',$('#name').val());
        const name = localStorage.getItem('name');
    if(name!=null && name!='undefined'){
        
        $('#about p').html(`<br /><strong>Bienvenido ${name} </strong>`);
        $('#about p').append(`<br /><br /><a href='#' id='logout'>Cerrar Sesión</a>`);

            $('#logout').click(function (e) { 
                e.preventDefault();
                localStorage.clear();
                location.reload();
            });
    }
    });

    setInterval( () =>{
        let watch = moment().format("hh:mm:ss a");
        $('#watch').html(watch);
    },100);

})