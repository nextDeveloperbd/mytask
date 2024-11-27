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