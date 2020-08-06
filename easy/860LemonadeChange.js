/**860. Lemonade Change
 * At a lemonade stand, each lemonade costs $5. 
 * 
 * Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
 * 
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
 * 
 * Note that you don't have any change in hand at first.
 * 
 * Return true if and only if you can provide every customer with correct change.
 * 
 * Example 1:
 * Input: [5,5,5,10,20]
 * Output: true
 * Explanation: 
 * From the first 3 customers, we collect three $5 bills in order.
 * From the fourth customer, we collect a $10 bill and give back a $5.
 * From the fifth customer, we give a $10 bill and a $5 bill.
 * Since all customers got correct change, we output true.
 * 
 * Example 2:
 * Input: [5,5,10]
 * Output: true
 * 
 * Example 3:
 * Input: [10,10]
 * Output: false
 * 
 * Example 4:
 * Input: [5,5,10,10,20]
 * Output: false
 * Explanation: 
 * From the first two customers in order, we collect two $5 bills.
 * For the next two customers in order, we collect a $10 bill and give back a $5 bill.
 * For the last customer, we can't give change of $15 back because we only have two $10 bills.
 * Since not every customer received correct change, the answer is false.
 *  
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if(bills[0] > 5){ return false }
    let fives = 1;
    let tens = 0;
    let len = bills.length;
    for(let i = 1; i < len; i++){
        // console.log("bills[i]: " + bills[i] + ", 5s: " + fives + ", 10s: " + tens);
        if(bills[i] == 5){
            fives++;
        } else if (bills[i] == 10 && fives >= 1){
            fives--;
            tens++;
        } else if (bills[i] == 10 && fives < 1){ 
            return false;
        } else if(bills[i] == 20){
            if(tens < 1 && fives < 3){
                return false;
            } else if(tens >= 1 && fives < 1){
                return false;
            } else if(tens >= 1 && fives >= 1){
                tens--;
                fives--;
            } else if (tens < 1 && fives >= 3){
                fives -= 3;
            }
            
        } 
    }
    return true;
};

// Accepted!! 08.06.2020
// Runtime: 100 ms, faster than 24.78% of JavaScript online submissions for Lemonade Change.
// Memory Usage: 37.6 MB, less than 44.44% of JavaScript online submissions for Lemonade Change.

// example 1: true
console.log(lemonadeChange([5,5,5,10,20]));

// example 2: true
console.log(lemonadeChange([5,5,10]));

// example 3: false
console.log(lemonadeChange([10,10]));

// example 4: false
console.log(lemonadeChange([5,5,10,10,20]));

// example 5: true
console.log(lemonadeChange([5,5,10,10,5,20,5,10,5,5]));