// window.onload = function () {
$(function () {

    // const btnModal = document.getElementById("btn-modal")
    let btnModal_dept2 = $(".btn-modal-dept2")
    let modal_dept2 = document.getElementById("modal_dept2");
    let modal_dept2_ = $("#modal_dept2");

    btnModal_dept2.off("click");
    modal_dept2_.off("click");

    async function modalOn_dept2(modalName) {

        let modal_detps2_html = await loadModal(modalName);
        $("#modal_dept2").html(modal_detps2_html);
        
        modal_dept2.style.display = "flex"

        const closeBtn_dept2 = modal_dept2.querySelector(".close-area");
        closeBtn_dept2.addEventListener("click", e => {
            modalOff_dept2();
        });
    }

    function isModalOn_dept2() {
        return modal_dept2.style.display === "flex"
    }

    function modalOff_dept2() {
        modal_dept2.style.display = "none"
    }

    btnModal_dept2.on("click", function(){
        modalOn_dept2($(this).data("modal-dept2"));
    });

    modal_dept2.addEventListener("click", e => {
        const evTarget = e.target
        if (evTarget.classList.contains("modal-overlay")) {
            modalOff_dept2();
        }
    });

    window.addEventListener("keyup", e => {
        if (isModalOn_dept2() && e.key === "Escape") {
            modalOff_dept2();
        }
    });
// }
});

function loadModal(filename) { 
    
    return new Promise( function( resolve, reject )
    {
        $.ajax(
        {
            // url: "../../Modal/"+filename+".html",
            url: "../Modal/"+filename+".html",
            cache: true,
            success: function( data )
            {
                resolve( data );
            },
            error: function( err )
            {
                // success: false, reason: FAIL:IO, FAIL:AUTH, FAIL:NO_MENU, ERR_UNKNOWN
                reject( err.responseJSON ||
                {
                    success: false,
                    reason: "ERR_UNKNOWN"
                } );
            },
        } );
    } );
}
