// var fileList = []; //파일 정보를 담아 둘 배열

$(document).ready(function () {
  
    selectEmail_Event();
    fileDropDown();
    tableToggle_Event();

    var lastItem;

    $(".customer-support-faq-list .item").click(function () {

        $(".customer-support-faq-list").find(".item").removeClass("open");
        $(".customer-support-faq-list").find(".answer").slideUp("fast");

        if (lastItem && lastItem.is($(this))) {
            lastItem = null;
            return;
        }

        // $(this).find(".item").addClass("open");
        $(this).addClass("open");

        $(this).find(".answer").slideDown("fast");
        lastItem = $(this);

    });
   
});


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


$(document).ready(function () {
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function () { // 값이 변경되면

        if (window.FileReader) { // modern browser
            var i = 0;
            var filename = [];
            for(i = 0; i < $(this)[0].files.length; i++){
                filename.push($(this)[0].files[i].name);
            }
            // var filename = $(this)[0].files[0].name;
        } else { // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        }

        filename_lsit = '';
        for(i = 0; i < filename.length; i++){
            filename_lsit += filename[i] + '<br>';
        }

        // console.log(filename_lsit);

        // 추출한 파일명 삽입
        // $(this).siblings('.upload-name').val(filename);
        // $(this).siblings('.upload-name').val(filename_lsit);
        $(this).siblings('.upload-name').html(filename_lsit);
    });
});

// 파일 드롭 다운
function fileDropDown() {
    var dropZone = $(".upload-name");
    //Drag기능 
    dropZone.on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();

        // 드롭다운 영역 css
        dropZone.addClass("active");
    });
    dropZone.on('dragleave', function (e) {
        e.stopPropagation();
        e.preventDefault();

        // 드롭다운 영역 css
        dropZone.removeClass("active");
    });
    dropZone.on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();

        // 드롭다운 영역 css
        dropZone.addClass("active");
    });
    dropZone.on('drop', function (e) {
        e.preventDefault();
        
        // 드롭다운 영역 css
        dropZone.removeClass("active");

        var files = e.originalEvent.dataTransfer.files;

        // console.log(files);

        if (files != null) {
            if (files.length < 1) {
                alert("폴더 업로드 불가");
                return;
            }
            selectFile(files)
        } else {
            alert("ERROR");
        }

    });
}

// 파일 선택시
function selectFile(files) {

    // 파일 리스트 번호
    var fileIndex = 0;
    // 등록할 전체 파일 사이즈
    var totalFileSize = 0;
    // 파일 리스트
    var fileList = new Array();
    // 파일 사이즈 리스트
    var fileSizeList = new Array();
    // 등록 가능한 파일 사이즈 MB
    var uploadSize = 50;
    // 등록 가능한 총 파일 사이즈 MB
    var maxUploadSize = 500;


    $('.upload-name').html('');

    // 다중파일 등록
    if(files != null){
        for(var i = 0; i < files.length; i++){
            // 파일 이름
            var fileName = files[i].name;
            var fileNameArr = fileName.split("\.");
            // 확장자
            var ext = fileNameArr[fileNameArr.length - 1];
            // 파일 사이즈(단위 :MB)
            var fileSize = files[i].size / 1024 / 1024;
            
            if($.inArray(ext, ['exe', 'bat', 'sh', 'java', 'jsp', 'html', 'js', 'css', 'xml']) >= 0){
                // 확장자 체크
                alert("등록 불가 확장자");
                break;
            }else if(fileSize > uploadSize){
                // 파일 사이즈 체크
                alert("용량 초과\n업로드 가능 용량 : " + uploadSize + " MB");
                break;
            }else{
                // 전체 파일 사이즈
                totalFileSize += fileSize;
                
                // 파일 배열에 넣기
                fileList[fileIndex] = files[i];
                
                // 파일 사이즈 배열에 넣기
                fileSizeList[fileIndex] = fileSize;

                // 업로드 파일 목록 생성
                addFileList(fileIndex, fileName, fileSize);

                // 파일 번호 증가
                fileIndex++;
            }
        }
    }else{
        alert("ERROR");
    }
}

// 업로드 파일 목록 생성
function addFileList(fIndex, fileName, fileSize){

    // console.log(`fIndex : ${fIndex}`);
    // console.log(`fileName : ${fileName}`);
    // console.log(`fileSize : ${fileSize}`);

    // var html = `${fileName} : ${fileSize.toFixed(2)}MB<br>`;
    var html = `${fileName}<br>`;

    $('.upload-name').append(html);
    // $('.upload-name').html(html);
}

function tableToggle_Event() { 
    $(".sumbnail").click(function() {

        // console.log($(".sumbnail").length);
        // console.log($(".sumbnail")[1]);
        console.log($(this).html());

        // console.log($(this).siblings('.detail').html());
        $(this).siblings('.detail').toggleClass("active");
    });
}