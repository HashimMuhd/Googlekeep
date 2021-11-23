let submit=document.querySelector(".submit");
let title=document.getElementById("text");
let desc=document.getElementById("desc");
console.log(title,desc);
let notesElem=document.querySelector(".notes")
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element =>{
        addNotes(element)
    })
}

submit.addEventListener("click", (e)=>{
        e.preventDefault();
        addNotes()
    })
function addNotes(obj) {
    let titleval=title.value;
    let descval=desc.value
    if(obj){
        titleval=obj.title;
        descval=obj.desc;
    }

    let card=document.createElement("div");
    card.classList.add("card");
    if(titleval){
        card.innerHTML=`
        <h3>${titleval}</h3>
        <p>${descval}</p>
        <button class="del">Delete</button>
        <button class="edit">Edit</button>`
        notesElem.appendChild(card);
        updateLs();
    }
    let clear=card.querySelector(".del");
    clear.addEventListener("click",()=>{
        card.remove();
        updateLs();
    })
    
}
function updateLs(){
   let card=document.querySelectorAll(".card");
   let arr=[];
   card.forEach(element =>{
       arr.push({
           title:element.children[0].innerText,
           desc:element.children[1].innerText,
       })
   });
   localStorage.setItem("notes",JSON.stringify(arr));
}
