$(document).ready(function () {

    
});

function check_cnt(type, obj){

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
    
}

function check_byte(type, obj, container_cnt){

    var byte = 0;

    for (var i = 0; i < obj.value.length; ++i) {

        // 기본 한글 2바이트 처리
        (obj.value.charCodeAt(i) > 127) ? byte += 2 : byte++ ;
    }
    
    if(type == "friendImg_title"){
        $("#friendImg_title_cnt").html(byte + "/15 bytes 입력가능");

        if(byte > 15) {
            $("#friendImg_title_cnt").css("color", "red");
        } else{
            $("#friendImg_title_cnt").css("color", "black");
        }
    }

    if(type == `friendImg_title_${container_cnt}`){
        $(`#friendImg_title_cnt_${container_cnt}`).html(byte + "/15 bytes 입력가능");

        if(byte > 15) {
            $(`#friendImg_title_cnt_${container_cnt}`).css("color", "red");
        } else{
            $(`#friendImg_title_cnt_${container_cnt}`).css("color", "black");
        }
    }
    
}

function add_container(){

    let container_cnt = $(".container").length+1;

    if(container_cnt > 10) {
        util.alert('알림', 'warning', '이미지 등록은 최대 10개까지 가능합니다.');
        return;
    }

    let html = `<div class="container">
    <div class="row" style="border-bottom: 1px solid black; margin: 0;">
        <div class="row" style="justify-content: flex-start; margin: 0;">
            <span style="font-weight: bold;">● 이미지 등록 ${container_cnt}</span>
        </div>
        <div class="row" style="justify-content: flex-end;">
            <button class="btn" onclick="add_container();">+ 입력란 추가</button>
            <button class="btn" style="margin-left:10px;" onclick="del_container();">- 입력란 삭제</button>
        </div>
    </div>

    <div class="sub_container">
        <div class="temp_div">

            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">구분</span>
                </div>
                <div class="temp_content">
                    <input type="radio" id="friend_default_${container_cnt}" name="friendImg_type_${container_cnt}" class="friendImg_type">
                    <label for="friend_default_${container_cnt}" style="min-width:80px;">친구톡 기본</label>
                    <input type="radio" id="friend_wide_${container_cnt}" name="friendImg_type_${container_cnt}" class="friendImg_type" style="margin-left:20px;">
                    <label for="friend_wide_${container_cnt}" style="min-width:80px;">친구톡 와이드</label>
                </div>
            </div>
            
            <div class="row" style="border-bottom: 1px solid #bdbdbd; margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">제목 *</span>
                </div>
                <div class="temp_content">
                    <input id="friendImg_title_input_${container_cnt}" type="text" placeholder="제목을 입력하세요." class="ctrl-input" maxlength="15" onkeyup="check_byte('friendImg_title_${container_cnt}', this, ${container_cnt})">
                    <label id="friendImg_title_cnt_${container_cnt}" style="min-width:180px; margin-left:10px;">0/15 bytes 입력가능</label>
                </div>
            </div>

            <div class="row" style="margin: 0; justify-content: flex-start; padding: 10px 0px;">
                <div class="temp_title">
                    <span style="font-weight: bold;">이미지 *</span>
                </div>
                <div class="temp_content" style="flex-direction: column; justify-content: center; align-items: flex-start;">
                    <input type="file" style="display:block;">

                    <span style="font-size:14px; color:#bdbdbd; line-height: normal; margin-top: 10px;">파일 규격 : JPG, JPEG, PNG만 가능 / 용량 최대 500KB</span>
                    <span style="font-size:14px; color:#bdbdbd; line-height: normal;">권장 사이즈 : 720px X 720px(가로 500px 미만, 가로:세로 비율이 2:1 미만 또는 3:4 초과 시 업로드 불가)</span>

                </div>
            </div>
        </div>
    </div></div>`;

    $(".container_wrapper").append(html);
}

function del_container(){
    
    if($(".container").length === 1){
        util.alert('알림', 'warning', '이미지는 최소 1개 등록해야 합니다.');
        return false;
    }

    $(".container").last().remove();

}