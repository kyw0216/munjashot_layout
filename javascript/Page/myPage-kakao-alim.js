$(document).ready(function () {

    $(`input[name=tmeplete_cod]`).off("click");
    $(`input[name=tmeplete_code]`).click(function(){
        if($(this).val() == "tmeplete_code_direct") {
            $(`#tmeplete_code_input`).attr("disabled", false);
        }else {
            $(`#tmeplete_code_input`).attr("disabled", true);
        }
    });

});

function check_cnt(type, obj, container_cnt){

	var strLen = obj.value.length;
    
    if(type == "code"){
        $("#tmeplete_code_cnt").html(strLen + "/30자");

        if(strLen > 30) {
            $("#tmeplete_code_cnt").css("color", "red");
        } else{
            $("#tmeplete_code_cnt").css("color", "black");
        }
    } else if (type == "name") {
        $("#tmeplete_name_cnt").html(strLen + "/200자");

        if(strLen > 200) {
            $("#tmeplete_name_cnt").css("color", "red");
        } else{
            $("#tmeplete_name_cnt").css("color", "black");
        }
    } else if (type == "content") {
        $("#tmeplete_content_cnt").html(strLen + "/1000자");

        if(strLen > 1000) {
            $("#tmeplete_content_cnt").css("color", "red");
        } else{
            $("#tmeplete_content_cnt").css("color", "black");
        }
    }

    if(type == `code_${container_cnt}`){
        $(`#tmeplete_code_cnt_${container_cnt}`).html(strLen + "/30자");

        if(strLen > 30) {
            $(`#tmeplete_code_cnt_${container_cnt}`).css("color", "red");
        } else{
            $(`#tmeplete_code_cnt_${container_cnt}`).css("color", "black");
        }
    } else if (type == `name_${container_cnt}`) {
        $(`#tmeplete_name_cnt_${container_cnt}`).html(strLen + "/200자");

        if(strLen > 200) {
            $(`#tmeplete_name_cnt_${container_cnt}`).css("color", "red");
        } else{
            $(`#tmeplete_name_cnt_${container_cnt}`).css("color", "black");
        }
    } else if (type == `content_${container_cnt}`) {
        $(`#tmeplete_content_cnt_${container_cnt}`).html(strLen + "/1000자");

        if(strLen > 1000) {
            $(`#tmeplete_content_cnt_${container_cnt}`).css("color", "red");
        } else{
            $(`#tmeplete_content_cnt_${container_cnt}`).css("color", "black");
        }
    }
    
}

function insert_chk(container_cnt){

    $(`input[name=tmeplete_code_${container_cnt}]`).off("click");
    $(`input[name=tmeplete_code_${container_cnt}]`).click(function(){
        if($(this).val() == "tmeplete_code_direct") {
            $(`#tmeplete_code_input_${container_cnt}`).attr("disabled", false);
        }else {
            $(`#tmeplete_code_input_${container_cnt}`).attr("disabled", true);
        }
    });
}

