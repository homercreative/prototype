$('document').ready(function(){


    $('.result-block').click(function(){
        var id = $(this).attr('id');
        var value = id.replace('result', 'extra');
        var element = $('#' + value);
        element.modal('show');
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

        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            dotsData : true
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