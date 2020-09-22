
const button =document.getElementById("butt");
const cont=document.getElementById("container")
button.addEventListener("click", addJoke);


function addJoke(){
    console.log("the button is clicked")
    let xhr= new XMLHttpRequest()
    console.log(xhr)
    xhr.open('GET','index.json')
    xhr.onload= function(){

        if (xhr.status === 200){
            console.log("this request is status" + xhr.status)
          
            let joke=JSON.parse(this.responseText)
            
            joke.filter(joke =>{
                
                if (joke.id === getRndInteger(1, 52)){
                    let jokee = joke;
                    console.log(jokee)
                    let jokeCont=document.createElement("div");
                   jokeCont.innerHTML=`<h4 id="query">${joke.title}</h4><h4 id="answer">${joke.text}</h4>`
                   cont.appendChild(jokeCont)
                }else {
                    console.log("no jokes for you today")
                }
                
                
         })
             
         
        
         

        }
        
    }
    
    xhr.send();
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }