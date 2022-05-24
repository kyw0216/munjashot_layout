$(document).ready(function () {

    $(".tab_title li").click(function () {

        var idx = $(this).index();

        // console.log(idx);
        // console.log($(".tab_title li").eq(idx));

        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");

        $(".tab_cont .tab_in_content").removeClass("on");
        $(".tab_cont .tab_in_content").eq(idx).addClass("on");

        $(".tab_cont .tab_in_content").hide();
        $(".tab_cont .tab_in_content").eq(idx).css("display", "flex");
    });

    $(".sub_tab_title li").click(function () {

        var idx = $(this).index();

        // console.log(idx);
        // console.log($(".tab_title li").eq(idx));

        $(".sub_tab_title li").removeClass("on");
        $(".sub_tab_title li").eq(idx).addClass("on");

        $(".sub_tab_cont .sub_tab_in_content").removeClass("on");
        $(".sub_tab_cont .sub_tab_in_content").eq(idx).addClass("on");

        $(".sub_tab_cont .sub_tab_in_content").hide();
        $(".sub_tab_cont .sub_tab_in_content").eq(idx).css("display", "flex");
    });


    $("#alim_fail_msg_chk").click(function () {

        console.log('alim_fail_msg_chk');

        var chk = $(this).is(":checked");

        if (chk) {
            $(".alimtalk_content .msg_layout").css("display", "flex");
        } else {
            $(".alimtalk_content .msg_layout").hide();
        }
    });

    $("#friend_fail_msg_chk").click(function () {

        var chk = $(this).is(":checked");

        console.log('friend_fail_msg_chk');

        if (chk) {
            $(".friendtalk_content .msg_layout").css("display", "flex");
        } else {
            $(".friendtalk_content .msg_layout").hide();
        }
    });

    $(".add_btn").click(function () {

        $(".btn_table tbody").append(`<tr>
        <td><select>
        <option>앱링크</option>
        <option>배송조회</option>
        <option>웹링크</option>
        <option>봇키워드</option>
    </select></td>
        <td>버튼명</td>
        <td>버튼링크</td>
        <td>X</td>
    </tr>`);
    });



    $("input:radio[name=fax_cover_chk]").click(function () {

        console.log('fax_cover_chk');
        console.log($(this).val());

        if ($(this).val() === 'Y') {
            $(".fax_content .fax_cover_layout").css("display", "flex");
        } else {
            $(".fax_content .fax_cover_layout").hide();
        }

    });

    $("#munja_ad_chk").click(function () {

        if ($("#munja_ad_chk").prop("checked")) {
            $(".msg_content_textarea").val("(광고)");
            // $(".msg_content_textarea").attr("value", "(광고)");
            $(".msg_080_textarea").css("display", "block");
            $(".msg_content_textarea").css("height", "200px");
        } else {
            $(".msg_content_textarea").val("");
            // $(".msg_content_textarea").attr("value", "");
            $(".msg_080_textarea").css("display", "none");
            $(".msg_content_textarea").css("height", "300px");
        }

    });

    $("input:radio[name=msg_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".msg_send_time").attr("disabled", false);
        } else {
            $(".msg_send_time").attr("disabled", true);
        }

    });

    $("input:radio[name=alim_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".alim_send_time").attr("disabled", false);
        } else {
            $(".alim_send_time").attr("disabled", true);
        }

    });

    $("input:radio[name=friend_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".friend_send_time").attr("disabled", false);
        } else {
            $(".friend_send_time").attr("disabled", true);
        }

    });

    $("input:radio[name=barcode_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".barcode_send_time").attr("disabled", false);
        } else {
            $(".barcode_send_time").attr("disabled", true);
        }

    });

    $("input:radio[name=fax_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".fax_send_time").attr("disabled", false);
        } else {
            $(".fax_send_time").attr("disabled", true);
        }

    });

    $("input:radio[name=global_send_time]").click(function () {

        if ($(this).val() == "reservation") {
            $(".global_send_time").attr("disabled", false);
        } else {
            $(".global_send_time").attr("disabled", true);
        }

    });

});


function check_byte(type, obj){

    var byte = 0;

    for (var i = 0; i < obj.value.length; ++i) {

        // 기본 한글 2바이트 처리
        (obj.value.charCodeAt(i) > 127) ? byte += 2 : byte++ ;
    }
    
    if(type == "msg_title"){
        $("#msg_title_byte").html(byte + " / 40 byte");

        if(byte > 40) {
            $("#msg_title_byte").css("color", "red");
        } else{
            $("#msg_title_byte").css("color", "black");
        }

        if(byte > 0){
            $("#msg_type").html("(LMS)");
            $(".msg_content_textarea").css("background-color", "rgb(74 74 219 / 14%)");
        } else {
            $("#msg_type").html("(SMS)");
            $(".msg_content_textarea").css("background-color", "#f7f7f7");
        }
    } else if (type == "msg_content"){
        $("#msg_content_byte").html(byte + " / 90 byte");
        
        if(byte > 90) {
            $("#msg_content_byte").html(byte + " / 2000 byte");
            $(".msg_content_textarea").css("background-color", "rgb(74 74 219 / 14%)");
            $("#msg_type").html("(LMS)");
        } else{
            $("#msg_content_byte").html(byte + " / 90 byte");
            $(".msg_content_textarea").css("background-color", "#f7f7f7");

            if($("#msg_title").val().length > 0){
                $(".msg_content_textarea").css("background-color", "rgb(74 74 219 / 14%)");
                $("#msg_type").html("(LMS)");
            } else {
                $("#msg_type").html("(SMS)");
            }
        }
    }
}

function receiving_num_check( )
{
    let parsley = $( "#msg-send-form" )
        .parsley( );

    // add_receiving_num();

    if ( !parsley.validate( ) )
    {
        util.addToastMessage( $( ".msg-send-form-toastList" ), "warning", "fas fa-exclamation-triangle", "등록할 수 없습니다, 오류메세지를 확인하세요.", 1000 * 8 );
        return;
    }
    
    add_receiving_num();
}

function add_receiving_num(){

    let html_tr = `<tr><td>${$("#msg_receiving_num").val()}<i class="fa-solid fa-x del_btn" onclick="remove_receiving_num(this);"></i></td></tr>`;
    let html_td = `<td>${$("#msg_receiving_num").val()}<i class="fa-solid fa-x del_btn" onclick="remove_receiving_num(this);"></i></td>`;

    if($(".receiving_num_list_table").find("tr").last().find("td").length == 0 || $(".receiving_num_list_table").find("tr").last().find("td").length > 3){
        $(".receiving_num_list_table").append(html_tr);
    } else {
        $(".receiving_num_list_table").find("tr").last().append(html_td);
    }
    
    $("#msg_receiving_num").val("");
    receiving_num_list_cnt_check();

}

function remove_receiving_num_list(){
    $(".receiving_num_list_table").html("");
    receiving_num_list_cnt_check();
}

function receiving_num_list_cnt_check(){

    let cnt = $(".receiving_num_list_table").find("td").length;
    $(".receiving_num_list_cnt").html(`총 ${cnt} 개`);
}

function remove_receiving_num(obj){

    $(obj).parent("td").remove();
    
    receiving_num_list_cnt_check();
}