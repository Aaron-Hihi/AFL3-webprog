$(document).ready(function() {
    // Load page
    $("body").hide().fadeIn(800);

    // Scroll fade animation
    function revealOnScroll() {
        $(".m-fade-scroll").each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();

            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + $(window).height();

            if (elementBottom > windowTop && elementTop < windowBottom) {
                $(this).addClass("m-fade-scroll-active");
            } else {
                $(this).removeClass("m-fade-scroll-active");
            }
        });
    }

    $(window).on("scroll resize", revealOnScroll);
    $(window).trigger("scroll");

    

    // Hamburger
    $(".hamburger-nav").hover(
    function() {
        $(".hamburger-bar").addClass("bg-yellow-theme");
    },

    function() {
        $(".hamburger-bar").removeClass("bg-yellow-theme");
    });


    $(".hamburger-nav").click(function() {
        $("#nav-links").toggleClass("scale-y-0").toggleClass("scale-y-100");
    });



    // Search and Tags
    const contentHeight = $("#cardsContainer").height();
    const searchTag = $("#searchAndTags");
    
    searchTag.parent().height(contentHeight);
    searchTag.addClass("top-[80px]");

    $(window).on("scroll", function() {
        const scrolledFromTop = $(window).scrollTop(); // how many px have been scrolled
        const searchTopPos = searchTag.offset().top;
        const windowHeight = $(window).height();
    
        //  has scrolled over                                        
        if (scrolledFromTop + windowHeight > searchTopPos && searchTopPos + searchTag.outerHeight() > scrolledFromTop) {
            searchTag.removeClass("relative");
            searchTag.addClass("sticky");
        } else {
            searchTag.removeClass("sticky");
            searchTag.addClass("relative");
        }
    });


    // Buttons
    $(".m_button").click(function() {
        $(this).toggleClass("m_button_active");
        
        $(this).removeClass("m_button_animation");
        $(this).addClass("m_button_animation");

        setTimeout(() => {
            $(this).removeClass('m_button_animation');
        }, 300);
    });

    
    // Overflow check
    $(".m_card").each(function() {
        if (isOverflown(this)) {
            $(this).find(".snippet-text").addClass("overflow-hidden text-ellipsis");
        }
    });

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }






});












































