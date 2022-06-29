//Below is fetch function calling URL

const api_url = 'https://cat-fact.herokuapp.com/facts';
//var data = "";
//var newArray = "";

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  const newArray = [...data];

 //gets value of user #
//let userInputNum = document.getElementById('userNum');
 //sets error message if value not in the range
//let errMessage = "Not in the range!!!"


document.getElementById("two").addEventListener("click", twoFunc)
function twoFunc () {
    getData();
    document.getElementById("buttonValue").innerHTML = newArray[2].text;
}


/*if (userInputNum >= 0 && userInputNum <= 20) {
   //getData();
   document.getElementById("numValue").innerHTML = newArray[userInputNum].text;
 } else {
   document.getElementById("numValue").innerHTML = errMessage;
 }*/

}







//var newArray = getData();
//newArray = [...data];

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