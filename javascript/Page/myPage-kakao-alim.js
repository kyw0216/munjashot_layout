﻿$(document).ready(function () {


    // console.log($("input:radio[name=menu_select]").val());

    // $("input:radio[name=menu_select]").change(function () {

    //     console.log($("input:radio[name=menu_select]:checked").val());

    //     if ($("input:radio[name=menu_select]:checked").val() === "group_mng") {
    //         $(".group_mng_div").css("display", "flex");
    //         $(".group_add_div").css("display", "none");
    //     } else {
    //         $(".group_mng_div").css("display", "none");
    //         $(".group_add_div").css("display", "flex");
    //     }

    // });

    console.log( $("#tmeplete_code_input").val() )
    
});

function check_cnt(obj){

	var strLen = obj.value.length;
    
    $("#tmeplete_code_cnt").html(strLen + "/30자");

    if(strLen > 30) {
        $("#tmeplete_code_cnt").css("color", "red");
    } else{
        $("#tmeplete_code_cnt").css("color", "black");
    }
    
}