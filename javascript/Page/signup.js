const SignUpManager = {};

$(document).ready(function () {

    selectEmail_Event();
    allChk();

    $("input:radio[name=menu_select]").change(function () {

        $(".menu_select_box").removeClass("on");
        
        if ($("input:radio[name=menu_select]:checked").val() === "callback") {
            $(".callback_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
            $(".add_info_div").css("display", "none");
            $(this).parent(".menu_select_box").toggleClass("on")
        } else {
            $(".callback_info_div").css("display", "none");
            $(".add_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
            $(this).parent(".menu_select_box").toggleClass("on")
        }

    });

    const $drop = document.querySelector(".fileDrop");
    const $drop2 = document.querySelector(".fileDrop2");
    const $title = document.querySelector(".fileDrop h1");
    const $title2 = document.querySelector(".fileDrop2 h1");

    // 드래그한 파일 객체가 해당 영역에 놓였을 때
    $drop.ondrop = (e) => {
        e.preventDefault();
        $drop.className = "fileDrop";
        
        // 파일 리스트
        const files = [...e.dataTransfer?.files];

        $title.innerHTML = files.map(v => v.name).join("<br>");
    }

    // ondragover 이벤트가 없으면 onDrop 이벤트가 실행되지 않습니다.
    $drop.ondragover = (e) => {
       e.preventDefault();
    }

    // 드래그한 파일이 최초로 진입했을 때
        $drop.ondragenter = (e) => {
        e.preventDefault();
        
        $drop.className += " active";
    }

    // 드래그한 파일이 영역을 벗어났을 때
    $drop.ondragleave = (e) => {
        e.preventDefault();
        
        $drop.className = "fileDrop";
    }

    // 드래그한 파일 객체가 해당 영역에 놓였을 때
    $drop2.ondrop = (e) => {
        e.preventDefault();
        // $drop.className = "dropBox";
        $drop2.className = "fileDrop2";
        
        // 파일 리스트
        const files = [...e.dataTransfer?.files];

        $title2.innerHTML = files.map(v => v.name).join("<br>");
    }

    // ondragover 이벤트가 없으면 onDrop 이벤트가 실행되지 않습니다.
    $drop2.ondragover = (e) => {
       e.preventDefault();
    }

    // 드래그한 파일이 최초로 진입했을 때
        $drop2.ondragenter = (e) => {
        e.preventDefault();
        
        $drop2.className += " active";
    }

    // 드래그한 파일이 영역을 벗어났을 때
    $drop2.ondragleave = (e) => {
        e.preventDefault();
        
        $drop2.className = "fileDrop2";
    }
    
});


function signup_finish() {
    $(".callback_info_div").css("display", "none");
    $(".add_info_div").css("display", "none");
    $(".menu_select_box").removeClass("on");
    $("input:radio[name=menu_select]").prop("checked", false);
    $(".signup-finish_div").css("display", "flex");
}


SignUpManager.createCaptcha = function( )
{
    $( "#captcha" )
        .html( "" );

    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 6;
    var captcha = [ ];

    for ( var i = 0; i < lengthOtp; i++ )
    {
        var index = Math.floor( Math.random( ) * charsArray.length + 1 );

        if ( captcha.indexOf( charsArray[ index ] ) == -1 )
            captcha.push( charsArray[ index ] );
        else
            i--;
    }

    var code = captcha.join( "" );
    var canvas = document.createElement( "canvas" );
    var ctx = canvas.getContext( "2d" );

    ctx.font = "25px Georgia";

    var size = ctx.measureText( code );

    canvas.id = "captcha";
    canvas.width = size.width;
    canvas.height = 50;

    ctx.font = "25px Georgia";
    ctx.strokeText( code, 0, 25 );

    ctx.rotate( Math.PI * 2 / 80 )
    ctx.font = "30px Georgia";
    ctx.strokeStyle = "rgba( 255, 100, 100, 0.5)";
    ctx.strokeText( code, 0, 25 );

    $( "#captcha" )
        .append( canvas );

    this.captchaCode = code;
}

$( function( )
{
    SignUpManager.createCaptcha( );

    $( ".inquiry-form-reload" )
        .on( "click", function( )
        {
            SignUpManager.createCaptcha( );
        } );

    $( ".inquiry-form-confirm" )
        .on( "click", function( )
        {
            SignUpManager.register( );
        } );

    $( ".inquiry-form-reset" )
        .on( "click", function( )
        {
            util.confirm( "경고", "warning", "입력한 내용을 초기화하시겠습니까?" )
                .then( function( result )
                {
                    if ( !result )
                        return;

                    SignUpManager.reset( );
                } );
        } );

    $( ".temrs_apply_area > span" )
        .on( "click", function( )
        {
            var checked = $( "#temrs_chk" )
                .is( ":checked" );

            if ( !checked )
            {
                $( "#temrs_chk" )
                    .prop( "checked", true );
            }
            else
            {
                $( "#temrs_chk" )
                    .prop( "checked", false );
            }
        } );
} );


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

    $('#selectEmail2').change(function(){

        $("#selectEmail2 option:selected").each(function () {
            if($(this).val() == '1'){ //직접입력일 경우
                $("#email_second2").val('');                     //값 초기화
                $("#email_second2").attr("disabled",false);      //활성화
            }else{ //직접입력이 아닐경우
                $("#email_second2").val($(this).text());         //선택값 입력
                $("#email_second2").attr("disabled",true);       //비활성화
            }
        });
    });
}

// 전체 선택/해제
function allChk() {
    $("#all_chk").click(function () {
        if ($("#all_chk").prop("checked")) {
            $("input[name=term_chk]").prop("checked", true);
        } else {
            $("input[name=term_chk]").prop("checked", false);
        }
    });

    $("input[name=term_chk]").change(function() {
		var total = $("input[name=term_chk]").length;
		var checked = $("input[name=term_chk]:checked").length;

		if(total != checked) $("#all_chk").prop("checked", false);
		else $("#all_chk").prop("checked", true);  
    });
    
    

    // console.log($("input[name=term_chk]").prop("checked"));
}
