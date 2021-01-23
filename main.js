let Images = document.querySelectorAll(".image");
let display = document.getElementById('counter');
let scoredisplay = document.getElementById('score');
let helpbtn = document.getElementById("help");
let aboutinfo = document.getElementById("about");
let win = document.querySelector('.stop');

helpbtn.onclick = function (){
    aboutinfo.classList.toggle("hidden");
    //console.log('about touched');
}
document.getElementById('next').onclick = ()=>{
    win.classList.add('hidden');
    Images.forEach((ele)=> {
        ele.src = "Images/top.png";
    });
}

Images.forEach((ev)=>{
ev.onclick = play
})

let counter = 0;
let moves = 15;
let score = 0;

display.innerText = moves;
 let imgsrc = "Images/cover.png";
 let imgsrc1 = "Images/burgur.png";
 let imgsrc2 = "Images/coffee.png";
 let imgsrc3 ="Images/donut.png";
 let imgsrc4 = "Images/ic-cream.png";
 let imgsrc5 = "Images/pizza-slice.png";
 let topi = "Images/top.png";
 let tabo = "Images/tabo.png"


const btnStartOver = document.getElementById('btnStartOVer');

btnStartOver.onclick = ()=>{
    document.location.reload()
}

function play(event){

    let array = [imgsrc, imgsrc1, imgsrc2, imgsrc3, imgsrc4, imgsrc5, tabo];

    let ran = Math.floor(Math.random()*array.length);

   
        console.log(event.target.src)
        if (event.target.getAttribute('src') === tabo){
            let pop = document.getElementById('popbonus').innerText = "Bonus 5 Moves  From Mugtaba!! " ;
            moves+=5
        };
        if (event.target.getAttribute('src') === imgsrc1) return ;

        event.target.src = array[ran]
         moves--
         display.innerText = moves;

        if (event.target.getAttribute('src')=== imgsrc1) {counter++ ; console.log(counter)};

    
   playing()
  
   chekWin()

}




function chekWin (){
    
    let line1 = Images[0].src === Images[1].src && Images[2].src === Images[0].src && Images[0].getAttribute('src') !== topi ; 

    let line2 = Images[3].src === Images[4].src && Images[5].src === Images[3].src && Images[3].getAttribute('src') !== topi;

    let line3 = Images[6].src === Images[7].src && Images[8].src === Images[6].src && Images[6].getAttribute('src') !== topi ;

    let colum1 = Images[0].src === Images[3].src && Images[6].src === Images[0].src && Images[0].getAttribute('src') !== topi;

    let colum2 = Images[1].src === Images[4].src && Images[7].src === Images[1].src && Images[1].getAttribute('src') !== topi ;

    let colum3 = Images[2].src === Images[5].src && Images[8].src === Images[2].src && Images[2].getAttribute('src') !== topi ;

    let crossleft = Images[0].src === Images[4].src && Images[8].src === Images[0].src && Images[0].getAttribute('src') !== topi ;

    let crossright = Images[2].src === Images[4].src && Images[6].src === Images[2].src && Images[2].getAttribute('src') !== topi;

    if(line1 || line2 || line3 || colum1 || colum2 || colum3 || crossleft || crossright) { 
        document.querySelector('.stop').classList.remove('hidden')
        

    //alert('You WON');
    setTimeout(
        ()=>{

win.classList.remove('hidden');

    

    moves = 15;
    score+=5
    scoredisplay.innerText = score;
    display.innerText = moves;
    counter = 0;
        }, 700)
    
    
    
}
}

function playing(){
    
    if (counter >= 4) {
        setTimeout(
            ()=>{
                alert('You lost colse and refresh 3 burgurs'); moves = 15; display.innerText = moves; 
            }
        , 1000)  } else if (moves === 0) {alert('Out of Moves'); score -= 5 ; 
    scoredisplay.innerText = score; moves = 5; 
    display.innerText = moves;} else {return}; 
    Images.forEach((ele)=> {
        ele.src = "Images/top.png";
    })
    counter = 0;
};


document.getElementById('sound').play(); 

