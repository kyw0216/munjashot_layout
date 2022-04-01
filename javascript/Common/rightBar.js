$(function () {

    /* *********************** 사이드바 오픈 ************************ */
    if ($(rightBar).width() < 1600) {
        setTimeout(function () {
            $('#cmRightBar').addClass('close');
        }, 200);
    }

    $(window).resize(function () {
        var win_width = $(window).width();

        if (1849 < win_width) {
            $('#rightBar').removeClass('close');
        } else if (1599 < win_width) {
            $('#rightBar').removeClass('close');
        } else if (win_width < 1600) {
            $('#rightBar').addClass('close');
        }
    });

    if ($(window).width() < 1600) {
        setTimeout(function () {
            $('#rightBar').addClass('close');
        }, 200);
    }

    $(window).resize(function () {
        var win_width = $(window).width();

        if (1849 < win_width) {
            $('#rightBar').removeClass('close');
        } else if (1599 < win_width) {
            $('#rightBar').removeClass('close');
        } else if (win_width < 1600) {
            $('#rightBar').addClass('close');
        }
    });

    /* *********************** 오른쪽 사이드바 오픈 ************************ */
    $('.right-bar-open-btn').click(function () {
        $('#rightBar').toggleClass('close');
    });

});