$(document).ready(function () {
    
    allChk();
    chk_sum();

    console.log($("input:radio[name=menu_select]").val());

    $("input:radio[name=menu_select]").change(function () {


        if ($("input:radio[name=menu_select]:checked").val() === "message") {
            $(".message_div").css("display", "flex");
            $(".fax_div").css("display", "none");
        } else {
            $(".message_div").css("display", "none");
            $(".fax_div").css("display", "flex");
        }

    });

    
});


// 전체 선택/해제
function allChk() {
    $("#all_chk").click(function () {
        if ($("#all_chk").prop("checked")) {
            $("input[name=fax_chk]").prop("checked", true);
            $("input[name=fax_chk]").trigger("change");
        } else {
            $("input[name=fax_chk]").prop("checked", false);
            $("input[name=fax_chk]").trigger("change");
        }
    });
}
