                                             // ARRAYS AND LOOP
// Q-1
// var emptyArray = [];
// emptyArray.push([]);
// console.log(emptyArray);


// // Q-2
// var DATA = [
//     ["Talha", 23, "male", "B.Com"],
//     ["Bilal", 25, "male", "BA"],
//     ["Anas", 21, "male", "Intermediate"],
//     ["Hssan", 24, "male", "BCA"],
// ];
// // document.write(DATA[1][0]);

// document.write("<table border ='1px'>");
// for(var a = 0; a < 4; a++){
//     document.write("<tr>");
// for(var b = 0; b < 4; b++){
//     document.write("<td>" + DATA[a][b] + "" + "</td>");
// };
// document.write("<tr>");
// document.write("<br>");
// };
// document.write("</table>");

// document.write(DATA[0][0]);


// // Q -3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }




// // Q-4-1
// function table(number){
//     for (var i=1; i<=10; i++){
//         var res = i*number;
//         console.log(`${number} x ${i} = ${res}`);
//     }
// }
// table(5);
// // Q-4-2
function generateTable() {
    var tableNumber = parseInt(document.getElementById("tableNumber").value);
    var tableLength = parseInt(document.getElementById("tableLength").value);
    var output = document.getElementById("output");
    output.innerHTML = "";

    output.innerHTML += `<p>Multiplication table for ${tableNumber}:</p>`;
    for (let i = 1; i <= tableLength; i++) {
      output.innerHTML += `<p>${tableNumber} * ${i} = ${tableNumber * i}</p>`;
    }
  }


// Q-5
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items of the array using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(fruits [1]);




// Q-6
    let counting = "";
    for (let i = 1; i <= 15; i++) {
        counting += i + ", ";
    }
    document.getElementById("counting").innerText = counting.slice(0, -2);

    
    let reverseCounting = "";
    for (let i = 10; i >= 1; i--) {
        reverseCounting += i + ", ";
    }
    document.getElementById("reverseCounting").innerText = reverseCounting.slice(0, -2);

   
    let even = "";
    for (let i = 0; i <= 20; i += 2) {
        even += i + ", ";
    }
    document.getElementById("even").innerText = even.slice(0, -2);

    
    let odd = "";
    for (let i = 1; i <= 19; i += 2) {
        odd += i + ", ";
    }
    document.getElementById("odd").innerText = odd.slice(0, -2);


     let series = "";
     for (let i = 1; i <= 10; i++) {
         series += (i * 2) + "k, ";
     }
     document.getElementById("series").innerText = series.slice(0, -2);


