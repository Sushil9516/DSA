let prices = [7, 1, 5, 3, 6, 4];

// ================= Approach 1 : Brute Force O(n²) =================
// Try every buy day with every future sell day
/*
function maxProfit(prices) {
  let maxProfits = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j] && maxProfits < prices[j] - prices[i]) {
        maxProfits = prices[j] - prices[i];
      }
    }
  }

  return maxProfits;
}
*/

// ================= Approach 2 : Optimal O(n) =================
// Track lowest price so far → treat each day as sell day
// profit = currentPrice - minPriceSoFar

function maxProfit(prices) {
  let maxProfits = 0; // best profit found
  let minPrice = prices[0]; // cheapest buy so far

  for (let i = 1; i < prices.length; i++) {
    // update buy candidate (cheaper day found)
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // try selling today
    if (maxProfits < prices[i] - minPrice) {
      maxProfits = prices[i] - minPrice;
    }
  }

  return maxProfits;
}

let result = maxProfit(prices);
console.log(result); // 5

/*
Quick Recall:
- minPrice → best buy till now
- maxProfits → best sell result
- every day = possible sell day
*/
