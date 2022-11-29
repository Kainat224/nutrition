const nexxt_btn_dis = document.getElementById("button-validate");
const innput_dis = document.getElementById("currentww");

input.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    if (value === "") {
        nexxt_btn_dis.disabled = true;
    }
    else {
        nexxt_btn_dis.disabled = false;
    }
})


//new 
var current_input_dis = document.querySelector("#currentww");
var diss_btnn_next = document.querySelector("#btnn_validate");

diss_btnn_next.disabled = true; //setting button state to disabled

current_input_dis.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector("#currentww").value === "") {
        diss_btnn_next.disabled = true; //button remains disabled
    } else {
        diss_btnn_next.disabled = false; //button is enabled
    }
}