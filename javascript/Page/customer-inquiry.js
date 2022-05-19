// var fileList = []; //파일 정보를 담아 둘 배열

$(document).ready(function () {
  
    var lastItem;

    $(".customer-support-faq-list .item").click(function () {

        $(".customer-support-faq-list").find(".item").removeClass("open");
        $(".customer-support-faq-list").find(".answer").slideUp("fast");

        if (lastItem && lastItem.is($(this))) {
            lastItem = null;
            return;
        }

        $(this).find(".item").addClass("open");

        $(this).find(".answer").slideDown("fast");
        lastItem = $(this);

    });

    if(document.querySelector(".fileDrop")){

        const $drop = document.querySelector(".fileDrop");
        const $title = document.querySelector(".fileDrop h1");
    
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
    
        // $(".auth_status").click(function(){
        //     alert("click");
        // });
    }
});
