/**1108. Defanging an IP Address
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * 
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * 
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0" *//**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let len = address.length;
    let ans = "";
    for(let i = 0; i < len; i++){
        if(address[i] == "."){
            ans += "[.]"
        } else { 
            ans += address[i];
        }
    }
    return ans;
};

// Accepted!! 09.14.2020
// Runtime: 72 ms, faster than 79.68% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 36.2 MB, less than 91.21% of JavaScript online submissions for Defanging an IP Address.


// example 1: "1[.]1[.]1[.]1"
console.log(defangIPaddr("1.1.1.1"));

// example 2: "255[.]100[.]50[.]0" 
console.log(defangIPaddr("255.100.50.0"));