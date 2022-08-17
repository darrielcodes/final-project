///////QUERY SELECTORS//////////////
let tweetDisplay = document.querySelector('.list-group');
let userInput = document.querySelector('#userInput');
let submitTweet = document.querySelector('#submit');
let getMission = document.querySelector('#mission');
let details = document.querySelector('.missionDetails');
let displayInfo = document.querySelector('.displayInfo');
let crimeImg = document.querySelector('#crimeImg');
let crimeCard = document.querySelector('.crimeCard');
let statsDisplay = document.querySelector('.getStats')
let statInput = document.querySelector('#statInput')
let submitStat = document.querySelector('#submitStat')
let statImg = document.querySelector('.statImg')
let displayName = document.querySelector('#displayName')
let sdkickImg = document.querySelector('.sdkickImg')
let displaySidekick = document.querySelector('#displaySidekick')
let submitsdKick = document.querySelector('#submitsdKick')
let getSdKick = document.querySelector('.getSdKick')
let displayInfo2 = document.querySelector('.displayInfo2');
//////////////////VARIABLES//////////////////////


/////////////USER TWEET/////////////////////////
submitTweet.addEventListener('click', (event) => {
    event.preventDefault();
    if (userInput.value === ''){
        alert("Please enter a tweet.")
    } else if (userInput.value !== ""){
    let 
    newTweet = document.createElement('li');
    let fullInfo = document.createElement('div');
    let newImg = document.createElement('img');
    fullInfo.className = 'list-group-item col-10'
    newTweet.className = "row border border-primary"
    newImg.src = 'http://inkwellideas.com/wp-content/uploads/2010/12/superhero.png';
    newImg.className = 'col img-thumbnail img-fluid mw-100'
    newTweet.style.width = "100%"
    newImg.style.width = '1px';
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
            userInput.value = '';
            }
        })
    })
    noEdit.addEventListener('click', () => {
        fullInfo.innerText = `by ME\n${userInput.value}`
        userInput.value = '';
    })  
    }
});
//////////////
let randomIndex = () => {
    for(let i = 0; i < 20; i++){
    let random = Math.floor(Math.random() * 20);
    return random
    }
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
        displayInfo.innerText = 'Mission accepted.'
       let destruct = document.querySelector('.saveDay');
       destruct.innerText = 'THIS MISSION WILL SELF DESTRUCT IN 5 SECONDS.'
       details.innerText = ''
       setTimeout(() => {
       crimeCard.style.opacity = '0'
       crimeImg.src = 'https://i.gifer.com/3IsK.gif';
       },5000)

    }) 
    decline.addEventListener('click', () => {
        crimeImg.src = 'https://m.media-amazon.com/images/M/MV5BMTU4Mjg2NzktYjBmYy00NjRmLWE5ZWMtZWM5Nzk1MDY1ZDcxXkEyXkFqcGdeQXVyNTk4NTY2Nzc@._V1_FMjpg_UX1000_.jpg';
        displayInfo.innerText = 'Mission declined.'
        getMission.disabled = false;
    })
    return accept
};

let submitControls = () => {
    // statInput.className = 'blinking'
    let accept = document.createElement('button');
    accept.innerText = 'Accept'
    accept.className = 'btn btn-primary'
    accept.type = 'button'
    displayInfo2.appendChild(accept);
    accept.addEventListener('click', (event) =>{
    getSdKick.innerText = ''
    displayInfo2.innerText = 'Sidekick accepted! \nMessage sent.'
    submitsdKick.disabled = true;
    })
};
///////////////////////////////////////
function randomNum(){
    for(let i = 0; i < 564; i++){
    let id = Math.floor(Math.random() * 563);
return id
    }
};

let once = false;
/////////////API CALLS/////////////////////////
let getNewTweet = async () => {
    for(let i = 0; i < 15; i++){
    let rawData = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
     data = await rawData.json();
    //console.log(data)
    let rawQuote = await fetch ('https://api.quotable.io/random');
    let quote = await rawQuote.json();

id = randomNum();
let name = data[id].name;
let img2 = data[id].images.sm
let power = data[id].powerstats.power
let speed = data[id].powerstats.speed
let strength = data[id].powerstats.strength
let intelligence = data[id].powerstats.intelligence
//////////set delay function ///////
    setTimeout(() => {
////// create tweet & img ////////
let newTweet = document.createElement('li');
let fullInfo = document.createElement('div');
let newImg = document.createElement('img');
fullInfo.className = 'list-group-item col-10';
newTweet.className = "row border border-dark mw-100";
newImg.src = img2;
newImg.className = 'col img-thumbnail img-fluid mw-100';
fullInfo.innerText = `@${name.split(' ').join('')}_${randomNum(id)} says...\n ${quote.content}`;
newTweet.style.width = "100%"
newImg.style.width = '1px';
///////append tweet/////
newTweet.appendChild(newImg);
newTweet.appendChild(fullInfo)
current = newTweet;
tweetDisplay.insertBefore(newTweet, tweetDisplay.children[0])
 console.log(fullInfo)
///////////////////STATS AND SIDEKICK//////////////
submitStat.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(statInput.value)
    newTweet.style.opacity = '100'
    if (statInput.value === ''){
        statsDisplay.innerText = 'Please select a tweet to view that user\'s stats.';
    } else if (statInput.value === name){
            statImg.src = img2;
            displayName.innerText = name;
            statsDisplay.innerText = 
            `Intelligence: ${intelligence}
            Power: ${power}
            Speed: ${speed}
            Strength: ${strength}
            `;
            console.log(submit)
        }
});

newTweet.style.cursor = 'pointer'
newTweet.addEventListener('click', () => {
    if (newTweet.style.opacity !== '0.5'){
    newTweet.style.opacity = '0.5'} 
    else if (newTweet.style.opacity === '0.5'){
        newTweet.style.opacity = '100'}
    else {
        newTweet.style.opacity = '100'
    }
    statInput.value = name
    console.log(newTweet)
});

submitsdKick.addEventListener('click', (e) => {
    e.preventDefault();
    displaySidekick.innerText = "Loading..."
   sdkickImg.src  = 'https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493b2ievij6adsbrwwll2dyfa0ftw7fuyg3wqo5sqgyx&rid=200w.gif&ct=g'
    setTimeout(() => {
        id = randomNum();
        name = data[id].name
        img2 = data[id].images.sm
        displaySidekick.innerText = name;
        console.log(data[id])
        sdkickImg.src = img2;
        getSdKick.innerText = 'Please indicate if you choose this partner and they will receive a message.';
        submitsdKick.innerText = "Get new" 
        console.log('test')
        statInput.value = name;
        if(!once){
        submitControls();
        once = true;
        }
    }, 2500)

    })
    }, 2500 * i)

}
};
getNewTweet();

let getCrime = async() => {
    let raw = await fetch('https://api.fbi.gov/wanted/v1/list');
    let data = await raw.json();

    let accessData = data.items[randomIndex()];
    let name = accessData.title;
    let reward = accessData.reward_text
    let description = accessData.description;
    let image = accessData.images[0].original;
//////////////////////////
getMission.addEventListener('click', () => {
    if (reward !== null){
        console.log('test');
    details.innerText = reward;
    let info = document.createElement('li');
    info.className = "list-group-item";
    info.innerText = `NAME: ${name}
    DESCRIPTION: ${description}`
    crimeImg.src = image;
    displayInfo.appendChild(info)
    getMission.disabled = true;
   //accept/decline buttons
    missionControls();
}
    else{
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
})
    
};
getCrime();