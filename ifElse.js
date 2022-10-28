// console.log("this is if else");

// weather = "sunny";

// if (weather == "sunny"){
//     console.log("Well, I better wear some suncream!");
// } else if (weather == "rainy"){
//     console.log("Better take an umbrella");
// } else if (weather == "snowing"){
//     console.log("Wear a hat!");
// } else {
//     console.log("Hmmm, it could go either way!");
// }

// place = "manc";
// weather = "cloud";
// if (place == "manc" && weather == "sunny"){
//     console.log("Check again");
// } else if (place == "manc" && weather == "rain"){
//     console.log("obvs");
// } else {
//     console.log("What, it isn't raining?");
// }

// day = "Saturday";
// if (day == "Saturday" || day == "Sunday"){
//     console.log("It's the weekend!");
// } else {
//     console.log("When's the weekend?");
// }

// age = 16;
// (age < 18) ? console.log("Too Young") : console.log("Old enough");

// activity 1
// age = 18;
// country = "UK";
// (age >= 18 && country == "UK") ? console.log("I can server you") : console.log("You aren't old enough");

// activity 2
// topping = "pineapple";
// switch (topping){
//     case "meatballs":
//     case "pepperoni":
//         console.log(`${topping}! That's one of my favourites!`);
//         break;
//     case "sweetcorn":
//     case "pineapple":
//         console.log(`Miss me with the ${topping}!`);
//         break;
//     case "mushroom":
//     case "peppers":
//         console.log(`I don't mind ${topping}.`);
//         break;
//     default:
//         console.log(`Not sure about ${topping}.`);
// }

// activity 3
// password = "billybob";
// length = password.length;
// (length < 8) ? console.log("The password is too short.") : console.log(password);

// activity 4
// num = 19;
// (num % 3 == 0 || num % 5 == 0) ? console.log("This number is divisible 3 or 5.") : console.log("This number isn't divisible by 3 or 5.");

// activity 5
// num = 15;
// if (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// } else if (num % 3 == 0){
//     console.log("fizz");
// } else if (num % 5 == 0){
//     console.log("buzz");
// } else {
//     console.log(num);
// }

// activity 6
// num = "1221";
// numReverse = num.split("").reverse().join("");
// (num == numReverse) ? console.log(`${num} is a palindrome.`) : console.log(`${num} isn't a palindrome.`);

// activity 7
// time = 9;
// placeOfWork = "Code Nation";
// homeTown = "Widnes";
// switch (true){
//     case time < 8:
//         console.log("I'm asleep!");
//         break;
//     case time == 8:
//         console.log("I just woke up!");
//         break;
//     case time == 9:
//         console.log("Almost ready!");
//         break;
//     default:
//         console.log("Who knows?");
// }

// activity 8
string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
vowels = ["a", "e", "i", "o", "u"];
last = 0;
console.log(`the index value of the last character is ${string.length - 1}.`);
for (i in vowels){
    if (string.lastIndexOf(vowels[i]) == -1){console.log(`There are no '${vowels[i]}'s in the string.`);
    } else {
    console.log(`The last ${vowels[i]} is at index ${string.lastIndexOf(vowels[i])}.`);
    }
    if (string.lastIndexOf(vowels[i]) > last){last = string.lastIndexOf(vowels[i]);}
}
console.log(`The index of the last vowel is ${last}.`);

//activity 9
// word = "test";
// (word[0] == word[word.length-1]) ? console.log(true) : console.log(false);

//activity 10
// num1 = 4;
// num2 = 3;
// ((num1 + num2) % 2 == 0) ? console.log(num1 + num2) : console.log(num1 * num2);