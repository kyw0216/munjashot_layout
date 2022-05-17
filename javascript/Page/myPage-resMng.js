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