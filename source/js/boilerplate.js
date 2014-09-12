/** Framework Function's **/

function load(){
    if(window.scripts.owl){
        function owl(){
            window.owl = $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        }
        loadScript('plugins/owl.carousel.js', 'owl()')
    }
}





function loadScript($scriptUrl, $loadedFunction){
    $.ajax({
        url: $scriptUrl,
        dataType: 'script',
        cache: true, // otherwise will get fresh copy every page load
        success: function() {
            window[$loadedFunction]()
        }
    });
}
function loadFontKit($fontKit) {
    var config = {
        kitId: $fontKit,
        scriptTimeout: 3000
    };
    var h = document.getElementsByTagName('html')[0];
    h.className += ' wf-loading';
    var t = setTimeout(function() {
        h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, ' ');
        h.className += ' wf-inactive';
    }, config.scriptTimeout);
    var d = false;
    var tk = document.createElement('script');
    tk.src = '//use.typekit.net/' + config.kitId + '.js';
    tk.type = 'text/javascript';
    tk.async = 'true';
    tk.onload = tk.onreadystatechange = function() {
        var rs = this.readyState;
        if (d || rs && rs != 'complete' && rs != 'loaded') return;
        d = true;
        clearTimeout(t);
        try { Typekit.load(config); } catch (e) {}
    };
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tk, s);
}
