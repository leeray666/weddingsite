/*
   Author : Jeyffrey
   Checkout my work : http://jeyffrey.fr
*/

(function($){
    $.fn.simpleAscensor = function(speed){

        /* Set the default speed */
        if (speed === undefined) {
            var speed = 500;
        }

        /* - - - - - - - - - - -
           Ascensor Function
        - - - - - - - - - - - */
        return this.each(function(){

            var $this = $(this);

            /* On document ready, set active link */
            if(window.location.hash !== '') {
                $this.each(function() {
                    $("a[href*='"+ window.location.hash +"']").addClass('link-active').siblings().removeClass('link-active');
                });  
            } else {
                $this.parent().find(':first-child').addClass('link-active');
            }

            /* Slides X & Y positions */
            $this.each( function(){
                var $id = $this.attr('href');

                var x_position = $($id).attr('data-x');
                var y_position = $($id).attr('data-y');

                if( x_position !== 0 ) {
                    $($id).css({
                        left: x_position +'00vw'
                    });
                }

                if( y_position !== 0 ) {
                    $($id).css({
                        top: y_position +'0vh'
                    });
                }
            });

            /* Events on click */
            $this.bind('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                /* New active link */
                $this.addClass('link-active').siblings().removeClass('link-active');

                /* Animation to the new slide and new URL */
                var $id = $this.attr('href');

                $('html, body').stop().animate({
                    scrollLeft: $($id).offset().left,
                    scrollTop: $($id).offset().top
                }, speed, function(){
                    window.location.hash = $id;
                });
            });

            /* On resize, keep the good X & Y positions */
            $(window).on('resize', function(){
                var hash = window.location.hash;

                $('html, body').stop().animate({        
                    scrollLeft: $(hash).offset().left,
                    scrollTop: $(hash).offset().top
                }, 0);
            });

        });
    }; 
})(jQuery);
