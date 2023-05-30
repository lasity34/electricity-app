// DOM element(s) references

const buy_btn = document.querySelector(".btn");
const use_electricity_btn =document.querySelector(".useNow")
const units_available_display = document.querySelector(".unitsAvailable");
const units_bought = document.querySelector(".totalUnits")
const total_amount_spent = document.querySelector(".totalAmount")
// Factory Function instance
const electricity = Electricity();

// DOM events here
function buy_electricity() {
    const top_up_select = document.querySelector('input[name="buyElectricity"]:checked');
  if (top_up_select) {
   const selectedValue =  parseFloat(top_up_select.value) ;
    electricity.topUpElectricity(selectedValue)
    units_available_display.innerHTML = electricity.getUnitsAvailable()
    units_bought.innerHTML = electricity.totalUnitsBought()
    total_amount_spent.innerHTML = `R${electricity.totalAmountSpent()}`
  }
}

function use_electricity() {
const appliance_select =  document.querySelector('input[name="useElectricity"]:checked')

    if (appliance_select) {
       const selectedValue = appliance_select.value;
       console.log(selectedValue)
       electricity.useAppliance(selectedValue)
       units_available_display.innerHTML = electricity.getUnitsAvailable()
       
    }
}

buy_btn.addEventListener("click", buy_electricity);
use_electricity_btn.addEventListener("click", use_electricity)