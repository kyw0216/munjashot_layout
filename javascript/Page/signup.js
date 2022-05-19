const SignUpManager = {};

$(document).ready(function () {


    console.log($("input:radio[name=menu_select]").val());

    $("input:radio[name=menu_select]").change(function () {

        console.log($("input:radio[name=menu_select]:checked").val());

        if ($("input:radio[name=menu_select]:checked").val() === "callback") {
            $(".callback_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
            $(".add_info_div").css("display", "none");
        } else {
            $(".callback_info_div").css("display", "none");
            $(".add_info_div").css("display", "flex");
            $(".signup-finish_div").css("display", "none");
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