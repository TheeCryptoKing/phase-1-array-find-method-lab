// code your solution here
//param.year 
//param.result

//1)return a year the bronoccos won the superbowl with a function 
function superbowlWin(arrayofObjs) {
    //need to test result with find() to find the "W"
    let winYear = arrayofObjs.find(resultW => resultW.result === 'W');//returned object that had win but only object 
     //returns the year of the W???
    if(winYear === undefined) {//needed to filter result fro condition of test
        return undefined 
    } else {
         return winYear["year"]//refrenced data from object 
    }
    //if no Win return undefined 
    
}
/*      function wResult(resultW) {
        return resultW.result === 'W'//pulling from result with array 
        }
*/

