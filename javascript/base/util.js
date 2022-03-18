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

/*
 *   
 *   작성자: 서용하(syh@emfoplus.co.kr)
 */
var util = {}; // 전역 객체로 선언되어 사용
// 브라우저 시간 형식 ko

if (window.moment) moment.locale("ko");

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (str, newStr) {
        if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
            return this.replace(str, newStr);
        }

        return this.replace(new RegExp(str, 'g'), newStr);
    };
} // 스마트광고 사용
// Cookie 정보를 가져오는 함수


util.getCookie = function (name) {
    var i,
        x,
        y,
        cookies = document.cookie.split(";");

    for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, ""); // 앞뒤 공백 제거

        if (x === name) return unescape(y);
    }
}; // 스마트광고 사용
// Cookie를 세팅하는 함수


util.setCookie = function (name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = name + "=" + c_value;
}; // IE 버전을 확인하는 함수
// https://tonks.tistory.com/107


util.getIEVersion = function () {
    var word;
    var agent = navigator.userAgent.toLowerCase(); // IE old version ( IE 10 or Lower ) 

    if (navigator.appName == "Microsoft Internet Explorer") word = "msie "; // IE 11 
    else if (agent.search("trident") > -1) word = "trident/.*rv:"; // Microsoft Edge
    else if (agent.search("edge/") > -1) word = "edge/"; // 그외, IE가 아니라면 ( If it's not IE or Edge )
    else return -1;
    var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
    if (reg.exec(agent) != null) return parseFloat(RegExp.$1 + RegExp.$2);
    return -1;
}; // QueryString key, value를(1개 이상) 객체로 반환


util.getQueryObject = function () {
    var queryStr = window.location.search,
        // ?부터 QueryString 반환
        queryArr = queryStr.replace("?", "").split("&"),
        // ? 제거하고 QeuryString Key=value 반환
        queryParams = {};
    var length = queryArr.length;

    for (var i = 0; i < length; i++) {
        if (!queryArr[i]) continue;
        var qArr = decodeURIComponent(queryArr[i]).split("="); // qArr[0]은 key qArr[1]은 value

        queryParams[qArr[0]] = qArr[1] || "";
    }

    return queryParams;
}; // 0을 원하는 자리수 만큼 채워주는 함수


util.leadingZeros = function (n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++) {
            zero += '0';
        }
    }

    return zero + n;
}; // 스마트광고 사용
// 이미지 유효성 검사


util.checkImageValid = function (src) {
    return new Promise(function (resolve, reject) {
        var image = new Image(); // <img> 생성

        image.src = src;

        image.onload = function () {
            resolve(true);
        };

        image.onerror = function () {
            reject();
        };
    });
}; // 사용 안됨
// 이미지 변경


util.smoothImageChange = function (img, newSrc) {
    var maskObj = $("<img src=\"".concat(img.attr("src"), "\" />")).insertAfter(img); // img태그 뒤에 img 태그 생성하여 삽입

    maskObj.copyCSS(img, ["position", "top", "left", "width", "height"]); //

    maskObj.on("load", function () {
        img.attr("src", newSrc);
        maskObj.opacityTo(0, 300, function () {
            maskObj.remove();
        });
    });
}; // 스마트광고 사용
// 팝업 메세지 추가


util.addToastMessage = function (area, type, icon, message, disposeTime, onDispose) {
    area.empty();
    var newItem = $("<div class=\"ctrl-toast-message ".concat(type, "\">\n            <i class=\"").concat(icon, "\"></i>\n            <p>").concat(message, "</p>\n        </div>")).appendTo(area);
    var height = newItem.height();
    newItem.css("height", "0").animate({
        height: "".concat(height, "px"),
        opacity: "1",
        "margin-top": "12px"
    }, 300, "swing");

    if (disposeTime !== 0) {
        setTimeout(function () {
            if (newItem) {
                newItem.animate({
                    height: "0",
                    opacity: "0",
                    "margin-top": "0"
                }, 300, "swing", function () {
                    $(this).remove();
                });
                if (onDispose) onDispose();
            }
        }, disposeTime || 4500);
    }
}; // 스마트광고 사용
// 팝업 메세지 없애기


util.clearToastMessage = function (area) {
    area.empty();
}; // ajax 요청 함수
// util.apiRequest = function( method, type, data, extraParams )


util.apiRequest = function (url, method, data, extraParams) // method -> url, type -> params
{
    return new Promise(function (resolve, reject) {
        var params = {
            url: url,
            method: method,
            data: data,
            dataType: "json",
            cache: false,
            success: function success(result) {
                resolve(result);
            },
            error: function error(err) // 프로시저에서 던져준 RESULT 값 err변수에 담아 넘겨줌
            {
                reject(err);
            } // beforeSend: function( )
            // {
            //     if ( loadingMessage )
            //         util.setVisibleLoading( true, loadingMessage );
            // },
            // complete: function( )
            // {
            //     if ( loadingMessage )
            //         util.setVisibleLoading( false );
            // }

        };
        if (extraParams) params = Object.assign(params, extraParams);
        $.ajax(params); // ajax 요청
    });
}; // 스마트광고 사용
// imageURL을 이용하여 base64로 인코딩


