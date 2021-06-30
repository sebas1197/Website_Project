$(document).ready(function () {

        const watch = moment().year();
        $('#year_copyright').html(watch);


    // Post  

     const post = [
         {
            title: "Descripción del proyecto",
            date: `Fecha de publicación: ${moment().format("D MMMM YYYY")}`,
            content: "Este es un proyecto personal, con el objetivo de implementar y demostrar mi uso de herramientas y tecnologías en la Programación Web."
        },{
            title: "Tecnologías utilizadas",
            date: `Fecha de publicación: 11 marzo 2021`,
            content: "Para el desarrollo de este proyecto se utilizó JS, JQuery, HTML5, CSS3 y plugins como momentjs, JQuery UI, Arreglos JSON, localStorage."
         },{
            title: "Prueba de título 1",
            date: `Fecha de publicación: ${moment().format("D MMMM YYYY")}`,
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ab nesciunt minus, veritatis eveniet earum doloremque quos necessitatibus iusto, repudiandae excepturi ratione alias. Exercitationem labore fugiat, asperiores tempore ad eius cumque iusto accusamus cum iste voluptatibus vitae dicta unde illo vero assumenda corporis consequatur repellat beatae velit est quidem. Possimus, doloremque? Similique expedita laudantium numquam eos in possimus et aliquam."
         },{
            title: "Prueba de título 2",
            date: `Fecha de publicación: ${moment().format("D MMMM YYYY")}`,
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ab nesciunt minus, veritatis eveniet earum doloremque quos necessitatibus iusto, repudiandae excepturi ratione alias. Exercitationem labore fugiat, asperiores tempore ad eius cumque iusto accusamus cum iste voluptatibus vitae dicta unde illo vero assumenda corporis consequatur repellat beatae velit est quidem. Possimus, doloremque? Similique expedita laudantium numquam eos in possimus et aliquam."
         },{
            title: "Prueba de título 3",
            date: `Fecha de publicación: ${moment().format("D MMMM YYYY")}`,
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ab nesciunt minus, veritatis eveniet earum doloremque quos necessitatibus iusto, repudiandae excepturi ratione alias. Exercitationem labore fugiat, asperiores tempore ad eius cumque iusto accusamus cum iste voluptatibus vitae dicta unde illo vero assumenda corporis consequatur repellat beatae velit est quidem. Possimus, doloremque? Similique expedita laudantium numquam eos in possimus et aliquam."
         }
     ] 

     post.forEach((item)=>{
        let postTempplate = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="post-date">${item.date}</span>
            <p>
                ${item.content}
            </p>
                <a href="#" class="button-more">Leer más</a>
        </article>
        `;

        $('#posts').append(postTempplate);

     });
    

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



});