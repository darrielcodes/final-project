///////QUERY SELECTORS//////////////
///let displayTweets = document.querySelector('.list-group');
//let newTweet = document.querySelector('.list-group-item"');
let tweetDisplay = document.querySelector('.list-group');
let userInput = document.querySelector('#userInput');
let submitTweet = document.querySelector('#submit');
let getMission = document.querySelector('#mission');
let details = document.querySelector('.missionDetails');
let displayInfo = document.querySelector('.displayInfo');
let crimeImg = document.querySelector('#crimeImg');
let crimeCard = document.querySelector('.crimeCard');

let submitButton = false;
/////////////FUNCTIONS/////////////////////////
submitTweet.addEventListener('click', (event) => {
    event.preventDefault();
    if (userInput.value === ''){
        alert("Please enter a tweet.")
    } else if (userInput.value !== ""){
        submitButton = true;
    let newTweet = document.createElement('li');
    let fullInfo = document.createElement('div');
    let newImg = document.createElement('img');
    fullInfo.className = 'list-group-item col-10'
    newTweet.className = "row border border-primary"
    newImg.src = 'http://inkwellideas.com/wp-content/uploads/2010/12/superhero.png';
    newImg.className = 'col img-thumbnail img-fluid mw-100'
    newImg.style.width = '2px';
    fullInfo.innerText = `by ME\n${userInput.value}`
    newTweet.appendChild(newImg);
    newTweet.appendChild(fullInfo);
    tweetDisplay.insertBefore(newTweet, tweetDisplay.children[0])
    ////////edit and delete buttons///////////////
    let edit = document.createElement('button');
    edit.className = 'btn btn-danger';
    edit.innerText = 'Edit?'
    let noEdit = document.createElement('button');
    noEdit.innerText = 'No';
    noEdit.className = 'btn btn-dark';
    fullInfo.appendChild(edit)
    fullInfo.appendChild(noEdit)
    edit.addEventListener('click', () => {
        let editInfo = document.createElement('input');
        let submitEdit = document.createElement('button');
        editInfo.setAttribute("type", "text");
        submitEdit.innerText = 'Submit!'
        submitEdit.className = "btn btn-primary";
        fullInfo.appendChild(editInfo)
        fullInfo.appendChild(submitEdit)
        submitEdit.addEventListener('click', () => {
            if (editInfo.value === ''){
                alert("Please enter a tweet.")
            } else if (editInfo.value !== ""){
            fullInfo.innerText = `by ME (edited)\n${editInfo.value}`
            }
        })
    })
    noEdit.addEventListener('click', () => {
        fullInfo.innerText = `by ME\n${userInput.value}`
    })  
    }
});
//////////////
let randomIndex = () => {
    let random = Math.floor(Math.random() * 20);
    console.log(random)
    return random
    
};
////////////////
let missionControls = () => {

    let accept = document.createElement('button');
    accept.innerText = 'ACCEPT'
    let decline = document.createElement('button');
    decline.innerText = 'DECLINE'
    displayInfo.appendChild(accept)
    displayInfo.appendChild(decline)
    accept.addEventListener('click', () => {
        crimeImg.src = 'https://standingomarching.com/wp-content/uploads/2019/02/mission-accepted.jpg';
        displayInfo.innerText = 'Challenge accepted.'
       let destruct = document.querySelector('.saveDay');
       destruct.innerText = 'THIS MISSION WILL SELF DESTRUCT IN 5 SECONDS.'
       details.innerText = ''
       setTimeout(() => {
        crimeCard.style.opacity = '0'
       },5000)
    })
    decline.addEventListener('click', () => {
        crimeImg.src = 'https://m.media-amazon.com/images/M/MV5BMTU4Mjg2NzktYjBmYy00NjRmLWE5ZWMtZWM5Nzk1MDY1ZDcxXkEyXkFqcGdeQXVyNTk4NTY2Nzc@._V1_FMjpg_UX1000_.jpg';
        displayInfo.innerText = 'Challenge declined.'
        getMission.disabled = false;
    })

    return accept
}
/////////////API CALLS/////////////////////////
let getNewTweet = async () => {
    for(let i = 0; i < 15; i++){
    let id = Math.floor(Math.random() * 731);
    let rawData = await fetch(`https://superheroapi.com/api.php/2105274849633834/${id}`);
    let data = await rawData.json();
    console.log(data)
//// get tweet text //////
    let rawQuote = await fetch ('https://api.quotable.io/random');
    let quote = await rawQuote.json();
    //console.log(quote)
//////////set delay function ///////
    setTimeout(() => {
////// create tweet & img ////////
    if (submitButton = true){
        setTimeout(() => {

    }, 10000 * i)
    }
let newTweet = document.createElement('li');
let fullInfo = document.createElement('div');
let newImg = document.createElement('img');
fullInfo.className = 'list-group-item col-10';
newTweet.className = "row border border-dark mw-100";
newImg.src = data.image.url;
newImg.className = 'col img-thumbnail img-fluid mw-100';
fullInfo.innerText = `by ${data.name}_${id} \n${quote.content}`;
newTweet.style.width = "100%"
newImg.style.width = '1px';
///////append tweet/////
newTweet.appendChild(newImg);
newTweet.appendChild(fullInfo)
tweetDisplay.insertBefore(newTweet, tweetDisplay.children[0])
console.log(newTweet)
    }, 2500 * i)
}
}
getNewTweet();

let getCrime = async() => {
    let raw = await fetch('https://api.fbi.gov/wanted/v1/list');
    let data = await raw.json();
    console.log(data)
///////////////////////////
    let accessData = data.items[randomIndex()];
    let name = accessData.title;
    let reward = accessData.reward_text
    let description = accessData.description;
    let warning = accessData.warning_message;
    let image = accessData.images[0].original;
///////////////////////////
getMission.addEventListener('click', () => {
    if (reward !== null){
        console.log('test');
    details.innerText = reward;
    let info = document.createElement('li');
    info.className = "list-group-item";
    info.innerText = `NAME: ${name}
    DESCRIPTION: ${description}`
    //DETAILS: ${}`
    crimeImg.src = image;
    displayInfo.appendChild(info)
    getMission.disabled = true;
   /////accept/decline buttons//////////
    missionControls();
}
    else{
        console.log('test2');
    details.innerText = 'REWARD OFFERED'
    let info2 = document.createElement('li');
    info2.className = "list-group-item";
    info2.innerText = `NAME: ${name}
    DESCRIPTION: ${description}`
    crimeImg.src = image;
    displayInfo.appendChild(info2)
    getMission.disabled = true;
    missionControls();
    }

    console.log(reward);
    console.log(accessData);

    
})
}


getCrime();
