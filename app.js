swal("اضحك من قلبك", {
    buttons: false,
    timer: 2000,
  });
const button =document.getElementById("butt");
button.addEventListener("click", addJoke);
function addJoke(){
    let xhr= new XMLHttpRequest()
    console.log(xhr)
    xhr.open('GET','index.json',true)
    xhr.onload=function(){
        if (xhr.status===200){
            console.log("this request is status"+xhr.status)
            const cont=document.getElementById("container")
            // cont.innerHTML=this.responseText
            let joke=JSON.parse(this.responseText)
            joke.forEach(joke =>{
                console.log(joke)
             let newDiv=document.createElement("div")
             let jokeCont=`<span id=num>${joke.id}</span><h3 id=title>${joke.title}</h3><h4 id=text>${joke.text}</h4> `
            console.log(jokeCont)
            newDiv.innerHTML=jokeCont
            cont.appendChild(newDiv)
            
         } 

         )
             
         
        //  console.log(joke)
         

        }
        
    }
    
    xhr.send();
}