util.imageURLToBase64 = function (url) {
    return new Promise(function (resolve, reject) {
        var canvas = document.createElement("canvas");
        var image = new Image();
        image.src = url;

        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            resolve(dataURL);
        };
    });
}; // 커스터마이징된 forEach문


util.forEach = function (arr, callback) {
    var length = arr.length;
    var breaked = false;

    for (var i = 0; i < length; i++) {
        if (callback(arr[i], i) === true) {
            breaked = true;
            break;
        }
    }

    return breaked;
}; // 로딩 보이기


util.setVisibleLoading = function (visibility, text) {
    var loadingObj = $(".editor-loading");

    if (visibility) {
        loadingObj.show(); // 로딩 객체 보이기

        if (text) {
            loadingObj.find(".message") // 로딩 객체 text 초기화
                .text(text);
        }
    } else loadingObj.hide(); // 로딩 객체 숨기기

}; // 스마트광고 사용
// 클립보드에 복사


util.copyToClipboard = function (value) {
    var tempElement = document.createElement("textarea"); // tempElement.style.display = "none";

    document.body.appendChild(tempElement);
    tempElement.value = value;
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
}; // Error 콘솔 출력


util.printError = function (message) {
    console.log("%c(\uC624\uB958) ".concat(message), "color: red; font-size: 13px; font-weight: bold; font-family: '\uB9D1\uC740 \uACE0\uB515';");
}; // 스마트광고 사용
// 말풍선 생성


util.createTooltip = function (obj, data) {
    tippy(obj[0], data);
}; // 하위 요소 추출


util.fetchChildElement = function (parentElement) {
    var result = {};
    parentElement.find("[data-id]") // [data-id] 속성을 가진 Element(String Arr) 추출
        .each(function (i, v) {
            v = $(v); // jQuery 변수로 초기화(element)

            var id = v.data("id"); // v 엘리먼트의 "id" value 값 추출

            if (id) result[id] = v; // 해당 id(Key)에 jQuery 요소(element) 저장
        });
    return result; // Element 객체들은 담은 객체 리턴
}; // 스마트광고 사용
// alert 커스터마이징


util.alert = function (title, icon, message, confirmButtonText, onClose, customProperty, callback) {
    var property = {
        customClass: {
            confirmButton: "btn",
            cancelButton: "btn style-danger"
        },
        buttonsStyling: false,
        title: title,
        icon: icon,
        html: message,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        confirmButtonText: confirmButtonText || "확인"
    };
    if (onClose) property.onClose = onClose; // 커스텀 속성 추가

    if (customProperty) property = Object.assign(property, customProperty); // sweetalert에 속성 값 넣어서 사용

    return Swal.fire(property).then(callback);
}; // 스마트광고 사용
// confirm 커스터마이징


util.confirm = function (title, icon, message, confirmButtonText, cancelButtonText, customProperty) {
    return new Promise(function (resolve) {
        var property = {
            customClass: {
                confirmButton: "btn",
                cancelButton: "btn style-danger"
            },
            buttonsStyling: false,
            title: title,
            icon: icon,
            html: message,
            allowOutsideClick: true,
            allowEscapeKey: false,
            allowEnterKey: true,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: confirmButtonText || "확인",
            cancelButtonText: cancelButtonText || "취소"
        }; // 커스텀 속성 추가

        if (customProperty) property = Object.assign(property, customProperty); // sweetalert에 속성 값 넣어서 사용

        Swal.fire(property).then(function (result) {
            resolve(result.value === true);
        });
    });
};

util._dialogStore = {}; // 스마트광고 사용
// 기본 Ajax Error Message 템플릿

