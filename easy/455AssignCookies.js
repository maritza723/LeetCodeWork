/**455. Assign Cookies
 * Assume you are an awesome parent and want to give your children some cookies. 
 * But, you should give each child at most one cookie. Each child i has a greed factor 
 * gi, which is the minimum size of a cookie that the child will be content with; and 
 * each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, 
 * and the child i will be content. Your goal is to maximize the number of your content 
 * children and output the maximum number.
 * 
 * Note:
 * You may assume the greed factor is always positive.
 * You cannot assign more than one cookie to one child.
 * 
 * Example 1:
 * Input: [1,2,3], [1,1]
 * Output: 1
 * Explanation: 
 *      You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
 *      And even though you have 2 cookies, since their size is both 1, you could only make 
 *      the child whose greed factor is 1 content.
 *      You need to output 1.
 * 
 * Example 2:
 * Input: [1,2], [1,2,3]
 * Output: 2
 * Explanation: 
 *      You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
 *      You have 3 cookies and their sizes are big enough to gratify all of the children, 
 *      You need to output 2.
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => (b - a));
    s.sort((a, b) => (b - a));
    // console.log(g, " checking for decreasing order");
    let content = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (g[i] <= s[j]) {
                content++;
                s.splice(j, 1); 
                break;
                // you were missing this break statement
                // you cross check every cookie with every kid
                // what should happen is, we find a proper cookie for a kid, then kick out and get a new kid, 
                // I did the same "mistake" in mine too :)) // thanks for fixing :) 
            }
        }
    }
    return content;
};

// Accepted!!! 08.06.2020
// Runtime: 188 ms, faster than 10.00% of JavaScript online submissions for Assign Cookies.
// Memory Usage: 40.6 MB, less than 9.09% of JavaScript online submissions for Assign Cookies.


// // example 1: 1
// console.log(findContentChildren([1,2,3], [1,1]));

//  // example 2: 2
// console.log(findContentChildren([1,2], [1,2,3]));

