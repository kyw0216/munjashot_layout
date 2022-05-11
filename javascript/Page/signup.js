$(document).ready(function () {


    console.log($("input:radio[name=menu_select]").val());

    $("input:radio[name=menu_select]").change(function () {

        console.log($("input:radio[name=menu_select]:checked").val());

        if ($("input:radio[name=menu_select]:checked").val() === "callback") {
            $(".callback_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
            $(".add_info_div").css("display", "none");
        } else {
            $(".callback_info_div").css("display", "none");
            $(".add_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
        }

    });

    
});