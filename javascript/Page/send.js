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

});



