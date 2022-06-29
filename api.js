const api_url = 'https://cat-fact.herokuapp.com/facts';

async function getData() {
//getting data from api and destructuring it to identify by index
const response = await fetch(api_url);
const data = await response.json();
const newArray = [...data];

//gets value of user # and gives error message if out of range
let userInputNum = document.getElementById('userNum').value;
let errorMessage = "Not in the range!!!"

//below is for number of facts user wants

if (userInputNum >= 0 && userInputNum <= 20) {
   getData();
   document.getElementById("numValue").innerHTML = newArray[userInputNum].text;
 } else {
   document.getElementById("numValue").innerHTML = errorMessage;
}

}

/*async function twoFunc() {
    const response = await fetch(api_url);
    const data = await response.json();
    const newArray = [...data];
//twoFunc();
document.getElementById("buttonValue").innerHTML = newArray[2].text;
}*/


//console.log(data);

/*function factNum() {
    //gets value of user #
  let userInputNum = document.getElementById('userNum').value;
    //sets error message if value not in the range
  let errMessage = "Not in the range!!!"

  if (userInputNum >= 1 && userInputNum <= 20) {
      getData();
      
      document.getElementById("numValue").innerHTML = newArray[userInputNum];
    } else {
      document.getElementById("numValue").innerHTML = errMessage;
    }
}*/
/*
console.log(newArray[0].text);
console.log(newArray[1].text);
console.log(newArray[2].text);
console.log(newArray[3].text);
console.log(newArray[4].text);
*/

//getData();