function add_container(){

    let container_cnt = $(".sub_container").length+1;

    if(container_cnt > 10) {
        util.alert('알림', 'warning', '건별 등록은 최대 10건까지만 가능합니다.');
        return;
    }

    let html = `
    <div class="sub_container">
        <div class="temp_div">
            <div class="row" style="border-bottom: 1px solid black; margin: 0;">
                <div class="row" style="justify-content: flex-start;">
                    <span style="font-weight: bold;">● 템플릿 입력 ${container_cnt}</span>
                </div>
                <div class="row" style="justify-content: flex-end;">
                    <button class="btn">+ 입력란 추가</button>
                    <button class="btn" style="margin-left:10px;">- 입력란 삭제</button>
                </div>
            </div>

            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">템플릿 코드 *</span>
                </div>
                <div class="temp_content">
                    <input type="radio" id="tmeplete_code_auto_${container_cnt}" name="tmeplete_code_${container_cnt}" class="tmeplete_code" value='tmeplete_code_auto' checked>
                    <label for="tmeplete_code_auto_${container_cnt}" style="min-width:80px;">자동 생성</label>
                    <input type="radio" id="tmeplete_code_direct_${container_cnt}" name="tmeplete_code_${container_cnt}" class="tmeplete_code" value='tmeplete_code_direct' style="margin-left:20px;">
                    <label for="tmeplete_code_direct_${container_cnt}" style="min-width:80px;">직접 입력</label>
                    <input id="tmeplete_code_input_${container_cnt}" type="text" placeholder="최대 30자" class="ctrl-input" maxlength="30" onkeyup="check_cnt('code_${container_cnt}', this, ${container_cnt})" disabled>
                    <label id="tmeplete_code_cnt_${container_cnt}" style="min-width:80px; margin-left:10px;">0/30자</label>
                </div>
            </div>
            
            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">템플릿 명 *</span>
                </div>
                <div class="temp_content">
                    <input id="tmeplete_name_input_${container_cnt}" type="text" placeholder="최대 200자, 템플릿 명은 메시지 내용에 포함되지 않습니다." class="ctrl-input" maxlength="200" onkeyup="check_cnt('name_${container_cnt}', this, ${container_cnt})">
                    <label id="tmeplete_name_cnt_${container_cnt}" style="min-width:80px; margin-left:10px;">0/200자</label>
                </div>
            </div>

            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">강조 유형 *</span>
                </div>
                <div class="temp_content">
                    <select style="width:150px;">
                        <option>선택안함</option>
                        <option>강조표기형</option>
                        <option>이미지형</option>
                        <option>아이템리스트형</option>
                    </select>
                </div>
            </div>

            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">메시지 유형 *</span>
                </div>
                <div class="temp_content">
                    <select style="width:150px;">
                        <option>기본형</option>
                        <option>부가정보형</option>
                        <option>광고추가형</option>
                        <option>복합형</option>
                    </select>
                </div>
            </div>

            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">템플릿 내용 *</span>
                </div>
                <div class="temp_content" style="flex-grow:0;flex-basis:400px;">
                    <textarea style="width:400px; height:100px;resize: none;" onkeyup="check_cnt('content_${container_cnt}', this, ${container_cnt})" placeholder="템플릿 내용을 입력하세요. 수신번호마다 다른 메시지를 보낼 경우 변수를 설정합니다.
예)#{고객명}님의 님의 주문이 완료되었습니다.

※ 변수명 설정 시 주의사항 : 값이 다른 경우 변수명 다르게 설정
(O) 주문일 : #{주문날짜} / 배송일 : #{배송날짜}
(X) 주문일 : #{날짜} / 배송일 : #{날짜}"></textarea>
                </div>

                <div class="row" style="flex-basis: 0; margin:0;">
                    <div class="column" style="align-items: flex-start; justify-content: flex-start;">
                        <label id="tmeplete_content_cnt_${container_cnt}">0/1000자</label>
                        <span>변수형식: <span style="color:skyblue">#{변수명}</span></span>
                        
                        <button class="btn" style="margin-top:20px;">이모티콘 삽입</button>
                    </div>
                </div>
            </div>

            <div class="row" style="margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">버튼</span><button class="btn" style="margin-left:10px;" onclick="">+추가</button>
                </div>
            </div>

            <div class="row" style="margin: 0; justify-content: flex-start; padding: 10px 0px; padding:0 20px;">
                <table class="btn_table">
                    <tr>
                        <th>No</th>
                        <th>버튼타입</th>
                        <th>버튼명</th>
                        <th>버튼링크</th>
                    </tr>
                    <tr>
                        <td colspan="4">버튼을 추가할 수 있습니다.</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="preview_div">미리보기</div>

    </div>`;

    $(".container_wrapper").append(html);
    insert_chk(container_cnt);
}

function del_container(){
    
    if($(".sub_container").length === 1){
        util.alert('알림', 'warning', '템플릿은 최소 1개 등록해야 합니다.');
        return false;
    }

    $(".sub_container").last().remove();

}

function emphasizeType_chk(obj){

    // console.log($(".emphasizeType").val());
    console.log($(obj).val());

    $(".guid_span").css("display", "none");
    $(".subInfo_div").removeClass("flex_div");

    if($(obj).val() === "NONE"){
        $(".templateEmphasizeTypeGuide").css("display", "block");
    } else if ($(obj).val() === "TEXT") {
        $(".templateEmphasizeType_TEXT").css("display", "block");
        $(".emphasizeText_div").toggleClass("flex_div");
    } else if ($(obj).val() === "IMAGE") {
        $(".templateEmphasizeType_IMAGE").css("display", "block");
        $(".emphasizeImg_div").toggleClass("flex_div");
    } else if ($(obj).val() === "ITEM_LIST" ) {
        $(".templateEmphasizeType_ITEM_LIST").css("display", "block");
        $(".emphasizeList_div").toggleClass("flex_div");
        
    }

    // $(`input[name=tmeplete_code_${container_cnt}]`).off("click");
    // $(`input[name=tmeplete_code_${container_cnt}]`).click(function(){
    //     if($(this).val() == "tmeplete_code_direct") {
    //         $(`#tmeplete_code_input_${container_cnt}`).attr("disabled", false);
    //     }else {
    //         $(`#tmeplete_code_input_${container_cnt}`).attr("disabled", true);
    //     }
    // });
}


