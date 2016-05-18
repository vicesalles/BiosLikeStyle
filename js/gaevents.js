//EVENTS ANALYTICS
$(document).ready(function () {


    //MY PROJECTS

    $('#ystioBu').on('click', function () {
        ga('send', 'event', 'myProjects', 'click', 'Ystio');
    });

    $('#flowjoyBu').on('click', function () {
        ga('send', 'event', 'myProjects', 'click', 'Flowjoy');
    });

    $('#leanCinemaBu').on('click', function () {
        ga('send', 'event', 'myProjects', 'click', 'Lean Cinema');
    });


    //ME

    $('#twitterBu').on('click', function () {
        ga('send', 'event', 'me', 'click', 'Twitter');
    });

    $('#linkedInBu').on('click', function () {
        ga('send', 'event', 'me', 'click', 'Linkedin');
    });




    //VINTAGE CREATIONS

    $('#dobleValorBu').on('click', function () {
        ga('send', 'event', 'vintageCreations', 'click', 'Doble Valor');
    });

    $('#videoCvBu').on('click', function () {
        ga('send', 'event', 'vintageCreations', 'click', 'Vídeo CV');
    });

    $('#webTvBu').on('click', function () {
        ga('send', 'event', 'vintageCreations', 'click', 'WebTV');
    });

    $('#diccionariBu').on('click', function () {
        ga('send', 'event', 'vintageCreations', 'click', 'Diccionari');
    });

    $('#namingBu').on('click', function () {
        ga('send', 'event', 'vintageCreations', 'click', 'Naming Tool');
    });


});