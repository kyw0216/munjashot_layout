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

// function swiper_banner() {
//     banner_swiper = new Swiper('.main_content1', {
//         observer: true,
//         observeParents: true,
//         direction: 'horizontal',
//         loop: true,
//         speed: 1200,
//         autoplay: {
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         }
//     });
// }

function swiper_banner2() {
    banner_swiper2 = new Swiper('.swiper-container7', {
        // slidesPerView : 4, // 동시에 보여줄 슬라이드 갯수
        slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
        spaceBetween : 30, // 슬라이드간 간격
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
            el: ".swiper-pagination",
            clickable: true,
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
    // swiper_banner();
    swiper_banner2();
    swiper_banner3();

    $(".tab_title li").click(function () {
        var idx = $(this).index();

        console.log(idx);
        console.log($(".tab_title li").eq(idx));

        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");

        $(".tab_cont > div").removeClass("on");
        $(".tab_cont > div").eq(idx).addClass("on");

        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).css("display", "flex");
    });

    // $(".main_content8 .image_area .row_wrapper .row3 .box").click(function () {
    $(".main_content8 .image_area .content_list_wrapper").click(function () {

        var idx = $(this).index();

        console.log(idx);

        $(".main_content8 .image_area .row_wrapper .content").removeClass("on").hide();
        $(".main_content8 .image_area .row_wrapper .content").eq(idx).addClass("on").fadeIn(300);

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





/* *******************************************************
 * filename : main.js
 * description :메인에만 사용되는 JS
 * date : 2020-07-07
******************************************************** */


/* ************************
  * 높이 체크해서 해당 높이에서 이벤트 발생
  ************************ */
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top + 400,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


/* ************************
  * Active cycle
  ************************ */
function rollingActive (activeList) {
	$(activeList).each(function  (index) {
		$itemList = $(this);
		$item = $itemList.find("li");
		itemLength = $item.length;
		startNum = 0;
		rollingSpeed = $itemList.data("rolling-time");
		
		function visualTime(){
			if(startNum < ( itemLength - 1)){
				startNum++;
			}else{
				startNum = 0;
			}
			visualPlay();
		}
		function visualPlay(){
			$item.each(function(id){
				if(id == startNum){
					$(this).addClass("active"); // li에 클래스 붙이기
				}else{
					$(this).removeClass("active");
				}
			});
		};
		visualPlay();
		visual_timer = setInterval(visualTime,rollingSpeed);

		$(".main-submit-list li").hover(function  () {
			clearInterval(visual_timer);
			$(".main-submit-list li").removeClass("active");
			$(this).addClass("active");
		},function  () {
			clearInterval(visual_timer);
			$(".main-submit-list li").removeClass("active");
			visual_timer = setInterval(visualTime,rollingSpeed);
		});
	});
}

jQuery(function($){

	/* *********************** 카카오플러스 친구톡 슬라이드 ************************ */
	$(".us-main-visual-con").on('init', function(event, slick) {
		$(".us-main-visual-item").eq(0).addClass("active-item");
	});
	$(".us-main-visual-con").on('beforeChange', function(event, slick, currentSlide, nextSlide) {	
		$(".us-main-visual-item").removeClass("active-item");
		$(this).find(".us-main-visual-item").eq(nextSlide).addClass("active-item")
	});

	$(".us-main-visual-con").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots:true,
		autoplay: true,
		speed:800,
		infinite:true,
		autoplaySpeed: 4000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		zIndex:1,
		pauseOnFocus:false
	});

	$(".us-main-visual-con").find(".slick-dots").wrap("<aside class='slick-dots-wrapper'><div class='area'></div></aside>");

});