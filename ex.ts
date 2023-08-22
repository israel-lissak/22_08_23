function returnBigNum(num1: number, num2: number): number {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function logBigNum(num1: number, num2: number): void {
    if (num1 > num2) {
        console.log(num1);
        
    } else {
        console.log(num2);
    }
}

function isEven(num: number): string {
    if (num % 2 === 0) {
        return `${num} is even`
    } else {
        return `${num} is not even`
    }
}

function strLength(str: string): number {
    return str.length
}

function return0ToNum(num: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < num; i++) {
        arr[i] = i+1;
    }
    return arr;
}

function returnBigNumOfArr(arr:number[]):number {
    let bigNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > bigNum) {
            bigNum = arr[i];
        }
    }
    return bigNum
}

type Person = {
    Name: string,
    Age: number,
    isStudent: boolean
}

function printPerson(person:Person) {
    console.log(`name ${person.Name} \nage ${person.Age} \nis stutent ${person.isStudent}`);
}

function isMinor(person:Person): boolean {
    if (person.Age < 18){
        return true;
    } else {
        return false;
    }
}

interface Book {
    Title: string,
    Author: string, 
    Year: number
}

type Reader = Person & {favoriteBook: Book};

function oldReader(arr:Reader[]):Reader {
    let oldestReader = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Age > oldestReader.Age) {
            oldestReader = arr[i];
        }
    }
    return oldestReader;
}

function oldBook(arr:Reader[]):Book {
    let oldestBook = arr[0].favoriteBook;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.Year < oldestBook.Year) {
            oldestBook = arr[i].favoriteBook;
        }
    }
    return oldestBook;
}