util.getDefaultAjaxErrorMessage = function (err) {
    if (err.responseJSON) {
        switch (err.responseJSON.reason) {
            case "ERR_AUTH":
                return "죄송합니다, 접근이 거부되었습니다.";

            case "ERR_DB":
                return "죄송합니다, 데이터베이스 오류가 발생하였습니다.<br />엠포플러스(주) 고객센터(1599-2320)로 문의해주세요.";

            case "ERR_PARAMS":
                var extra = err.responseJSON.extra;
                if (extra) return "죄송합니다, 데이터 검증 오류가 발생하였습니다.<br /><br />" + extra.join("<br />");
                else return "죄송합니다, 데이터 오류가 발생하였습니다.<br />엠포플러스(주) 고객센터(1599-2320)로 문의해주세요.";

            default:
                return "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC11C\uBC84\uC5D0\uC11C \uCF54\uB4DC ".concat(err.status || 500, "\uC744 \uBC18\uD658\uD558\uC600\uC2B5\uB2C8\uB2E4.<br />\uC5E0\uD3EC\uD50C\uB7EC\uC2A4(\uC8FC) \uACE0\uAC1D\uC13C\uD130(1599-2320)\uB85C \uBB38\uC758\uD574\uC8FC\uC138\uC694.");
        }
    } else return "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC11C\uBC84\uC5D0\uC11C \uCF54\uB4DC ".concat(err.status || 500, "\uC744 \uBC18\uD658\uD558\uC600\uC2B5\uB2C8\uB2E4.<br />\uC5E0\uD3EC\uD50C\uB7EC\uC2A4(\uC8FC) \uACE0\uAC1D\uC13C\uD130(1599-2320)\uB85C \uBB38\uC758\uD574\uC8FC\uC138\uC694.");
}; // 스마트광고 사용
// 다이얼로그 보이기 설정


util.setVisibleDialog = function (id, visibility, onShowHide) {
    var bodyObj = $("body");
    var backdropObj = $(".dialog-backdrop");
    var dialogObj = $("#" + id); // 다이얼로그 엘리먼트

    var backdropVisible = backdropObj.isVisible(); // 현재 Visible 여부

    if (visibility && !dialogObj.isVisible()) // 다이얼로그 Visible이 false이고 보이게 하고싶은 경우
    {
        if (!this._dialogStore.hasOwnProperty(id)) // 다이얼로그에 값이 없는 경우
        {
            this._dialogStore[id] = dialogObj.clone().html(); // 다이얼로그 객체 복사
        } else // 현재 다이얼로그에 값이 있는 경우
        {
            dialogObj.empty().append($(this._dialogStore[id]));
        } // visibility 값 스위칭


        var switchFunc = function switchFunc(_visibility) {
            util.setVisibleDialog(id, _visibility);
        }; // 현재 Visible 여부 false인 경우


        if (!backdropVisible) {
            backdropObj.css("opacity", "0").show().opacityTo("1", 150);
        } // 현재 Visible 여부 true인 경우
        else {
            dialogObj.data("noBackDropHide", true);
        }

        dialogObj.show().startAnimation("fadeInUp 0.25s");
        bodyObj.addClass("modal-shown");

        if (onShowHide) {
            var childElementArgument = {};
            dialogObj.find("[data-id]").each(function (i, v) {
                v = $(v);
                var id = v.data("id");
                if (id) childElementArgument[id] = v;
            });
            onShowHide(dialogObj, childElementArgument, switchFunc);
        }
    } else if (!visibility && dialogObj.isVisible()) // 다이얼로그 Visible이 true이고 안보이게 하고싶은 경우
    {
        if (!dialogObj.data("noBackDropHide")) // noBackDropHide 값이 false인 경우
        {
            backdropObj.opacityTo("0", 150, function () {
                backdropObj.hide();
            });
        } else // noBackDropHide 값이 true인 경우
            dialogObj.data("noBackDropHide", false);

        dialogObj.startAnimation("fadeOutDown 0.2s", function () {
            bodyObj.removeClass("modal-shown");
            dialogObj.hide();
        });
        if (onShowHide) onShowHide();
    }
}; // 스마트광고 사용
// 로딩 보이기 설정


util.setVisibleBlock = function (visibility, message) {
    var loadingObj = $(".editor-block");

    if (visibility) {
        loadingObj.show(); // 로딩 객체 보이기

        if (message) {
            loadingObj.find(".message") // 로딩 객체 text 초기화
                .html(message);
        }
    } else loadingObj.hide(); // 로딩 객체 숨기기

}; // 스마트광고 사용
// 배열 요소 옮기기
//https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
// (배열, 원래 인덱스, 옮길 인덱스)


util.moveArrayElement = function (arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;

        while (k--) {
            arr.push(undefined);
        }
    }

    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
}; // 1000단위 , 붙이는 함수


util.formatCurrency = function (v) {
    if (v == 0) return 0;
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = v + "";

    while (reg.test(n)) {
        n = n.replace(reg, "$1,$2");
    }

    return n;
}; // assign 함수 없는 경우 함수 재정의
// *TODO: 추후 삭제 바람
// IE 버그 수정
// https://develop88.tistory.com/entry/%EA%B0%9C%EC%B2%B4%EA%B0%80-assign-%EC%86%8D%EC%84%B1%EC%9D%B4%EB%82%98-%EB%A9%94%EC%84%9C%EB%93%9C%EB%A5%BC-%EC%A7%80%EC%9B%90%ED%95%98%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%98%A4%EB%A5%98%EC%9D%BC%EB%96%84


