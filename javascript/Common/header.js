$(function () {

    if(tippy){
        console.log(tippy);
    }else{
        console.log("없음");
    }

    Fn_Tippy_Init();
});

// 툴팁 세팅
function Fn_Tippy_Init(){

    tippy("[data-tippy-content]",
    {
        content: "tooltip",
        allowHTML: true,
        maxWidth: 500
    });
}
