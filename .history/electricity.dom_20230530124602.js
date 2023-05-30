// DOM element(s) references
const top_up_select = document.querySelectorAll('input[name="buyElectricity"]:checked');
const buy_btn = document.querySelector(".btn");
const units_available_display = document.querySelector(".unitsAvailable");

// Factory Function instance
const electricity = Electricity();

// DOM events here
console.log(top_up_select.value)
function buy_electricity() {
  if (top_up_select) {
    
    electricity.topUpElectricity(top_up_select.value)
    units_available_display.innerHTML = electricity.getUnitsAvailable()
  }
}

buy_btn.addEventListener("click", buy_electricity);
