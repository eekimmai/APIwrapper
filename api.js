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
  //outputting random fact
  let chosenFact = newArray[randomChoice].text;

  
  
  //loop
    if (userInputNum > 0 && userInputNum <= 20) {
    document.getElementById("numValue").innerHTML = chosenFact;
    } else {
      alert(errorMessage);
    }
    
}


/*
Trying to create new element and assign it chosenFact variable then loop through it the number of times user wants
If user wants 7 facts, it will loop 7 times and each element will have a random fact using randomChoice variable
    () => {
      //create a new div element
      const factDiv = document.createElement('div');
      factDiv.classList.add("fact");
      //create li
      const newFact = document.createElement('li');
      //output div to ul in html
      newFact.classList.add('fact-item');
      factDiv.appendChild(newFact);
      //adding new div to numList in HTML
      const numList = getElementsByClassName('numList');
      numList.appendChild(factDiv);
      }

  
*/