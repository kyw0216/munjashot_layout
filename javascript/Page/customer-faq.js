$(document).ready(function () {

    $(".tab_title li").click(function () {

        var idx = $(this).index();

        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");

        $(".tab_cont .tab_in_content").removeClass("on");
        $(".tab_cont .tab_in_content").eq(idx).addClass("on");

        $(".tab_cont .tab_in_content").hide();
        $(".tab_cont .tab_in_content").eq(idx).css("display", "flex");
    });


    var lastItem;

    $(".customer-support-faq-list .item").click(function () {

        $(".customer-support-faq-list").find(".item").removeClass("open");
        $(".customer-support-faq-list").find(".answer").slideUp("fast");

        if (lastItem && lastItem.is($(this))) {
            lastItem = null;
            return;
        }

        $(this).find(".item").addClass("open");

        $(this).find(".answer").slideDown("fast");
        lastItem = $(this);

    });

});