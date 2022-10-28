// coffeeOrder = ["Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new"];
// console.log(coffeeOrder[1]);
// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder[1]);
// coffeeOrder.push("Donna - espresso");
// console.log(coffeeOrder);
// coffeeOrder.pop();
// console.log(coffeeOrder);

// drinks = ["coke", "lemonade", "tea"];
// for (i in drinks){
//     console.log(drinks[i]);
// }

// multiplesTwo = [];
// for(i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(multiplesTwo);

// age = 15;
// while(age < 18){
//     console.log("You're a child!", age);
//     age++;
// }
// console.log("You're an adult!", age);

// cards = ["Diamond", "Spade", "Heart", "Club"];
// currentCard = "Club";
// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// activity 1
// films = ["Bourne", "Batman", "Joker"];
// films.push("Frozen");
// films.push("Top Gun");
// for(i in films){
//     console.log(films[i]);
// }

// activity 2
// for(i = 0; i < 6; i++){
//     console.log(Math.floor(Math.random()*50));
// }

//activity 3
// for(i = 9; i >= 0; i--){
//     console.log(i);
// }

//activity 4
films = ["Bourne", "Batman", "Ghostbusters", "Frozen"];
for(i in films){
    console.log(films[i]);
}
if(films[2] == "Ghostbusters"){
    console.log("Yay it's Ghostbusters!");
} else {
    console.log("Boo! We want Ghostbusters!");
}

//activity 5
// for(i = 0; i < 6; i++){
//     num = Math.floor(Math.random()*30);
//     (num % 7 == 0) ? console.log(`${num} is divisible by 7.`) : console.log(`${num} isn't divisible by 7.`);
// }

//activity 6
// bobsFollowers = ["Hannah", "James", "Lewis", "Peter"];
// hannahsFollowers = ["Bob", "Adam", "James", "Lewis"];
// for(i in bobsFollowers){
//     for(k in hannahsFollowers){
//         if(bobsFollowers[i] == hannahsFollowers[k]){console.log(`${bobsFollowers[i]} follows both Bob and Hannah`);}
//     }
// }

//activity 7
// result = "";
// i = 0;
// do{
//   i ++;
//   result += `${i} `;
// } while(i > 0 && i < 5);
// console.log(result);

// result = "";
// for(i = 1; i <= 5; i++){
//     result += `${i} `;
// }
// console.log(result);

// result = "";
// i = 1;
// while(i <= 5){
//     result +=`${i} `;
//     i++;
// }
// console.log(result);