//  create variable for units available
// setup top electricity function with 10, 20, 50 and advance
// setup use appliance with TV, Stove, Kettle, Fridge and use object to subtract
// setup advance taken and use that for when top up occurs to be subtracted from top up
//   add amount from appliances to total amount spent
// add topup amounts to total amount spent

function Electricity() {
  let unitsAvailable = 0;
  let advance = false;
  let advance_balance = 0;
  let total_amount_spent = 0
  let total_units_bought = 0
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
    let unitsBought = 0;
    if (typeof amount === "number") {
      if (advance) {
        if (amount >= advance_balance) {
          amount -= advance_balance;
          advance_balance = 0;
          advance = false;
        } else {
          advance_balance -= amount;
          return;
        }
      }

      if (Number(amount) === 10) {
        unitsBought = 7;
      } else if (Number(amount) === 20) {
        unitsBought = 14;
      } else if (Number(amount) === 50) {
        unitsBought = 35;
      }

      unitsAvailable += unitsBought;
      total_units_bought += unitsBought;
      total_amount_spent += amount;
    } else if (amount === "advance" && !advance && advance_balance === 0) {
      unitsBought = 21;
      advance_balance = 30;
      advance = true;
      unitsAvailable += unitsBought;
      total_units_bought += unitsBought;
    }

    

}


  function getUnitsAvailable() {
    return unitsAvailable;
  }

  /*
   * return true and substract from unit available if there is enough units to use the appliance
   * other wise return false and do nothing.
   */
  function useAppliance(appliance) {
    if (appliances[appliance] <= unitsAvailable) {
      unitsAvailable -= appliances[appliance];
      
      return true;
    } else {
      return false; 
    }
}


  function advanceTaken() {
    return advance;
  }

  function totalAmountSpent() {
    return total_amount_spent
  }

  function totalUnitsBought() {
    return total_units_bought
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
