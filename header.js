$(function () {

    var menu_a = $(".menu-ul .menu-a");

    console.log(menu_a.html());

    menu_a.on("mouseenter", function () {

        var subMenu_div = $(this).next(".subMenu-div");

        if(!subMenu_div.hasClass("open")){
            subMenu_div.addClass("open");
        }

    });

    $(".subMenu-div").on("mouseleave", function () {

        var subMenu_div = $(this).next(".subMenu-div");

        if(subMenu_div.hasClass("open")){
            subMenu_div.removeClass("open");
        }
    });

    $(".subMenu-div").on("mouseleave", function () {
        if(subMenu_div.hasClass("open")){
            subMenu_div.removeClass("open");
        }
    });

});