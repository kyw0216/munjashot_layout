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

var banner_swiper1;

var bullet = [
    `<span>기업</span>`,
    `<span>개인</span>`,
    `<span>대량발송</span>`,
];

function swiper_banner1() {
    banner_swiper1 = new Swiper('.swiper-container2', {
        // slidesPerView : 2, // 동시에 보여줄 슬라이드 갯수
        // spaceBetween : 10, // 슬라이드간 간격
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 500,
        autoplay: {
            delay: 4000000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="colmun_wrapper bullet_button ${className}">${bullet[index]}</div>`
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

$(document).ready(function () {
    // 배너 슬라이드 실행
    swiper_banner1();
});

function inquiry_layout(){
    $(".main_content5").css("display", "flex");
}

//이메일 입력방식 선택
function selectEmail_Event(){
    $('#selectEmail').change(function(){

        $("#selectEmail option:selected").each(function () {
            if($(this).val() == '1'){ //직접입력일 경우
                $("#email_second").val('');                     //값 초기화
                $("#email_second").attr("disabled",false);      //활성화
            }else{ //직접입력이 아닐경우
                $("#email_second").val($(this).text());         //선택값 입력
                $("#email_second").attr("disabled",true);       //비활성화
            }
        });
    });
}