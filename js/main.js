$(window).on("load", function(){
    console.log("então você é curioso e está fuçando meu console, muito bom!")
})

$(document).ready(function(){

    $(".rp-btn").click(function(){
        $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else {
            $("header").removeClass("fixed");
        }
    });

    $.scrollIt({
        topOffset: 0
    });

    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");
    
    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems - 1){
            itemIndex = 0;
        } else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems - 1;
        } else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow() {
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
    }

    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");

    })

    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })

});

