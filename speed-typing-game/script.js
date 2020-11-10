window.addEventListener('load',init)

let time=5;
let score=0;
let isPlaying;

const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words=['hello','bye','welcome','space','ocean','laughter'];

function init(){
    //load words from array
    showWords(words);
    //start matching on word input
    wordInput.addEventListener('input',startMatch);
    //call countdown every sec
    setInterval(countdown,1000);
    //check status of the game
    setInterval(checkStatus,50);
    
}

function startMatch(){
    if(matchWords()){
        
            isPlaying=true;
            time= 6;
            showWords(words);
            wordInput.value='';
            score++;
        }
        if(score===-1){
            scoreDisplay.innerHTML=0;
        }else{
            scoreDisplay.innerHTML=score;
        }
       
    
}

//match currentword to wordinput
function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML='Correct!';
        return true;
    }else{
        message.innerHTML=''
        return false;
    }
}

function showWords(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML=words[randIndex]
}

function countdown(){
    //make sure time is not runout
    if(time>0){
        //decrement 
        time--;

    }else if(time===0) {
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}

//check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game over!!!'
        score=-1;
    }
}