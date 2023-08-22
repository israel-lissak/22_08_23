// כל אובייקט מחויב בממשק או טיפוס
//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
function evenNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
function sizeOfRectangle(rectangle) {
    return rectangle.hight * rectangle.width;
}
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
function isPalindrome(text) {
    for (var i = 0; i < (text.length / 2) + 1; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
function arrToUpper(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].toLowerCase();
        newArr[i][0].toUpperCase();
    }
    return newArr;
}
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function uniqueArr(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
function fullNameInitials(someName) {
    return { first: someName.first[0], last: someName.last[0] };
}
function avgAgeOfArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return sum / arr.length;
}
function maxAndMin(arr) {
    var obj = { max: arr[0], min: arr[0] };
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > obj.max) {
            obj.max = arr[i];
        }
        if (arr[i] < obj.min) {
            obj.min = arr[i];
        }
    }
    return obj;
}
// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
function reversArr(arr) {
    console.log(arr.reverse());
}
