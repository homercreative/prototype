jQuery(document).ready(function(){

    $('.view').click(function(){
       var id = $(this).attr('id');
       var value = id.replace('view', 'extra');
       var element = $('#' + value);
       element.slideToggle();
    });
});