console.log("connected");
let btn = document.querySelector("#testBtn")
//var result = document.querySelector("#result");


btn.addEventListener("click", function(){
    let wordIn = document.querySelector("#word").value;
    let wordTest = [];
    for(let i = 0; i< wordIn.length; i++){
        wordTest.push(wordIn[i]);
    }
    let wordRev = "";
    for(let i =0; i<wordIn.length; i++)
    {
        wordRev += wordTest.pop();
        
    }
    console.log(wordRev)

    if(wordIn === wordRev){
        document.querySelector("#result").textContent = "Yesssssssssssss!!!";
    }
    else{
        document.querySelector("#result").textContent = "Noooooooooo";
    }
    
})