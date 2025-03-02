let score1=document.getElementById("score-1");
let score2=document.getElementById("score-2");

let count1=0;
let count2=0;

function add1one(){
  count1+=1;
  score1.textContent=count1;
}
function add2one(){
  count2+=1;
  score2.textContent=count2;
}

function add1two(){
   count1+=2;
   score1.textContent=count1;
}
function add2two(){
   count2+=2;;
   score2.textContent=count2;
}

function add1three(){
   count1+=3;;
   score1.textContent=count1;
}
function add2three(){
   count2+=3;;
   score2.textContent=count2;
}

function newgame(){
  count1=0;
  count2=0;
  score1.textContent=0;
  score2.textContent=0;
}