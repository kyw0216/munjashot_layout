$(document).ready(function () {
    
    allChk();
    chk_sum();

    // console.log($("input:radio[name=menu_select]").val());

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
            $("input[name=select_chk]").prop("checked", true);
            $("input[name=select_chk]").trigger("change");
        } else {
            $("input[name=select_chk]").prop("checked", false);
            $("input[name=select_chk]").trigger("change");
        }
    });
}

function chk_sum() {
    
    $("input[name=select_chk]").change(function(){

        let sum = $("input[name=select_chk]:checked").length;
        $("#select_sum").val(sum);

    });
}

function chk_sum2() {

    let sum = $("input[name=select_chk]:checked").length;
    console.log(sum);
    $("#select_sum").val(sum);

}