// sentence = "All Around the World";
// console.log(sentence.toUpperCase());
// console.log(sentence[7].toUpperCase());

// myName = "George";
// console.log(myName);

// balance = 100;
// console.log(balance);
// withdrawAmount = 20;
// balance -= withdrawAmount;
// console.log(balance);

// myName = "George";
// myAge = 23;
// favouriteColour = "Red";
// console.log(`My name is ${myName}. I am ${myAge} and my favourite colour is ${favouriteColour}.`)

// myName = "Fred";
// myAge = 30;
// favouriteColour = "Blue";
// console.log(`This guy's name is ${myName}, he's ${myAge} and his favourite colour is ${favouriteColour}.`)

// breakfast = "cereal";
// lunch = "sandwich";
// dinner = "pie";
// console.log(`${breakfast}\n${lunch}\nmmm ${dinner}`);

// breakfast = "toast";
// lunch = "salmon";
// dinner = "steak";
// console.log(`${breakfast}\n${lunch}\n${dinner}`);

// today = 298
// daysLeft = 365 - today;
// birthday = 44;
// daysUntilBirthday = daysLeft + birthday;
// console.log(`There are ${daysUntilBirthday} days until my birthday.`)

// myAge = 23;
// leapYears = 6;
// daysAlive = myAge * 365 + leapYears + today;
// console.log(`I have been alive for ${daysAlive} days.`)

dateOfBirth = new Date("1999/02/13");
today = new Date();
difference = Math.floor((today - dateOfBirth) / 1000 / 60 / 60 / 24);

console.log(`My date of birth is ${dateOfBirth.toLocaleDateString()}.`);
console.log(`I have been alive for ${difference} days.`);

// space1 = "X";
// space2 = "O";
// space3 = " ";
// space4 = "X";
// space5 = "X";
// space6 = " ";
// space7 = "O";
// space8 = " ";
// space9 = " ";
// console.log(`   |   |   \n ${space1} | ${space2} | ${space3} \n   |   |   \n-----------\n   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   \n-----------\n   |   |   \n ${space7} | ${space8} | ${space9} \n   |   |   `);