if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            // .length of function is 2
            'use strict';

            if (target == null) {
                // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target); // [Property: Value]

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) {
                    // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }

            return to;
        },
        writable: true,
        configurable: true
    });
} // jQuery 사용자 정의 함수 추가
// $.fn.함수명 = function(){}


if (jQuery) {
    (function ($) {
        // 선택자
        $.fn.ignore = function (selector) {
            return this.clone().find(selector || ">*").remove().end();
        }; // visible 속성 유무 판별


        $.fn.isVisible = function () {
            return this.is(":visible");
        }; // undefiend 혹은 null 값 유효성 검증


        $.fn.isValid = function () {
            return this.length !== 0;
        }; // animation 시작 함수(속성, 끝날때 동작할 함수)


        $.fn.startAnimation = function (animationProprierties, onEnd) {
            var self = this;
            self.css("animation", animationProprierties).off("animationend webkitAnimationEnd oanimationend MSAnimationEnd").on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function () {
                self.css("animation", "");
                self.off("animationend webkitAnimationEnd oanimationend MSAnimationEnd");
                if (onEnd && typeof onEnd === "function") onEnd(self);
            });
            return this;
        }; // animation 끝내는 함수


        $.fn.stopAnimation = function () {
            this.off("animationend webkitAnimationEnd oanimationend MSAnimationEnd").css("animation", "");
            return this;
        }; // 투명도 애니메이션 (to에서 시작, 시간, 끝날때 동작할 함수)


        $.fn.opacityTo = function (to, duration, onEnd) {
            var self = this;
            this.stop().animate({
                opacity: to.toString()
            }, duration, "swing", function () {
                if (onEnd && typeof onEnd === "function") onEnd.call(this, self);
            });
            return this;
        }; // 애니메이션 (애니메이션 속성, to에서 시작, 시간, 끝날때 동작할 함수)


        $.fn.propertyTo = function (property, to, duration, onEnd) {
            var self = this;
            this.stop().animate(_defineProperty({}, property, to.toString()), duration, "swing", function () {
                if (onEnd && typeof onEnd === "function") onEnd.call(this, self);
            });
            return this;
        };
        /*
            COPYRIGHT FOR BELOW
              Copyright 2014 Mike Dunn
            http://upshots.org/
            Permission is hereby granted, free of charge, to any person obtaining
            a copy of this software and associated documentation files (the
            "Software"), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject to
            the following conditions:
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        */
        // CSS 속성 가져오기(속성값 담은 객체, 제외할 속성)


        $.fn.getStyles = function (only, except) {
            // the map to return with requested styles and values as KVP
            var product = {}; // the style object from the DOM element we need to iterate through

            var style; // recycle the name of the style attribute

            var name; // if it's a limited list, no need to run through the entire style object

            if (only && only instanceof Array) {
                for (var i = 0, l = only.length; i < l; i++) {
                    // since we have the name already, just return via built-in .css method
                    name = only[i];
                    product[name] = this.css(name);
                }
            } else {
                // prevent from empty selector
                if (this.length) {
                    // otherwise, we need to get everything
                    var dom = this.get(0); // standards

                    if (window.getComputedStyle) // getComputedStyle() : 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
                    {
                        // convenience methods to turn css case ('background-image') to camel ('backgroundImage')
                        var pattern = /\-([a-z])/g;

                        var uc = function uc(a, b) {
                            return b.toUpperCase();
                        };

                        var camelize = function camelize(string) {
                            return string.replace(pattern, uc);
                        }; // make sure we're getting a good reference


                        if (style = window.getComputedStyle(dom, null)) {
                            var camel, value; // opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways

                            if (style.length) {
                                for (var i = 0, l = style.length; i < l; i++) {
                                    name = style[i];
                                    camel = camelize(name);
                                    value = style.getPropertyValue(name);
                                    product[camel] = value;
                                }
                            } else {
                                // opera
                                for (name in style) {
                                    camel = camelize(name);
                                    value = style.getPropertyValue(name) || style[name];
                                    product[camel] = value;
                                }
                            }
                        }
                    } // IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
                    else if (style = dom.currentStyle) {
                        for (name in style) {
                            product[name] = style[name];
                        }
                    } else if (style = dom.style) {
                        for (name in style) {
                            if (typeof style[name] != 'function') {
                                product[name] = style[name];
                            }
                        }
                    }
                }
            } // remove any styles specified...
            // be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text


            if (except && except instanceof Array) {
                for (var i = 0, l = except.length; i < l; i++) {
                    name = except[i];
                    delete product[name];
                }
            } // one way out so we can process blacklist in one spot


            return product;
        }; // CSS 속성 복사
        // sugar - source is the selector, dom element or jQuery instance to copy from - only and except are optional


        $.fn.copyCSS = function (source, only, except) {
            var styles = $(source).getStyles(only, except);
            this.css(styles);
            return this;
        };
    })(jQuery);
}