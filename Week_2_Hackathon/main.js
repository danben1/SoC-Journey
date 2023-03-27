/* 
hit a button to request a random joke as prompt
    create a button in html with id = "random" ✅
    style button using css
    ctreate a DOM object of #random button and store in variable called randomButton ✅
    create para element html with id joke ✅

    create async function getRandom(){ ✅
        create variable to store response = await fetch
        ("https://icanhazdadjoke.com/api#fetch-a-random-dad-joke");
        const data = await respone.json(); create variable to extract and stone JSON object
        const heading = document.querySelector("#joke") create variable to store DOM of joke/para element
        heading.textContent = navigate to joke text inside data []; change contents of para to joke
        quoteCollector(navigate data[] passing dad joke string) function to store jokes (call back function)
        console.log (navigate data[]) check
        

    }


add event listener to randomButton ("click",getRandom) ✅

create function to store jokes ✅
create ol element html with id "#joke-history"
function quoteCollector(input) {
    let newList = document.createElement("li")
    newList.textContent = input
    console.log(newList)
    let existingList = document.querySelector("#quote-history")
    existingList.appendChild(newList)



    did you find it funny? Rate this joke. Keep and add to array
else bin
keep faves in basket
*/

//DOM of button to generate random joke
const randomButtom = document.querySelector("#random")

//DOM of P element to display joke


//create function to generate random joke
async function getRandom(){
    //fetch random joke --> store in response
    const response = await fetch ("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    //convert json to JS object --> store in data
    const data = await response.json();
    //create DOM of P element to display joke --> store in displayJoke
    const displayJoke = document.querySelector("#joke")
    //change text contents of displayJoke to generated joke (stored in data)
    displayJoke.textContent = data.joke
    //add function to store jokes
    jokeCollector(data.joke)
    // add joke to array
    jokeHistory.push(data.joke)
    // print as check
    console.log(data);
    // 
    faves(jokeHistory)

}


//function to store jokes in list on page
function jokeCollector(input) {
    let newList = document.createElement("li")
    newList.textContent = input
    console.log(newList)
    let jokeList = document.querySelector("#joke-history")
    jokeList.appendChild(newList)
}


//add eventlistener to randomButton
randomButtom.addEventListener("click",getRandom)

/*
after 5 jokes prompt question "Which number joke is your favourite?"
    if(length of list > 5)
        promt "which number of joke is your favourite?"
        store user input in variable called userChoice
        convert userChoice number to index position
            let index = userChoice - 1

       let favouriteJoke = jokeList [index] 
       console.log (favouriteJoke)

    else alert "pick another joke"

user picks number 
joke moves to favourites list

create a new html list element called favouriteJokes
create DOM of that element
store in variable
*/
// list to store users favourite jokes
let jokeHistory = []
// if more than 5 jokes are click prompt asks for favourite joke
// it takes the favourite joke and puts it in joke history
// it creates a new html list element
// this function runs inside getRandom so is call each time button is clicked
function faves(jokeHistory) {
    if(jokeHistory.length > 5){
        let userChoice = prompt("Which number joke is your favourite?")
        let index = userChoice - 1
        let favouriteJoke = jokeHistory [index]
        faveCollector(favouriteJoke)
    }

}
// fave collector takes favourite joke documented and creates new html list element
// displays in new html favourites list
// this runs inside faves function as a call-back
function faveCollector(faves) {
    let newList = document.createElement("li")
    newList.textContent = faves
    console.log(newList)
    let faveList = document.querySelector("#fave-list")
    faveList.appendChild(newList)
    let newSubHeading = document.querySelector("#h2")
    newSubHeading.textContent = "Save this for a rainy day..."
}



//joke of the day 
//Why didn’t the orange win the race? It ran out of juice.

//create new P html element ✅
    //insert orange emoji ✅
//create function called orangeJoke that 
    //create a DOM element of P and store in variable called orange ✅
    //change text content of P to be the joke ✅
//addeventlistener "click" that displays "orange joke"

function orangeJoke () {
    let orange = document.querySelector("#orange")
    orange.textContent = "Why didn't the orange win the race? It ran out of juice."
}
orange.addEventListener("click", orangeJoke);

//create search function 
async function searchJoke (){
    //get user input for search term
    const userInput = prompt("Enter a search term for a dad joke: ")
    //fetch response from API
    const response = await fetch (`https://icanhazdadjoke.com/search?term=${userInput}`, {
        headers: { accept: "application/json" },
      });
    //convert JSON to object
    const data = await response.json();
    //get array of results
    const searchResults = data.results
    //create for loop to send user input to new list 
    console.log(searchResults[1].joke)
    const newList = document.querySelector("#search-result")
    newList.textContent = searchResults[1].joke
}


//create new fetch request which passes through search term 
//get search term from user using input button 
//create DOM of search button
searchButton  = document.querySelector("#search")
//append event listener to input button
 searchButton.addEventListener("click",searchJoke)
