// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar"
// ];

// for (let i = 0; i < myAdmins.length; i++) {
//   if (i === myAdmins.indexOf("Stop")) {
//     document.write(`<div>We Have ${i} Admins</div>`);
//     document.write("<hr>");
//     for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
//       document.write("<div>");
//       document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//       document.write("<h3>Team Members :-</h3>");
//       counter = 0;
//       for (let j = 0; j < myEmployees.length; j++) {
//         if (myAdmins[i][0] === myEmployees[j][0]) {
//           counter += 1;
//           document.write(`<p>${counter} - ${myEmployees[j]}</p>`);
//         }
//       }
//       document.write("</div>");
//       document.write("<hr>");
//     }
//   }
// }

// let myAdmin =["Ahmed","Osama","Sayed","Stop","Samera",""]
// let myOmpleyees =["Amgad","Samah","Ameer","Omar","Otman","Amany","Samia","anwar"]
// document.write(`<div>We Have ${myAdmin.length} Admins</div>`)
// document.write(`<hr>`)
// document.write(`<div>The admin for theam    ${length +1}  ${myAdmin[1]}</div>`)
// document.write(`<div>Team Members:</div>`)
// document.write(`<div></div>`)

// // let my = ["ahmed","mazero","elham","osama","gamal","ameer"];
// // // console.log(my.reverse());
// // console.log(my.slice(elham','mazero'));

// let zero = 0;
// let counter = 3;
// let my = ["ahmed","mazero","elham","osama","gamal","ameer"];

// let myy = my.slice(zero, counter);
// myy.push("Osama");
// console.log(myy);
// // console.log(my.slice(zero, counter).reverse());

// console.log(my.splice(zero,(counter+counter),"Elzero"));

// console.log(my.splice(zero, ++zero, "rO"))

function insert(num) {
  var myString = document.form.textview.value;
  var lastChar = myString[myString.length - 1];
  if(myString.length < 30){
      if(!isNaN(lastChar) || lastChar== null || !isNaN(num)){
          document.form.textview.value=myString + num;
      }else if(num != lastChar){
          document.form.textview.value = myString.replace(lastChar, num);
      }
  }
}
function equal() {
  var sum = document.form.textview.value;
  if (sum){
      document.form.textview.value = eval(sum);    
  }
}
function clean(){
  document.form.textview.value ='';
}
function back(){
var exp = document.form.textview.value;
document.form.textview.value = exp.substring(0,exp.length - 1 );
}