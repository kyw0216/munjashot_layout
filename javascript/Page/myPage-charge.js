$(document).ready(function () {


    console.log($("input:radio[name=menu_select]").val());

    $("input:radio[name=menu_select]").change(function () {

        console.log($("input:radio[name=menu_select]:checked").val());

        if ($("input:radio[name=menu_select]:checked").val() === "bank") {
            $(".bank_div").css("display", "flex");
        } else {
            $(".bank_div").css("display", "none");
        }

        // console.log($("input:radio[name=menu_select]:checked").val());
        

        if ($("input:radio[name=menu_select]:checked").val() === "charge_log") {
            $(".charge_log_div").css("display", "flex");
            $(".use_log_div").css("display", "none");
        } else {
            $(".charge_log_div").css("display", "none");
            $(".use_log_div").css("display", "flex");
        }

    });

    
});


function process_payment(){

    if( !$("input:radio[name=money_select]:checked").val() ){
        util.alert("알림", "error", "충전금액을 선택해주세요.");
        return false;
    } else {
        if($("input:radio[name=money_select]:checked").val() === "direct" && $("#direct_amount").val().trim() === ""){
            util.alert("알림", "error", "충전금액을 입력해주세요.") 
            return false;
        }
        
        alert("KG 모빌리언스 결제창");
    }

}