$(function () {

    var menu_section = $(".desktop_nav .menu-section");
    var desktop_subnav = $(".desktop_subnav");

    menu_section.on("mouseenter", function () {

        if (desktop_subnav.css("display") === "none") {
            desktop_subnav.show("fast", function () {
                desktop_subnav.animate({
                    "height": "160px"
                }, 300, "swing");
            });
        }
    });

    $("header").on("mouseleave", function () {
        if (desktop_subnav.css("display") === "block") {
            desktop_subnav.animate({
                "height": "0"
            }, 300, "swing", function () {
                desktop_subnav.hide();
            });
        }
    });

});