const sub = document.getElementById("checkButton");
console.log(sub)
var rand = Math.round(Math.random() * 100);
var live= 2 ;
var text;
const livee = document.getElementById("attemptCount");
const message1 = document.getElementById("message");
console.log(rand)
checkButton.onclick =()=>{
    var inp = document.getElementById("textBox").value;
    live--;
    if(inp==rand)
    {
        location.href="./win.html";
    }
    else if(inp>rand)
    {
        text=`You Have ${live} Your guess is too high`;

    }
    else if(live==0)
    {
        location.href="./lose.html";
    }
    else if(inp<rand)
    {
        text=`You Have ${live} Your guess is too low`;

    }
    console.log(text);
    console.log(live);
    message1.style.display="inherit";
    message1.innerHTML= text;
    livee.innerHTML=live;

}