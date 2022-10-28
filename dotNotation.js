// console.log("Hello World!".toUpperCase());

// console.log(Math.random()*6);

// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");

// console.log("   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   ");

output = ["   |   |   ","-----------"]

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        console.log(output[0]);
    }
    if(i != 2){
        console.log(output[1]);
    }
}
