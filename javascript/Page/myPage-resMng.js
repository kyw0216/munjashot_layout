$(document).ready(function () {

    allChk();
    chk_sum();

    $("input:radio[name=menu_select]").change(function () {

        console.log($("input:radio[name=menu_select]:checked").val());

        if ($("input:radio[name=menu_select]:checked").val() === "group_mng") {
            $(".group_mng_div").css("display", "flex");
            $(".group_add_div").css("display", "none");
        } else {
            $(".group_mng_div").css("display", "none");
            $(".group_add_div").css("display", "flex");
        }

    });
    
});


// 전체 선택/해제
function allChk() {
    $("#all_chk").click(function () {
        if ($("#all_chk").prop("checked")) {
            $("input[name=res_chk]").prop("checked", true);
            $("input[name=res_chk]").trigger("change");
        } else {
            $("input[name=res_chk]").prop("checked", false);
            $("input[name=res_chk]").trigger("change");
        }
    });
}

function chk_sum() {
    $("input[name=res_chk]").change(function(){

        let sum = $("input[name=res_chk]:checked").length;

        $("#res_sum").val(sum);

    });
}

function reservation_cancel(){
    
    util.confirm("경고", "warning", "해당 발송 예약을 취소하시겠습니까?").then(function (result) {
        if (!result) return;
        util.alert('예약취소 완료', 'success', '예약 발송이 취소되었습니다.', null, null, null, function(){
            location.href = "../Page/myPage-resMng-tui.html";
        });
    });

}

function reservation_cancel2(){
    
    util.confirm("경고", "warning", "해당 발송 예약을 취소하시겠습니까?").then(function (result) {
        if (!result) return;
        util.alert('예약취소 완료', 'success', '예약 발송이 취소되었습니다.', null, null, null, function(){
            location.href = "../Page/myPage-resMng-time-tui.html";
        });
    });

}

function reservation_cancel3(){
    
    util.confirm("경고", "warning", "해당 발송 예약을 취소하시겠습니까?").then(function (result) {
        if (!result) return;
        util.alert('예약취소 완료', 'success', '예약 발송이 취소되었습니다.', null, null, null, function(){
            location.href = "../Page/myPage-resMng-time-detail-tui.html";
        });
    });

}