$(function () {

    var section = $(".menu-section");
    var children = util.fetchChildElement(section);
    section.find(".menu-category").each(function (i, v) {
        v = $(v);
        v.find("[data-menu]").each(function (i2, v2) {
            v2 = $(v2);
            v2.on("click", function () {
                MenuSystem.setMenu("/", v2.data("menu"));
            });
        });
    });

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

    if(tippy){
        console.log(tippy);
    }else{
        console.log("없음");
    }

    Fn_Tippy_Init();
});

// 툴팁 세팅
function Fn_Tippy_Init(){

    tippy("[data-tippy-content]",
    {
        content: "tooltip",
        allowHTML: true,
        maxWidth: 500
    });
}