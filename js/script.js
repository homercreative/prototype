jQuery(document).ready(function(){

    $('.result-block').click(function(){
        var id = $(this).attr('id');
        var value = id.replace('result', 'extra');
        var element = $('#' + value);
        element.slideToggle();
    });
});