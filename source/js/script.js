$('document').ready(function(){
    window.scripts = {
        owl:false,              // To enable OWL CAROUSE put this to true, then use $owl to add extras
        fullpage:false,         // To enable FULL PAGE put this to true, then use $fullpage to add extras
        modals:false,           // To enable MODALS put this to true
        tooltips:false,         // To enable TOOLTIPS then put this to true, make sure you use rel="tooltip" on your element
        typekit:''              // To enable TYPEKIT add its id here
    };

    load();


    $('.result-block').click(function(){
        var id = $(this).attr('id');
        var value = id.replace('result', 'extra');
        var element = $('#' + value);
        element.slideToggle();
    });
    $('#exportButton').click(function(){
        $('#cart').modal('hide');
        $('#export').modal('show');
    });
    $('#search').submit(function(e){
        e.preventDefault();
        var url = 'http://homercreative.github.io/prototype/search-results.html';
        var get = '?search=' + $('#searchText').val();
        console.log(url + get + '');
        window.location.href = (url + get + '');
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            dots:false
        });
    });

    var searchString = decodeURI(getUrlParameter('search'));

    if(searchString != 'undefined'){
        $('#searchText').val(searchString);
    }


    function getUrlParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }
});