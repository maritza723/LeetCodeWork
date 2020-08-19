/**1436. Destination City
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means 
 * there exists a direct path going from cityAi to cityBi. Return the 
 * destination city, that is, the city without any path outgoing to another city.
 * 
 * It is guaranteed that the graph of paths forms a line without any 
 * loop, therefore, there will be exactly one destination city.
 *  
 * 
 * Example 1:
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
 * Output: "Sao Paulo" 
 * Explanation: Starting at "London" city you will reach 
 * "Sao Paulo" city which is the destination city. 
 * Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 * 
 * Example 2:
 * Input: paths = [["B","C"],["D","B"],["C","A"]]
 * Output: "A"
 * Explanation: All possible trips are: 
 * "D" -> "B" -> "C" -> "A". 
 * "B" -> "C" -> "A". 
 * "C" -> "A". 
 * "A". 
 * Clearly the destination city is "A".
 * 
 * Example 3:
 * Input: paths = [["A","Z"]]
 * Output: "Z"
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
    let dict = {};
    if (paths.length == 0) { return "" }; 
    if (paths.length == 1) { return paths[0][1] }
    for (let i = 0; i < paths.length; i++) {  
        // console.log(paths)
        let zeroPlace = paths[i][0];
        let firstPlace = paths[i][1];

        if (zeroPlace in dict) {
            dict[zeroPlace][0] = true; // here dict[zeroPlace] evaluates to an object, then we create a new key 0 with a val true
        } else {
            dict[zeroPlace] = { 0: true }; // so here we are creating a key "new york" with a value of another object
        }

        if (firstPlace in dict) {
            dict[firstPlace][1] = true;
        } else {
            dict[firstPlace] = { 1: true };
        }

    }
    // console.log("dict");
    // console.log(dict);
    for (key in dict) { 
        if (!(0 in dict[key])) { return key }
    }
};

// Accepted!! 07.22.2020
// Runtime: 88 ms, faster than 30.06% of JavaScript online submissions for Destination City.
// Memory Usage: 40.3 MB, less than 6.06% of JavaScript online submissions for Destination City.


let ex1 = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
console.log(destCity(ex1)); // Sao Paulo 
let ex2 = [["B", "C"], ["D", "B"], ["C", "A"]];
console.log(destCity(ex2)); // A
let ex3 = [["A", "Z"]];
console.log(destCity(ex3)); // Z


