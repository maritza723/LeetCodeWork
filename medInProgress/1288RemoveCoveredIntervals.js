/**1288. Remove Covered Intervals
 * Given a list of intervals, remove all intervals that are covered by another interval in the list.
 * 
 * Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
 * 
 * After doing so, return the number of remaining intervals.
 * 
 * Example 1:
 * Input: intervals = [[1,4],[3,6],[2,8]]
 * Output: 2
 * Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 * 
 * Example 2:
 * Input: intervals = [[1,4],[2,3]]
 * Output: 1
 * 
 * Example 3:
 * Input: intervals = [[0,10],[5,12]]
 * Output: 2
 * 
 * Example 4:
 * Input: intervals = [[3,10],[4,10],[5,11]]
 * Output: 2
 * 
 * Example 5:
 * Input: intervals = [[1,2],[1,4],[3,4]]
 * Output: 1 *//**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let len = intervals.length;
    let count = 0;
    // let dict = {};
    
    // for (let i = 0; i < len; i++){
    //     // console.log("i: " + i);
    //     // console.log(dict[intervals[i][0]]);
    //     // console.log(intervals[i][1]);
    //     if(intervals[i][0] in dict){
    //         if(dict[intervals[i][0]] < intervals[i][1]){ dict[intervals[i][0]] = intervals[i][1]; }
    //     }  else {
    //         dict[intervals[i][0]] = intervals[i][1];
    //     }
    //     // console.log(dict);
    // }
    for (let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(intervals[i][0] < intervals[j][0] && intervals[i][1] >= intervals[j][1]){ count++; }
        }
    }
    return count;
};

// console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]) + "; should be : 2");
// console.log();
// console.log(removeCoveredIntervals([[1,4],[2,3]]) + "; should be : 1");
// console.log();
// console.log(removeCoveredIntervals([[0,10],[5,12]]) + "; should be : 2");
// console.log();
// console.log(removeCoveredIntervals([[3,10],[4,10],[5,11]]) + "; should be : 2");
// console.log();
// console.log(removeCoveredIntervals([[1,2],[1,4],[3,4]]) + "; should be : 1");
// console.log();