(function($) {

    /* Scroll carousel by click on controls */
    $('.carousel__control').on('click', function () {

        var $scrollContainer = $(this).parents('.carousel').find('.carousel__container');
        var scrolled = $scrollContainer.scrollLeft();
        var toScroll = $(this).parents('.carousel').data('step') ? $(this).parents('.carousel').data('step') : parseInt($(this).parents('.carousel').outerWidth() / 3 * 2);
        var scrollCoordinate = $(this).hasClass('carousel__control--next') ? scrolled + toScroll : scrolled - toScroll;

        $scrollContainer.animate({
            scrollLeft: scrollCoordinate
        }, 500, function () {
            arrowsVisibility($scrollContainer)
        });
    });



    /* Show / hide arrows */

    function arrowsVisibility($carouselContainer) {

        if( $carouselContainer.scrollLeft() === 0) {
            $carouselContainer.siblings('.carousel__control--prev').addClass('carousel__control--disabled');
        } else {
            $carouselContainer.siblings('.carousel__control--prev').removeClass('carousel__control--disabled');
        }

        if( $carouselContainer.scrollLeft() === $carouselContainer.find('.carousel__ribbon').outerWidth() - $carouselContainer.outerWidth() ) {
            $carouselContainer.siblings('.carousel__control--next').addClass('carousel__control--disabled');
        } else {
            $carouselContainer.siblings('.carousel__control--next').removeClass('carousel__control--disabled');
        }
    }

    /* Disable arrows on scroll */
    $(document).ready(function () {

        $('.carousel__container').on('scroll', function () {
            arrowsVisibility( $(this) );
        });
    });

    /* Disable arrows on page resize */
    $(window).on('resize', function () {
        $('.carousel__container').each(function () {
            arrowsVisibility( $(this) );
        })
    });

    /* Disable arrows on page load */
    $(document).ready(function () {
        $('.carousel__container').each(function () {
            arrowsVisibility( $(this) );
        })
    });



    /* Init / disable carousel */

    function initCarousel($carousel) {
        if ( $carousel.find('.carousel__container').outerWidth() < $carousel.find('.carousel__ribbon').outerWidth() ) {
            $carousel.addClass('carousel--initialized');
        } else {
            $carousel.removeClass('carousel--initialized');
        }
    }

    /* Init on resize */
    $(window).on('resize', function () {
        $('.carousel').each(function () {
            initCarousel( $(this) );
        })
    });

    /* Init on page load */
    $(document).ready(function () {
        $('.carousel').each(function () {
            initCarousel( $(this) );
        })
    });

})(jQuery);
