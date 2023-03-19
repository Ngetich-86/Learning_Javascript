//.....................................JavaScript Functions.....................................
//JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
  console.log(myFunction21,10)

//........Function Return...........
let x = myFunction(3,2)
        console.log(x)
function myFunction(a,b){
return a*b
}
//Why Functions? ----You can reuse code: Define the code once, and use it many times.different arguments, to produce different results.
function toCelsius(f) {
    return (5/9) * (f-32);
}
console.log(toCelsius(100))

//                       ------The () Operator Invokes the Function----
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;
//     ...toCelsius refers to the function object, and toCelsius() refers to the function result.

//                   ----------------------Functions Used as Variable Values--------------------
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(The temperature is " + toCelsius(77) + " Celsius)






















