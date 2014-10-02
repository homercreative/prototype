$('document').ready(function(){

    // Script constants

    var number = 1;
    var resultBlock = $('.result-block');

    // Modal close animation

    var closeModal = function($element){
        var id = $element.parent().parent().parent().parent().attr('id');
        $("#" + id).modal('hide');
        $element.parent().parent().parent().removeClass('flipOutX');
    };

    // Shows the modal box for each of the results

    resultBlock.click(function(){
        var id = $(this).attr('id');
        var value = id.replace('result', 'extra');
        var element = $('#' + value);
        element.modal('show');
    });

    // Nav link item click function to change the colours per section for previewing the colours
    // this will need to be replaced to make them tabs in the live version

    $('.navlink').click(function(){
       $('.navlink').each(function(){
           $(this).removeClass('active')
       });

        $(this).addClass('active');
        var text = $(this).text();
        $('body').attr('id',text.toLowerCase().replace(/ /g, '-'));
    });

    // Export modal button clicks shows the modal, hides the cart modal

    $('#exportButton').click(function(){
        $('#cart').modal('hide');
        $('#export').modal('show');
    });

    // Number for each item this makes the numbering dynamic and not set statically
    resultBlock.each(function(){
        $(this).find('.number').html(number);
        number++;
    });

    // Close button closes the modal with the animation

    $('.close-button').click(function(e){
        e.preventDefault();
        var element = $(this);
        element.parent().parent().parent().addClass('flipOutX');
        setTimeout(closeModal, 2200, element);
    });

    // Carousel load to handle the swiping nature of the results page

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        dotsData : true
    });
});