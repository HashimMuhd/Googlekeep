
let submit=document.querySelector(".submit");
let title=document.getElementById("note-title");
let desc=document.getElementById("note-text");
console.log(title,desc);
let notesElem=document.querySelector("#note")

submit.addEventListener("click", function (e) {
        e.preventDefault();
        addNotes();
    })
function addNotes() {
    let titleval=title.value;
    let descval=desc.value;
    let card=document.createElement("div");
    card.classList.add("card");
    if(titleval){
        card.innerHTML=`
        <h1 class="note-title">${titleval}</h1>
          <p class="note-text">${descval}</p>
          <button class="note-btn">Delete</button>`
          notesElem.appendChild(card);
          updateLs();
    }
    let clear=card.querySelector(".note-btn");
    clear.addEventListener("click",()=>{
        card.remove();
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
    
}
// showNotes();
