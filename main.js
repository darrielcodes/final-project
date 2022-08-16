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
let statsDisplay = document.querySelector('.getStats')
let statInput = document.querySelector('#statInput')
let submitStat = document.querySelector('#submitStat')
let statImg = document.querySelector('.statImg')
let displayName = document.querySelector('#displayName')
let submitButton = false;
let current = [];
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
}
//let data = {};
let objArray = []
let id = 0;

//let newTweet = document.createElement('li');
/////////////API CALLS/////////////////////////
let getNewTweet = async () => {
    for(let i = 0; i < 15; i++){
    let id = Math.floor(Math.random() * 563);
    let rawData = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
     data = await rawData.json();
    //console.log(data)
//// get tweet text //////
    let rawQuote = await fetch ('https://api.quotable.io/random');
    let quote = await rawQuote.json();
   
   let name = data[id].name;
    //let data2 = Object.values(data[id]) 
//console.log(data2)
//////////set delay function ///////
    setTimeout(() => {
////// create tweet & img ////////
    if (submitButton = true){
        setTimeout(() => {
//return here
    }, 10000 * i)
    }
//current = data2;
// let superName = current.name;
// let objArray = []
// data.forEach(item => {
//     objArray.push({
//         name: {value: data[id].name}
        
//     });
//     console.log(objArray)
// })
// current.forEach(item => {
//         objArray.push(
//            data2[1])
//         });
       // console.log(current)

let newTweet = document.createElement('li');
let fullInfo = document.createElement('div');
let newImg = document.createElement('img');
//let a = document.createElement('a');
//a.href = '#';

fullInfo.className = 'list-group-item col-10';
newTweet.className = "row border border-dark mw-100";
newImg.src = data[id].images.sm;
newImg.className = 'col img-thumbnail img-fluid mw-100';
fullInfo.innerText = `${name}_${id} says...\n ${quote.content}`;
newTweet.style.width = "100%"
newImg.style.width = '1px';
///////append tweet/////
// fullInfo.appendChild(a);
//newTweet.appendChild(fullInfo)
newTweet.appendChild(newImg);
//fullInfo.appendChild(a);
newTweet.appendChild(fullInfo)
current = newTweet;
tweetDisplay.insertBefore(newTweet, tweetDisplay.children[0])
//tweetDisplay.appendChild(newTweet)
 console.log(fullInfo)


// newTweet.addEventListener('click', () => {
//     newTweet.style.cursor = 'pointer'
//     if (newTweet.style.opacity !== '0.5'){
//     newTweet.style.opacity = '0.5'}
//     else if (submit === true){
//         newTweet.style.opacity = '100'
//     }
//     statInput.value = name;
//     console.log('test')
// });

submitStat.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(statInput.value)
    newTweet.style.opacity = '100'
    if (statInput.value === ''){
        alert('Please select a tweet to view that user\'s stats.');
    } else if (statInput.value !== ''){
       
        if (statInput.value === name){
            statImg.src = data[id].images.sm;
            displayName.innerText = data[id].name
            statsDisplay.innerText = 
            `Intelligence: ${data[id].powerstats.intelligence}
            Power: ${data[id].powerstats.power}
            Speed: ${data[id].powerstats.speed}
            Strength: ${data[id].powerstats.strength}
            `;
            console.log(submit)
        }
    }

})
newTweet.style.cursor = 'pointer'

newTweet.addEventListener('click', () => {
    //newTweet.style.cursor = 'pointer'
    if (newTweet.style.opacity !== '0.5'){
    newTweet.style.opacity = '0.5'}
    statInput.value = name;
    console.log('test')
});
    }, 2500 * i)
}
// current.forEach(item => {
//     objArray.push(
//        data2[1])
//     });
//     console.log(objArray)

// submitStat.addEventListener('click', () => {
//     console.log('test')
//     if (statInput.value === ''){
//         alert('Please select a tweet to view that user\'s stats.')
//     } else if (statInput.value !== ''){

//     }
// })

newImg.addEventListener('click', () => {

console.log('tesy')
statsDisplay.innerText = current[1]
})
}
getNewTweet();

let getCrime = async() => {
    
    let raw = await fetch('https://api.fbi.gov/wanted/v1/list');
    let data = await raw.json();
    //console.log(data)
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

    //console.log(reward);
    console.log(accessData);

    
})

}


getCrime();
