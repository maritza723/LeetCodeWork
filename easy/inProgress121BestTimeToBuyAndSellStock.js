/**OLD!!!
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *              Not 7-1 = 6, as selling price needs to be larger than buying price.
 *              
 * Example 2:
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    if(prices.length <= 1){
        return 0;
    }
    if(prices.length === 2 && prices[0] < prices[1]){
        profit = prices[1] - prices[0];
        return profit;
    } else if (prices.length === 2 && prices[0] >= prices[1]){
        return 0;
    }
    let buy = prices[0];
    let sell = 0;
    // console.log(min + ' , ' + max)
    let buyday = 0;
    for(let i = 1; i < prices.length - 1; i++){
        if(prices[i] <= buy && prices[i] != 0){
            buy = prices[i];
            buyday = i;
            console.log("IF buy: " + buy + ", buyday: " + buyday)
        }      
    }
    console.log("line 44 buy: " + buy + ", buyday: " + buyday)
    for(let i = buyday; i < prices.length; i++){
        
        if(prices[i] > sell){
            sell = prices[i];
            console.log("for sell: " + sell + ", buy: " + buy)  
        }      
    }
    profit = sell - buy;
    if(profit <= 0){
        return 0;
    } else {
    return profit;
    }
};

// example 1: 5
// console.log(maxProfit([7,1,5,3,6,4]));

// example 2: 0
// console.log(maxProfit([7,6,4,3,1]));

// test 1: 0
// console.log(maxProfit([]));

// test 2: 2
// console.log(maxProfit([2,4,1]));

// test 3: 1
// console.log(maxProfit([1,2]));

// test 4: 3
// console.log(maxProfit([1,2,4]));

// test 5: 4
// console.log(maxProfit([3,2,6,5,0,3]));

// test 6: 1
console.log(maxProfit([2,1,2,1,0,0,1]));


// DEADCODE
// let profit = 0;
// if(prices.length <= 1){
//     return 0;
// }
// if(prices.length === 2 && prices[0] < prices[1]){
//     profit = prices[1] - prices[0];
//     return profit;
// } else if (prices.length === 2 && prices[0] >= prices[1]){
//     return 0;
// }
// let min = prices[0];
// let max = 0;
// // console.log(min + ' , ' + max)
// let buyday = 0;
// for(let i = 0; i < prices.length - 1; i++){
//     if(min > prices[i]){
//         min = prices[i];
//         buyday = i;
//         console.log("min:" + min);
//     }
//     if(max < prices[i]&& i > buyday){
//         max = prices[i];
//         console.log("max:" + max);
//     }
    
// }
// profit = max - min;
// if(profit <= 0){
//     return 0;
// } else {
// return profit;
// }