// DOM element(s) references

const buy_btn = document.querySelector(".btn");
const use_electricity_display =document(".useNow")
const units_available_display = document.querySelector(".unitsAvailable");
const units_bought = document.querySelector(".totalUnits")
const total_amount_spent = document.querySelector(".totalAmount")
// Factory Function instance
const electricity = Electricity();

// DOM events here
function buy_electricity() {
    const top_up_select = document.querySelector('input[name="buyElectricity"]:checked');
  if (top_up_select) {
    selectedValue = top_up_select.value;
    electricity.topUpElectricity(Number(selectedValue))
    units_available_display.innerHTML = electricity.getUnitsAvailable()
    units_bought.innerHTML = electricity.totalUnitsBought()
    total_amount_spent.innerHTML = electricity.totalAmountSpent()
  }
}

function use_electricity() {

}

buy_btn.addEventListener("click", buy_electricity);
units_available_display.addEventListener("click", use_electricity)