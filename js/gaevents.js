//EVENTS ANALYTICS
$(document).ready(function () {



    //ME



    $('#hackcinema').on('click', function () {
        ga('send', 'event', 'me', 'click', 'Hackcinema');
    });

    $('#Arrels').on('click', function () {
        ga('send', 'event', 'me', 'click', 'Arrels');
    });

    $('#GitHub').on('click', function () {
        ga('send', 'event', 'me', 'click', 'GitHub');
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
