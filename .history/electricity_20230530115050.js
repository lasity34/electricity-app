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
  let total_amount = 0
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
    if (typeof amount === "number") {
        if (advance) {
            if (amount >= 30) {
                amount -= 30;
                advance = false;
            } else {
                advance_balance += 30 - amount;
                return;
            }
        }

        if (amount === 10) {
            unitsAvailable += 7;
        } else if (amount === 20) {
            unitsAvailable += 14;
        } else if (amount === 50) {
            unitsAvailable += 35;
        }
    } else if (amount === "advance" && !advance && advance_balance === 0) {
        unitsAvailable += 21;
        advance_balance = 30;
        advance = true;
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
    if ([appliances[appliance]]) {
      unitsAvailable -= appliances[appliance];
    }
  }

  function advanceTaken() {
    return advance;
  }

  function totalAmountSpent() {
    return total_amount
  }

  function totalUnitsBought() {}

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
