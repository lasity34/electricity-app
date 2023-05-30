// DOM element(s) references
const top_up_select = document.querySelectorAll(".topup")
const buy_btn = document.querySelector(".btn")
const units_available_display = document.querySelector(".unitsAvailable")

// Factory Function instance 
const electricity =  Electricity();



// DOM events here 

function buy_electricity() {

    top_up_select.forEach(item => {
        electricity.topUpElectricity(item.value)
        
      
    })
   
}
units_available_display.innerHTML = electricity.getUnitsAvailable()



buy_btn.addEventListener("click", buy_electricity)