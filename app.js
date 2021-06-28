
var input_txt = document.querySelector("#io");//input



var btn = document.querySelector(".btn");//click button
btn.addEventListener("click", clickhandler)

var output = document.querySelector(".ans");// output 

//  var serverurl= "https://api.funtranslations.com/translate/sith.json";
// var serverurl="	https://api.funtranslations.com/translate/pirate.json";
var serverurl="https://api.funtranslations.com/translate/minion.json";


function clickhandler()
{
    // console.log("clickeed d d");
    // console.log(input_txt);
    // console.log(input_txt.value);
    console.log("hit button");
    var inputText= input_txt.value; //taking input
    // console.log(inputText);
    
    //calling server for processing 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        output.innerText= translatedText;
        
    } )
    .catch(errorHandler)
    
    // output.innerText= input_txt.value +"hii i am rahul ";
}


function getTranslationURL(text){
    // return serverurl+"?"+"text"+text
    return `${serverurl}?text=${text}`
}


    
function errorHandler(error){
    console.log("error occur ",error);
    alert("error in server , please try after some time ");
}



