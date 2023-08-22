function returnBigNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
function logBigNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
function isEven(num) {
    if (num % 2 === 0) {
        return "".concat(num, " is even");
    }
    else {
        return "".concat(num, " is not even");
    }
}
function strLength(str) {
    return str.length;
}
function return0ToNum(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
    return arr;
}
function returnBigNumOfArr(arr) {
    var bigNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > bigNum) {
            bigNum = arr[i];
        }
    }
    return bigNum;
}
function printPerson(person) {
    console.log("name ".concat(person.Name, " \nage ").concat(person.Age, " \nis stutent ").concat(person.isStudent));
}
function isMinor(person) {
    if (person.Age < 18) {
        return true;
    }
    else {
        return false;
    }
}
function oldReader(arr) {
    var oldestReader = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].Age > oldestReader.Age) {
            oldestReader = arr[i];
        }
    }
    return oldestReader;
}
function oldBook(arr) {
    var oldestBook = arr[0].favoriteBook;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.Year < oldestBook.Year) {
            oldestBook = arr[i].favoriteBook;
        }
    }
    return oldestBook;
}
