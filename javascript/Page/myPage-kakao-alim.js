﻿$(document).ready(function () {

    
});

function check_cnt(type, obj){

	var strLen = obj.value.length;
    
    if(type == "code"){
        $("#tmeplete_code_cnt").html(strLen + "/30자");

        if(strLen > 30) {
            $("#tmeplete_code_cnt").css("color", "red");
        } else{
            $("#tmeplete_code_cnt").css("color", "black");
        }
    } else if (type == "name") {
        $("#tmeplete_name_cnt").html(strLen + "/200자");

        if(strLen > 200) {
            $("#tmeplete_name_cnt").css("color", "red");
        } else{
            $("#tmeplete_name_cnt").css("color", "black");
        }
    } else if (type == "content") {
        $("#tmeplete_content_cnt").html(strLen + "/1000자");

        if(strLen > 1000) {
            $("#tmeplete_content_cnt").css("color", "red");
        } else{
            $("#tmeplete_content_cnt").css("color", "black");
        }
    }
    
}