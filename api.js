const api_url = 'https://cat-fact.herokuapp.com/facts';

/*
async function getData(id) {
//getting data from api and destructuring it to identify by index
const response = await fetch(api_url);
const data = await response.json();
const newArray = [...data];

//variable for error message if needed
let errorMessage = "Not in the range!!!!!!!"

  switch(id){
      case "1":
          document.getElementById("buttonValue").innerHTML = newArray[2].text;
          console.log("it is working");
          break;
      case "2":
          document.getElementById("buttonValue").innerHTML = newArray[3].text;
          break;
      case "3":
          document.getElementById("buttonValue").innerHTML = newArray[4].text;
          break;
      case "4":
          document.getElementById("buttonValue").innerHTML = newArray[1].text;
          break;
      case "5":
          document.getElementById("buttonValue").innerHTML = newArray[0].text;
          break;
      default: 
      document.getElementById("buttonValue").innerHTML = errorMessage;
  }

}
*/

//second function for number
async function getData2() {
  //getting data from api and destructuring it to identify by index
  const response = await fetch(api_url);
  const data = await response.json();
  const newArray = [...data];
  
  //gets value of user # and gives error message if out of range
  let userInputNum = document.getElementById('userNum').value;
  let errorMessage = "Not in the range!!!"
  //random fact for user
  let randomChoice = Math.floor(Math.random() * 5);
 
  //below is for number of facts user wants
  
  if (userInputNum >= 0 && userInputNum <= 20) {
     //getData();
     document.getElementById("numValue" + userInputNum).innerHTML = newArray[randomChoice].text;
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
