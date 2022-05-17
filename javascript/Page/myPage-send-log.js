$(document).ready(function () {

    console.log($("input:radio[name=menu_select]").val());

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

});
