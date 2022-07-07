$(document).ready(function () {
  
    $("input:radio[name=account_type]").change(function () {

        console.log($("input:radio[name=account_type]:checked").val());

        if ($("input:radio[name=account_type]:checked").val() === "private") {
            $(".private_div").css("display", "flex");
            $(".enterprise_div").css("display", "none");
            $(".privateTab2_div").css("display", "none");
            $(".enterpriseTab2_div").css("display", "none");
            $(".privateAuthTab_div").css("display", "none");
            $(".privatePWChangeTab_div").css("display", "none");

        } else {
            $(".enterprise_div").css("display", "flex");
            $(".private_div").css("display", "none");
            $(".privateTab2_div").css("display", "none");
            $(".enterpriseTab2_div").css("display", "none");
            $(".enterpriseAuthTab_div").css("display", "none");
            $(".enterprisePWChangeTab_div").css("display", "none");
        }

    });

});

function goPrivateIDTab2() {
    $(".privateTab2_div").css("display", "flex");
}

function goPrivateIDSearch() {
    $("#p_name").val("백지은");
}

function goEnterpriseIDSearch() {
    $("#e_name").val("백지은");
}

function goPrivateAuthTab() {
    $(".privateAuthTab_div").css("display", "flex");
}

function goPrivatePasswordTab() {
    console.log("asdf");
    $(".privatePWChangeTab_div").css("display", "flex");
}

function goEnterpriseIDTab2() {
    $(".enterpriseTab2_div").css("display", "flex");
}

function goEnterpriseAuthTab() {
    $(".enterpriseAuthTab_div").css("display", "flex");
}

function goEnterprisePasswordTab() {
    $(".enterprisePWChangeTab_div").css("display", "flex");
}