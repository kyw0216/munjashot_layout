var _Swiper;

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var banner_swiper;
var banner_swiper2;
var banner_swiper3;

function swiper_banner() {
    banner_swiper = new Swiper('.main_content1', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}

function swiper_banner2() {
    banner_swiper2 = new Swiper('.swiper-container7', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function swiper_banner3() {
    banner_swiper3 = new Swiper('.swiper-container3', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function fn_open_ai_Result(){
    $(".ai_result_div").css("display", "block")
}

function fn_close_ai_Result(){
    $(".ai_result_div").css("display", "none");
    $(".ai_table").find("td").removeClass("on");
}

$(document).ready(function () {
    // 배너 슬라이드 실행
    swiper_banner();
    swiper_banner2();
    swiper_banner3();

    $(".tab_title li").click(function () {
        var idx = $(this).index();

        console.log(idx);
        console.log($(".tab_title li").eq(idx));

        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");

        $(".tab_cont > div").removeClass("on");
        $(".tab_cont div").eq(idx).addClass("on");

        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).css("display", "flex");
    });

    $(".main_content8 .image_area .row_wrapper .row3 .box").click(function () {

        var idx = $(this).index();

        console.log(idx);

        $(".main_content8 .image_area .row_wrapper .row2 .content").removeClass("on").hide();
        $(".main_content8 .image_area .row_wrapper .row2 .content").eq(idx).addClass("on").fadeIn(300);

    });

    $(".ai_table td").click(function(){
        
        if($(this).find(".hash_chk").prop("checked")){
            $(this).find(".hash_chk").prop("checked", false);
            $(this).removeClass("on");
            
        }else {
            $(this).find(".hash_chk").prop("checked", true);
            $(this).addClass("on");
        }
    });

});