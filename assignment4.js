
// Problem 1
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please provide a number.";
    } else if (number <= 0) {
        return "Please input a positive number"
    } else {
        return Math.pow(number, 3);
    }
}

const problem1 = cubeNumber(4);
console.log("Qube number is = ", problem1);

//Problem 2
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "This is not valid string. Please provide two valid strings.";
    } else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    };
};

const problem2 = matchFinder("john Doe", "pet");
console.log(problem2);

// Problem 3

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    else if (arr.length !== 2 || typeof arr[0] !== "number" || typeof arr[1] !== "number" || arr[0] < 0 || arr[1] < 0) {
        return "invalid input";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    }

    return [Math.max(...arr), Math.min(...arr)];
};
const problem3 = sortMaker([4, 8]);
console.log(problem3);

// problem 4
function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "Please provide a valid address object.";
    }

    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return `${street},${house},${society}`;
}
const problem4 = findAddress({street: 10,house: '15A',society: 'Earth Perfect'});
console.log(problem4);

// Problem 5
function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
        return " Please provide a valid array and a number.";
    }

    else if (changeArray.length === 0) {
        return "The array is Empty. Please provide some Taka.";
    } else {
        const totalTaka = changeArray.reduce((khuchraTaka, chipsPrice) => khuchraTaka + chipsPrice, 0);

        return totalTaka >= totalDue;
    }
}
const problem5 = canPay([1, 2, 5], 10);
console.log(problem5);  


// Problem 5 another
/* function canPay(array, number) {
    if (!Array.isArray(array) || typeof number !== 'number') {
        return "Please provide a valid array and a number.";
    }

    if (array.length === 0) {
        return "This array is empty. Please provide some input taka.";
    }

    let totalTaka = 0;
    for (let i = 0; i < number.length; i++) {
        if (typeof takas[i] === 'number') {
            totalTaka += takas[i];
        }
    }

    return totalTaka >= number;
}
console.log(canPay([1, 5, 5], 10));  */