// window.onload = function () {
$(function () {

    // const btnModal = document.getElementById("btn-modal")
    let btnModal = $(".btn-modal")

    async function modalOn(modalName) {

        let modal_html = await loadModal(modalName);
        $("#modal").html(modal_html);
        
        modal.style.display = "flex"

        const closeBtn = modal.querySelector(".close-area");
        closeBtn.addEventListener("click", e => {
            modalOff();
        });
    }

    function isModalOn() {
        return modal.style.display === "flex"
    }

    function modalOff() {
        modal.style.display = "none"
    }

    btnModal.on("click", function(){
        modalOn($(this).data("modal"));
    });

    // btnModal.addEventListener("click", e => {
    //     alert("클릭");
    //     // modalOn(modalName);
    // });

    // const closeBtn = modal.querySelector(".close-area")
    // closeBtn.addEventListener("click", e => {
    //     modalOff();
    // });

    modal.addEventListener("click", e => {
        const evTarget = e.target
        if (evTarget.classList.contains("modal-overlay")) {
            modalOff();
        }
    });

    window.addEventListener("keyup", e => {
        if (isModalOn() && e.key === "Escape") {
            modalOff();
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
