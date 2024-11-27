//problem 1
function cubeNumber(number) {
    if(typeof number !== 'number' || number < 0){
        return 'Please provide a valid number'
    }else{
        return Math.pow(number, 3)
    }
}
const problem1 = cubeNumber(3);
console.log(problem1);

// Problem 2
function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 !== 'string' || string1 === 'number' || string2 === 'number' ){
        return 'Please input a valid string'
    }else if(string1.includes(string2)){
        return true
    }else{
        return false
    }
}
const problem2 = matchFinder('Peter parker' , 'pet');
console.log(problem2);

//Problem 3
function sortMaker(arr) {
if(arr[0] < 0 || arr[1] < 0 ){
    return 'invalid input'
}else if(arr[0] === arr[1]){
    return 'equal'
}if(arr[0] > 0 && arr[1] > 0){
    return [Math.max(...arr), Math.min(...arr)]
}
}
const problem3 = sortMaker([4,-3]);
console.log(problem3);

//Problem 4
function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'Please provide a valid object'
    }else{
        const street = obj.street || "_";
    const house = obj.house || "_";
    const society = obj.society || "_";
    return `${street},${house},${society}`
    }
}
const problem4 = findAddress({street:10});
console.log(problem4);

//Problem 5
function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray) || typeof totalDue !== 'number'){
        return 'Please input a valid array and a number'
    }else if(changeArray.length === 0){
        return 'This is empty array. provide some taka'
    }
    else{
        let totalChepsPrice = 0;
        for(let i = 0; i < changeArray.length; i++){
            const index = i;
            const element = changeArray[index];
            totalChepsPrice = totalChepsPrice + element;
        }
        return totalChepsPrice >= totalDue
    }
}
const problem5 = canPay([1,2,5], 10);
console.log(problem5);

// Done