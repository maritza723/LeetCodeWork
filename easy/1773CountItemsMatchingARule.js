/**1773. Count Items Matching a Rule
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
 * 
 * The ith item is said to match the rule if one of the following is true:
 * 
 * ruleKey == "type" and ruleValue == typei.
 * ruleKey == "color" and ruleValue == colori.
 * ruleKey == "name" and ruleValue == namei.
 * Return the number of items that match the given rule.
 * 
 * Example 1:
 * Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
 * ruleKey = "color", ruleValue = "silver"
 * Output: 1
 * Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
 * 
 * Example 2:
 * Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], 
 * ruleKey = "type", ruleValue = "phone"
 * Output: 2
 * Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and 
 * ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match. *//**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let len = items.length;
    let ans = 0;
    let j = 0;
    if(ruleKey === "color"){ j++; }
    if(ruleKey === "name"){ j+=2; }
    for (let i = 0; i < len; i++){
        if(items[i][j] ===ruleValue){
            ans++;
        }
    }
    return ans;
};

// Accepted!! 05.10.21
// Runtime: 84 ms, faster than 94.66% of JavaScript online submissions for Count Items Matching a Rule.
// Memory Usage: 42.6 MB, less than 63.51% of JavaScript online submissions for Count Items Matching a Rule.

// console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver") + " == 1");
// console.log();
// console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone") + " == 2");