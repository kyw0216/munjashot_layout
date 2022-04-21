// $(function () {


//     $(".gs-left-bar-lnb .lnb-list-item-inner").removeClass("open");
//     $(".gs-left-bar-lnb .lnb-list-item-inner .lnb-con").hide();
//     $(".gs-left-bar-lnb .lnb-list-item-inner .lnb-con a").removeClass("on");


// });



$("document").ready(function () {
    _lnb.init();

    /* *********************** lnb 펼치기 ************************ */
    $('.gs-left-bar-inner').each(function () {
        var $lnbItem = $(this).find('.lnb-list-item-inner');

        $lnbItem.children('dt').click(function () {
            var $lnbItem = $(this).closest('dt').siblings();
            if ($lnbItem.css('display') == 'block') {
                $(this).closest('dt').siblings().slideUp();
                $('.lnb-list-item-inner').removeClass('open');
            } else {
                $('.lnb-list-item-inner > dd:visible').slideUp();
                $('.lnb-list-item-inner').removeClass('open');
                $(this).closest('dt').parent('dl').addClass('open');
                $lnbItem.slideDown();
            }
        });
    });
});

var _lnb = {
    top: function () {
        return _lnb;
    },
    init: function () {
        var _this = this.top();
        if ($("#loginCheck") && $("#loginCheck").val() == "true") {
            _this.proc.getInfo();
        }
        _this.func.onLnb();
        _this.btn();
    },
    btn: function () {
        var _this = this.top();

        $("#alarmBtn").off("click").on("click", function () {
            _this.proc.readAlarm();
        });

    },
    proc: {
        top: function () {
            return _lnb;
        },
        getInfo: function () {
            var _this = this.top();

            var ajaxUrl = "/ajax/info/lnb";
            $.ajax({
                url: ajaxUrl,
                type: "GET",
                dataType: "text",
                timeout: 30000,
                success: function (_data) {
                    var json = _IBJson.decode(_data);
                    if (json) {
                        var result_code = json.rsltCode;
                        if (result_code == "R000") {
                            $("#leftBar .userCash").html(_IBCommon.format_number(json.userCash.cash));
                            $("#leftBar .userPoint").html(_IBCommon.format_number(json.userCash.point));

                            var pricePlanName = json.pricePlanName;
                            pricePlanName = pricePlanName.replace(" 요금제", "");
                            $("#leftBar .pricePlanName").html(pricePlanName);

                            var noticeCnt = json.noticeCnt;
                            if (noticeCnt > 0) {
                                $("#leftBar .alarm").addClass("new");
                                if (noticeCnt == 1)
                                    $(".side-alarm-txt").html(json.noticeList[0].notice + " (" + _this.func.timeForToday(json.noticeList[0].reg_date) + ")");
                                else
                                    $(".side-alarm-txt").html(json.noticeList[0].notice + " (" + _this.func.timeForToday(json.noticeList[0].reg_date) + ")" + " 외 " + _IBCommon.format_number(noticeCnt - 1) + "건");
                            } else {
                                $(".side-alarm-txt").html("최근 알림 내역이 없습니다.");
                            }

                            if (json.callbackStatus)
                                $("#leftBar .message").addClass("use");

                            if (json.kakaoSenderkeyStatus)
                                $("#leftBar .kakaoTalk").addClass("use");
                        } else if (result_code == "R902") {} else {
                            IBAlert(json.rsltMsg);
                        }
                    } else {
                        //json data not exist
                        IBAlert(Common.getAlertMsg("501"));
                    }
                }
            });

        },
        readAlarm: function () {
            var _this = this.top();

            var ajaxUrl = "/ajax/info/alarm/read";
            $.ajax({
                url: ajaxUrl,
                type: "GET",
                dataType: "text",
                timeout: 30000,
                success: function (_data) {
                    var json = _IBJson.decode(_data);
                    if (json) {
                        var result_code = json.rsltCode;
                        if (result_code == "R000") {
                            $("#leftBar .alarm").removeClass("new");
                        } else if (result_code == "R902") {} else {
                            IBAlert(json.rsltMsg);
                        }
                    } else {
                        //json data not exist
                        IBAlert(Common.getAlertMsg("501"));
                    }
                }
            });

        }

    },
    func: {
        top: function () {
            return _lnb;
        },
        timeForToday: function (value) {
            var today = new Date();
            var timeValue = new Date(value);

            /*var betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
			if (betweenTime < 1) return '방금전';
			if (betweenTime < 60) {
				return betweenTime + '분전';
			}
	
			var betweenTimeHour = Math.floor(betweenTime / 60);
			if (betweenTimeHour < 24) {
				return betweenTimeHour + '시간전';
			}
	
			var betweenTimeDay = Math.floor(betweenTime / 60 / 24);
			if (betweenTimeDay < 365) {
				return betweenTimeDay + '일전';
			}
	
			return Math.floor(betweenTimeDay / 365) + '년전';*/

            var toDayTime = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
            var timeValueTime = timeValue.getFullYear() + "-" + timeValue.getMonth() + "-" + timeValue.getDate();
            if (toDayTime == timeValueTime) {
                var hour = new String(timeValue.getHours());
                if (hour.length == 1)
                    hour = "0" + hour;
                var minute = new String(timeValue.getMinutes());
                if (minute.length == 1)
                    minute = "0" + minute;
                return hour + ":" + minute;
            } else {
                var betweenTime = Math.floor((new Date(toDayTime).getTime() - new Date(timeValueTime).getTime()) / 1000 / 60);
                var betweenTimeDay = Math.floor(betweenTime / 60 / 24);
                if (betweenTimeDay < 8) {
                    return betweenTimeDay + '일전';
                }

                var year = timeValue.getFullYear();
                var month = new String(timeValue.getMonth() + 1);
                var day = new String(timeValue.getDate());
                if (month.length == 1)
                    month = "0" + month;
                if (day.length == 1)
                    day = "0" + day;

                return year + "-" + month + "-" + day;
            }

        },
        onLnb: function () {

            var currPage = $(location).attr('pathname');

            // console.log(currPage);

            $(".gs-left-bar-lnb .lnb-list-item-inner").removeClass("open");
            $(".gs-left-bar-lnb .lnb-list-item-inner .lnb-con").hide();
            $(".gs-left-bar-lnb .lnb-list-item-inner .lnb-con a").removeClass("on");

            console.log(currPage);

            switch (currPage) {
                case "/payment/charge":
                    $(".lnb1").addClass("open");
                    break;
                case "/payment/receipt":
                    $(".lnb2").addClass("open");
                    $(".lnb2 .lnb-con").show();
                    $(".lnb2-1").addClass("on");
                    break;
                case "/payment/tax":
                    $(".lnb2").addClass("open");
                    $(".lnb2 .lnb-con").show();
                    $(".lnb2-1").addClass("on");
                    break;
                case "/payment/detail":
                    $(".lnb2").addClass("open");
                    $(".lnb2 .lnb-con").show();
                    $(".lnb2-2").addClass("on");
                    break;
                case "/callback/callbackper":
                    $(".lnb3").addClass("open");
                    $(".lnb3 .lnb-con").show();
                    $(".lnb3-1").addClass("on");
                    break;
                case "/callback/callbackcor":
                    $(".lnb3").addClass("open");
                    $(".lnb3 .lnb-con").show();
                    $(".lnb3-1").addClass("on");
                    break;
                case "/sender/channel":
                    $(".lnb3").addClass("open");
                    $(".lnb3 .lnb-con").show();
                    $(".lnb3-2").addClass("on");
                    break;
                case "/box/message":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-1").addClass("on");
                    break;
                case "/template/list":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-2").addClass("on");
                    break;
                case "/template/registration":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-2").addClass("on");
                    break;
                case "/template/registrationbulk":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-2").addClass("on");
                    break;
                case "/template/talkSample":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-2").addClass("on");
                    break;
                case "/box/friendtalk":
                    $(".lnb4").addClass("open");
                    $(".lnb4 .lnb-con").show();
                    $(".lnb4-3").addClass("on");
                    break;
                case "/address":
                    $(".lnb5").addClass("open");
                    break;
                case "/message/list":
                    $(".lnb6").addClass("open");
                    $(".lnb6 .lnb-con").show();
                    $(".lnb6-1").addClass("on");
                    break;
                case "/message/detail":
                    var type = $.urlParam('type');

                    if (type != undefined && type == 'resv') {
                        $(".lnb6").addClass("open");
                        $(".lnb6 .lnb-con").show();
                        $(".lnb6-2").addClass("on");
                    } else {
                        $(".lnb6").addClass("open");
                        $(".lnb6 .lnb-con").show();
                        $(".lnb6-1").addClass("on");
                    }
                    break;
                case "/message/reservation":
                    $(".lnb6").addClass("open");
                    $(".lnb6 .lnb-con").show();
                    $(".lnb6-2").addClass("on");
                    break;
                case "/refuse":
                    $(".lnb6").addClass("open");
                    $(".lnb6 .lnb-con").show();
                    $(".lnb6-3").addClass("on");
                    break;
            }
        },
        guideLink: function () {
            var browser = checkBroswer();

            if (browser == "ie-") {
                IBAlert("크롬(chrome)이나 엣지(Edge) 브라우저에서 확인하실 수 있습니다.");
            } else if (browser == "ie11") {
                if (navigator.userAgent.indexOf('Windows NT 10.0') > -1) {
                    //window.open('microsoft-edge:https://www.notion.so/Wingo-48bf0158772b4539af4a9c2ce45b4605');
                    //location.href='microsoft-edge:https://www.notion.so/Wingo-48bf0158772b4539af4a9c2ce45b4605';
                    IBAlert("크롬(chrome)이나 엣지(Edge) 브라우저에서 확인하실 수 있습니다.");
                } else {
                    IBAlert("크롬(chrome)이나 엣지(Edge) 브라우저에서 확인하실 수 있습니다.");
                }
            } else {
                window.open('https://infobank-wingo.notion.site/Wingo-68b3e43b6e37412c86faafa1422ecc9c');
            }

        }

    }

};