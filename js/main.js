$(document).ready(function(){

    //Slider 
if(window.location.href.indexOf('index')>-1){
    $('.galeria').bxSlider({
        mode:'fade',
        captions: false,
        slidewidth: 1200,
        responsive: true,
        pager:true
    });
}

if(window.location.href.indexOf('index')>-1){
    //Post

    var post = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nunc sit amet erat vehicula dignissim ac vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sapien lacus, mattis vel suscipit vitae, feugiat et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mauris, dictum sed efficitur venenatis, accumsan ac nulla. Mauris porttitor ultrices tristique. Mauris porta justo ex, non cursus nisi elementum sed. Praesent aliquet lorem vel elit luctus, eget dictum magna imperdiet. Nulla neque tortor, fringilla eu ornare nec, pellentesque vel velit. Donec tempor felis vel lectus eleifend condimentum. Duis pretium malesuada ultrices. Aliquam ut ornare dui.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nunc sit amet erat vehicula dignissim ac vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sapien lacus, mattis vel suscipit vitae, feugiat et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mauris, dictum sed efficitur venenatis, accumsan ac nulla. Mauris porttitor ultrices tristique. Mauris porta justo ex, non cursus nisi elementum sed. Praesent aliquet lorem vel elit luctus, eget dictum magna imperdiet. Nulla neque tortor, fringilla eu ornare nec, pellentesque vel velit. Donec tempor felis vel lectus eleifend condimentum. Duis pretium malesuada ultrices. Aliquam ut ornare dui.'
        },{
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nunc sit amet erat vehicula dignissim ac vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sapien lacus, mattis vel suscipit vitae, feugiat et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mauris, dictum sed efficitur venenatis, accumsan ac nulla. Mauris porttitor ultrices tristique. Mauris porta justo ex, non cursus nisi elementum sed. Praesent aliquet lorem vel elit luctus, eget dictum magna imperdiet. Nulla neque tortor, fringilla eu ornare nec, pellentesque vel velit. Donec tempor felis vel lectus eleifend condimentum. Duis pretium malesuada ultrices. Aliquam ut ornare dui.'
        },{
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nunc sit amet erat vehicula dignissim ac vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sapien lacus, mattis vel suscipit vitae, feugiat et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mauris, dictum sed efficitur venenatis, accumsan ac nulla. Mauris porttitor ultrices tristique. Mauris porta justo ex, non cursus nisi elementum sed. Praesent aliquet lorem vel elit luctus, eget dictum magna imperdiet. Nulla neque tortor, fringilla eu ornare nec, pellentesque vel velit. Donec tempor felis vel lectus eleifend condimentum. Duis pretium malesuada ultrices. Aliquam ut ornare dui.'
        },{
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nunc sit amet erat vehicula dignissim ac vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sapien lacus, mattis vel suscipit vitae, feugiat et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mauris, dictum sed efficitur venenatis, accumsan ac nulla. Mauris porttitor ultrices tristique. Mauris porta justo ex, non cursus nisi elementum sed. Praesent aliquet lorem vel elit luctus, eget dictum magna imperdiet. Nulla neque tortor, fringilla eu ornare nec, pellentesque vel velit. Donec tempor felis vel lectus eleifend condimentum. Duis pretium malesuada ultrices. Aliquam ut ornare dui.'
        },
    ];

    post.forEach((item, index) => {
        var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

        $("#posts").append(post);
    });

}
    //selector de tema 
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //Scroll arriba de la web 

    $('.subir').click(function(e){
        e.preventDefault(); 

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name= localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<strong>Bienvenido, " + form_name +"</strong>" );
        about_parrafo.append("<a href='#' id = 'logout' > Cerrar sesion </a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    //Acordeon 
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj')>-1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        }, 1000)
        
    }
    
});



  $(document).ready(function() {
    $("#form_contact").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        surname : {
            required: true,
            minlength: 3
          },
        years: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      
      messages : {
        name: {
          minlength: "Ingrese un nombre valido"
        },
        surname: {
            minlength: "Ingrese apellidos validos"
          },
        years: {
          required: "Ingrese su edad",
          number: "Su edad debe ser en numeros",
          min: "Ingrese solamente si es mayor a 18"
        },
        email: {
          email: "Ingrese un correo valido"
        },
        date: {
          required: "People with age over 50 have to enter their weight",
          date: "Ingrese una fecha valida"
        }
      }
    });
    
  });

