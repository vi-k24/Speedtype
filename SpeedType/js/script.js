window.addEventListener("load", mulai)

//Level
const levels = {
    easy : 10,
    medium : 8,
    hard : 5,
    expert : 3
}

//Change Level
const currentLevel = levels.medium;
let time = currentLevel+1;
let score = 0;
let isPlaying;

//DoomElement
const detik = document.querySelector("#seconds")
const currentWord = document.querySelector("#current-word")
const inputText = document.querySelector("#word-input")
const timeDisplay = document.querySelector("#time")
const scoreDisplay = document.querySelector("#score")
const messageDisplay = document.querySelector("#message")
let tombol = document.getElementById("button")

const words = [
    "time",
    "red",
    "unlimited",
    "dark",
    "incognito",
    "dagger",
    "edition",
    "art",
    "suffle",
    "rainbow",
    "temple",
    "macaron"
]

//Mulai Bermain
function mulai(){
    //showNumberOfSeconds
    detik.innerHTML = currentLevel;
    //loadWordFromArray
    showWord(words);
    //Mulai mencocokan kata yan diinput dengan yang diacak
    inputText.addEventListener("input", startMatch);
    //Call countdown every second
    setInterval(countDown, 1000)
    //Check Game Status
    setInterval(checkStatus,100)

};

//Show Random Word
function showWord(kata){
    const ranIndex = Math.floor(Math.random()*kata.length);
    currentWord.innerHTML = words[ranIndex];
};

function matchWord(){
    if(inputText.value===currentWord.innerHTML){
        messageDisplay.innerHTML = "Correct";
        return true;
    }else{
        messageDisplay.innerHTML = ""
        return false;
    }
};

function startMatch(){
    if(matchWord()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        inputText.value="";
        score++ 
    }
    // if score is -1, display 0
    if(score===-1){
        scoreDisplay.innerHTML = 0
    }else {
        scoreDisplay.innerHTML= score;
    }
};

//Countdaown Timer
function countDown(){
    if(time>0){
        time--
    }else if(time===0){
        isPlaying=false;
    }

    timeDisplay.innerHTML=time
}

//Check Game Status
function checkStatus(){
    if(!isPlaying && time===0){
        messageDisplay.innerHTML= "Game Over"
        tombol.style="display:show;"
        score= -1
        
    }
}

        
tombol.addEventListener('click',mulaiLagi)
function mulaiLagi(){
    window.location.reload()
}

