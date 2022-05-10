$(document).ready(function () {


    console.log($("input:radio[name=menu_select]").val());

    $("input:radio[name=menu_select]").change(function () {

        console.log($("input:radio[name=menu_select]:checked").val());

        if ($("input:radio[name=menu_select]:checked").val() === "bank") {
            $(".bank_div").css("display", "flex");
        } else {
            $(".bank_div").css("display", "none");
        }

        // console.log($("input:radio[name=menu_select]:checked").val());
        

        if ($("input:radio[name=menu_select]:checked").val() === "charge_log") {
            $(".charge_log_div").css("display", "flex");
            $(".use_log_div").css("display", "none");
        } else {
            $(".charge_log_div").css("display", "none");
            $(".use_log_div").css("display", "flex");
        }

    });

    
});