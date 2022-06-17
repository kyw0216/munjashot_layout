$(function () {

    // var menu_a = $(".menu-ul .menu-a");

    // menu_a.on("mouseenter", function () {

    //     var subMenu_div = $(this).next(".subMenu-div");

    //     if(!subMenu_div.hasClass("open")){
    //         subMenu_div.addClass("open");
    //     }

    // });

    // $(".subMenu-div").on("mouseleave", function () {
    //     if($(this).hasClass("open")){
    //         $(this).removeClass("open");
    //     }
    // });


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