$('document').ready(function(){

    var closeModal = function($element){
        var id = $element.parent().parent().parent().parent().attr('id');
        $("#" + id).modal('hide');
        $element.parent().parent().parent().removeClass('flipOutX');
    };
    $('.result-block').click(function(){
        var id = $(this).attr('id');
        var value = id.replace('result', 'extra');
        var element = $('#' + value);
        element.modal('show');
    });
    $('.navlink').click(function(){
       $('.navlink').each(function(){
           $(this).removeClass('active')
       });

        $(this).addClass('active');
        var text = $(this).text();
        $('body').attr('id',text.toLowerCase().replace(/ /g, '-'));
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

    var number = 1;
    $('.result-block').each(function(){
        $(this).find('.number').html(number);
        number++;
    });
    $('.close-button').click(function(e){
        e.preventDefault();
        var element = $(this);
        element.parent().parent().parent().addClass('flipOutX');
        setTimeout(closeModal, 2200, element);
    });

        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: false,
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