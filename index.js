// Global variables defined with let and const
// keyword do not belong to the window object
let car = "volvo";
console.log(window.car);  // give's us undefined

// Global variables defined with var belong to the window object
var carColor = "blue";
console.log(window.carColor);  // gives us blue

// Global  function declarations are attached to the window object
function run() {                        
    console.log("car is running");      
}
console.log(window.run);    // gives us ƒ run() {
                            //console.log("car is running")}
                            // print's out the function as string

// Function expresions do not belong to the window if we don't use var keyword
let brake =  () => {
    console.log("car is stoped");
};
console.log(window.brake);   // print's out undefined



