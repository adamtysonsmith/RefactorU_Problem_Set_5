// 1. Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
var alphabetSoup = function(str) {
    return str.split('').sort().join('');
}

// 2. Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).
var vowelCount = function(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

// 3. Write a function coinDeterminer that takes a single number parameter, which will be an integer ranging from 1 to 250, and returns an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.
var coinDeterminer = function(num) {
    
}