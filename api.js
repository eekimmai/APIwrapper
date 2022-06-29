const api_url = 'https://cat-fact.herokuapp.com/facts';

//first function endpoint connects to individual button and returns fact based on alphabetical order
//main focus is using switch statement for button clicked
async function getData(id) {
const response = await fetch(api_url);
const data = await response.json();
//getting data from api and destructuring it to identify by index 0-4
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


//second function for number of facts user wants
//main focus is getting number of facts, iterating through that and assigning each request with random fact, using array index 0 - 4
async function getData2() {
  const response = await fetch(api_url);
  const data = await response.json();
  const newArray = [...data];
  
// first variable gets value of user # and second provides error message if its out of range (range 0-20)
  let userInputNum = document.getElementById('userNum').value;
  let errorMessage = "Not in the range!!!"
  //random fact for user, using array index 0-4
  let randomChoice = Math.floor(Math.random() * 5);
 
  //below is for number of facts user wants
  
  if (userInputNum > 0 && userInputNum <= 20) {
     document.getElementById("numValue" + userInputNum).innerHTML = newArray[randomChoice].text;
   } else {
     alert(errorMessage);
  }
}