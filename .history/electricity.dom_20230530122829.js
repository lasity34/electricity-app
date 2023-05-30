// DOM element(s) references
const top_up_select = document.querySelectorAll(".topup")
const buy_btn = document.querySelector(".btn")

// Factory Function instance 
const electricity =  Electricity();



// DOM events here 

function buy_electricity() {

    top_up_select.forEach(item => {
        electricity.topUpElectricity(item)
    })
}




buy_btn.addEventListener("click", buy_electricity)