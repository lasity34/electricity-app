// DOM element(s) references

const buy_btn = document.querySelector(".btn");
const units_available_display = document.querySelector(".unitsAvailable");

// Factory Function instance
const electricity = Electricity();

// DOM events here
function buy_electricity() {
    const top_up_select = document.querySelector('input[name="buyElectricity"]:checked');
  if (top_up_select) {
    selectedValue = top_up_select.value;
    console.log(selectedValue)
    electricity.topUpElectricity(Number(selectedValue))
    console.log(electricity.getUnitsAvailable())
    units_available_display.innerHTML = electricity.getUnitsAvailable()
  }
}

buy_btn.addEventListener("click", buy_electricity);
