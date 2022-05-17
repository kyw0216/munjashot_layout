$(document).ready(function () {

    
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

function check_byte(type, obj){

    var byte = 0;

    for (var i = 0; i < obj.value.length; ++i) {

        // 기본 한글 2바이트 처리
        (obj.value.charCodeAt(i) > 127) ? byte += 2 : byte++ ;
    }
    
    console.log(byte);

    if(type == "friendImg_title"){
        $("#friendImg_title_cnt").html(byte + "/15 bytes 입력가능");

        if(byte > 15) {
            $("#friendImg_title_cnt").css("color", "red");
        } else{
            $("#friendImg_title_cnt").css("color", "black");
        }
    }
    
}