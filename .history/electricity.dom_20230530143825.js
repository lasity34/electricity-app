// DOM element(s) references

const buy_btn = document.querySelector(".btn");
const use_electricity_btn = document.querySelector(".useNow");
const units_available_display = document.querySelector(".unitsAvailable");
const units_bought = document.querySelector(".totalUnits");
const total_amount_spent = document.querySelector(".totalAmount");
const advance = document.querySelector(".advanceTaken");
const clear_bill = document.querySelector(".clear_bill")
// Factory Function instance




const units_available_local = parseFloat(localStorage.getItem("units_available")) || 0;
const units_bought_local = parseFloat(localStorage.getItem("units_bought")) || 0;
const total_amount_spent_local = parseFloat(localStorage.getItem("total_amount_spent")) || 0;

if (units_available_local) {
    units_available_display.innerHTML = units_available_local;
  }
  
  if (units_bought_local) {
    units_bought.innerHTML = units_bought_local;
  }
  
  if (total_amount_spent_local) {
    total_amount_spent.innerHTML = `R${total_amount_spent_local}`;
  }
  
  const electricity = Electricity(units_available_local, units_bought_local, total_amount_spent_local);

// DOM events here
function buy_electricity() {
  const top_up_select = document.querySelector(
    'input[name="buyElectricity"]:checked'
  );
  if (top_up_select) {
    const selectedValue = top_up_select.value;
    let amount =
      selectedValue === "advance" ? selectedValue : parseFloat(selectedValue);
    electricity.topUpElectricity(amount);
    units_available_display.innerHTML = electricity.getUnitsAvailable();
    units_bought.innerHTML = electricity.totalUnitsBought();
    total_amount_spent.innerHTML = `R${electricity.totalAmountSpent()}`;

    if (electricity.advanceTaken()) {
        advance.classList.remove("hidden")
    } else if (!electricity.advanceTaken()) {
        advance.classList.add("hidden")
    }
    console.log(electricity.advanceTaken())
    localStorage.setItem("units_available", electricity.getUnitsAvailable());
    localStorage.setItem("units_bought", electricity.totalUnitsBought());
    localStorage.setItem("total_amount_spent", electricity.totalAmountSpent());

  }
}

function use_electricity() {
  const appliance_select = document.querySelector(
    'input[name="useElectricity"]:checked'
  );

  if (appliance_select) {
    const selectedValue = appliance_select.value;

    electricity.useAppliance(selectedValue);
    units_available_display.innerHTML = electricity.getUnitsAvailable();
    localStorage.setItem("units_available", electricity.getUnitsAvailable());
  }
}

buy_btn.addEventListener("click", buy_electricity);
use_electricity_btn.addEventListener("click", use_electricity);
