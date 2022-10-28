// alarmMsg = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }
// day = "Monday";
// alarm = "";
// (day == "Saturday" || day == "Sunday") ? alarm = alarmMsg.weekendAlarm : alarm = alarmMsg.weekdayAlarm;
// console.log(alarm);
// console.log(day);

// offer = "none";
// time = 1500;
// cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//     openCafe: () => {
//         if (this.hasSpecialOffers){
//             return "Time for a special offer!";
//         }
//         return "Come on in";
//     },
//     closeCafe: () => {
//         return "We are closed, come back tomorrow!";
//     }
// }
// if (time < 1100){
//     offer = cafe.brakfastOffer;
//     console.log(cafe. breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// } else {
//     offer = cafe.noOffer;
//     console.log(cafe.noOffer);
// }
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// person = {
//     name: "George",
//     age: 23,
// }
// person.sayHi = () => {
//     return `Hello my name is ${person.name}.`;
// }
// person.favSongs = ["gangnam style", "cha cha slide"];
// console.table(person);
// console.log(person.sayHi());

// pet = {
//     name: "Bob",
//     typeOfPet: "dog",
//     age: 3,
//     colour: "black",
//     eat(){
//         return `${this.name} is eating`
//     },
//     drink(){
//         return `${this.name} is drinking`
//     }
// }
// console.log(pet.eat());
// console.log(pet.drink());

// coffeeShop = {
//     branch: "Starbucks",
//     menu: {
//         coffee: 2,
//         tea: 1,
//         sandwich: 3
//     },
//     price: [1.5, 2, 3, 1],
//     drinksOrdered(item){
//         order += this.menu.item;
//         return `${item} added to order. order total is £${order}.`
//     },
//     foodOrdered(){

//     }
// }
// console.log(coffeeShop.drinksOrdered(coffeeShop.menu.tea));

//activity 3
// coffeeShop = {
//     branch: "Starbucks",
//     drinks: ["coffee", 2.5, "tea", 1.50, "water", 0],
//     food: ["biscuit", 1, "sandwich", 2],
//     drinksOrdered(drink){
//         for (i = 0; i < this.drinks.length; i++){
//             if (drink == this.drinks[i]){
//                 return this.drinks[i + 1];
//             }
//         }
//         return "Na0";
//     },
//     foodOrdered(food){
//         for (i = 0; i < this.food.length; i++){
//             if (food == this.food[i]){
//                 return this.food[i + 1];
//             }
//         }
//         return "Na0";
//     },
//     totalOrder(food, drink){
//         if (this.foodOrdered(food) == "Na0" || this.drinksOrdered(drink) == "Na0"){
//             console.log("We don't have that");
//         } else {
//             console.log(`You have ordered:\n${food} - £${this.foodOrdered(food)}\n${drink} - £${this.drinksOrdered(drink)}\ntotal - £${this.foodOrdered(food) + this.drinksOrdered(drink)}`);
//         }
//     }
// }
// coffeeShop.totalOrder("sandwich", "coffee");

coffeeShop = {
    branch: "Starbucks",
    menu: ["coffee", 2.5, "tea", 1.50, "water", 0, "biscuit", 1, "sandwich", 2],
    order(item){
        for (i = 0; i < this.menu.length; i++){
            if(item == this.menu[i]){
                return this.menu[i + 1];
            }
        }
        return "Na0";
    },
    totalOrder(item){
        if (this.order(item) == "Na0"){
            console.log("We don't have that");
        } else {
            console.log(`You have ordered:\n${item} - £${this.order(item)}\n${item} - £${this.order(item)}\ntotal - £${this.order(item) + this.order(item)}`);
        }
    }
}
coffeeShop.totalOrder("sandwich");