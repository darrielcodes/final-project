///////QUERY SELECTORS//////////////
///let displayTweets = document.querySelector('.list-group');
//let newTweet = document.querySelector('.list-group-item"');
let tweetDisplay = document.querySelector('.list-group');
let userInput = document.querySelector('#userInput');
let submitTweet = document.querySelector('#submit')



/////////////FUNCTIONS/////////////////////////
submitTweet.addEventListener('click', () => {
    if (userInput.value === ''){
        alert("Please enter a tweet.")
    } else if (userInput.value !== ""){
        
    }
})




/////////////API CALLS/////////////////////////

let getNewTweet = async () => {
    for(let i = 0; i < 5; i++){
    let id = Math.floor(Math.random() * 731);
    let rawData = await fetch(`https://superheroapi.com/api.php/2105274849633834/${id}`);
    let data = await rawData.json();
    console.log(data)
//// get tweet text //////
    let rawQuote = await fetch ('https://api.quotable.io/random');
    let quote = await rawQuote.json();
    console.log(quote)
// ////// create tweet & img ////////
let newTweet = document.createElement('li');
let fullInfo = document.createElement('div');
let newImg = document.createElement('img');
fullInfo.className = 'list-group-item col-10'
newTweet.className = "row"
newImg.src = data.image.url;
newImg.className = 'col'
fullInfo.innerText = `by ${data.name}_${id} \n${quote.content}`///style of tweet////
newImg.style.width = '5px'

///////append tweet/////
newTweet.appendChild(newImg);
newTweet.appendChild(fullInfo)
tweetDisplay.appendChild(newTweet);
console.log(newTweet)
}
}
getNewTweet();



