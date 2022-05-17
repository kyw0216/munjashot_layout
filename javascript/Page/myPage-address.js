$(document).ready(function () {

    allChk();
    

});


// 전체 선택/해제
function allChk() {
    $("#all_chk").click(function () {
        if ($("#all_chk").prop("checked")) {
            $("input[name=barcode_chk]").prop("checked", true);
        } else {
            $("input[name=barcode_chk]").prop("checked", false);
        }
    });
}