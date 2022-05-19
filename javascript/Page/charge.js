"use strict";

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

var swiper_bottom_banner = new Swiper('.banner-bottom-container', (_Swiper = {
    // effect: 'coverflow', // 커버플로우 효과 사용
    // coverflowEffect:
    // {
    //     slideShadows: true, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과
    //     rotate: 50, // 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
    //     stretch: 0, // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
    //     depth: 100, // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
    //     modifier: 1, // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
    // },
    observer: true,
    observeParents: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 20
}, _defineProperty(_Swiper, "centeredSlides", true), _defineProperty(_Swiper, "simulateTouch", true), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "slideToClickedSlide", true), _defineProperty(_Swiper, "autoplay", {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
}), _defineProperty(_Swiper, "breakpoints", {
    768: {
        spaceBetween: 40
    }
}), _Swiper));

$('.swiper-slide').on('mouseover', function () {
    swiper_bottom_banner.autoplay.stop();
});

$('.swiper-slide').on('mouseout', function () {
    swiper_bottom_banner.autoplay.start();
});

swiper_bottom_banner.on('slideChange', function () {

    // console.log("index");

    var index = swiper_bottom_banner.activeIndex;
    var active_slide = $('.banner-bottom-slide').eq(index); // 활성화 된 슬라이드

    var non_active_slide = $('.banner-bottom-slide').eq(index).siblings(); // 비활성화 된 슬라이드

    active_slide.addClass('banner-bottom-slide-active');
    active_slide.animate({
        opacity: "1"
    }, 300);
    non_active_slide.removeClass('banner-bottom-slide-active');
    non_active_slide.animate({
        opacity: "0.1"
    }, 300);

    if (index === 7) {
        showsubimg(0);
    } else {
        showsubimg(index - 3);
    }
});

function showsubimg(index) {
    $('.main_content2 .contents').removeClass('banner-bottom-slide-select');
    $('.main_content2 .contents').eq(index).addClass('banner-bottom-slide-select');
    $('.main_content2 .contents').each(function () {
        if ($(this).hasClass('banner-bottom-slide-select')) {
            $(this).addClass('overcolor');
        } else {
            $(this).removeClass('overcolor');
        }
    });
    swiper_bottom_banner.slideTo(index + 3, 1000);
}

$(document).ready(function () {

    showsubimg(0); // 활성화 된 슬라이드에 클래스 추가

    $('.banner-bottom-slide').eq(swiper_bottom_banner.activeIndex).addClass('banner-bottom-slide-active'); // 활성화 된 슬라이드 애니메이션

    $('.banner-bottom-slide').eq(swiper_bottom_banner.activeIndex).animate({
        opacity: "1"
    }, 300); // 비활성화 된 슬라이드 애니메이션

});

function inquiry_layout(){
    $(".main_content5").css("display", "flex");
}