//  create variable for units available
// setup top electricity function with 10, 20, 50 and advance
// setup use appliance with TV, Stove, Kettle, Fridge and use object to subtract
// setup advance taken and use that for when top up occurs to be subtracted from top up
//   add amount from appliances to total amount spent
// add topup amounts to total amount spent

function Electricity() {
  let unitsAvailable = 0;
  let advance = false;
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
   
    if (amount === 10) {
      unitsAvailable += 7;
    } else if (amount === 20) {
      unitsAvailable += 14;
    } else if (amount === 50) {
      unitsAvailable += 35;
    }

    if (amount === "advance" && !advance) {
        unitsAvailable += 21;
        advance = true;
      } else if (advance && Number(amount)) {
        
        unitsAvailable -= 21;
        advance = false;
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

  function totalAmountSpent() {}

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
