/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
var firstReverse = function (str) {
    console.log(str);
    if (typeof str === typeof '') {
        return str.split('').reverse().join('');
    }
    else {
        return null;
    }
    console.log(str);
}

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
var alphaOrder = function(str) {
    console.log(str);
    if (typeof str === typeof '') {
        return str.split('').sort().join('');
    }
    else {
        return null;
    }
}

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
var vowelCount = function(num) {
    console.log(num);
    if (typeof num === typeof '') {
        return num.match(/[aeiou]/gi).length;
    }
    else {
        return null;
    }
}

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
var timeConvert = function(str) {
    console.log(str);
    if (typeof str === typeof '') {
        return null;
    }
    else {
        var hours = Math.trunc(str/60);
        var minutes = str % 60;
        console.log(hours + ':' + minutes);
        return hours + ':' + minutes;
    }
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
var repeatString = function(str, times) {
    console.log(str, times);
    if (typeof times === typeof '' && typeof str !== typeof '') {
        return null;
    }
    else {
        var repeat = '';
        for (var i = 0; i < times; i++) {
            repeat += str;
        }
        console.log(repeat);
        return repeat;
    }
}

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
