
let submit=document.querySelector(".submit");
let title=document.getElementById("text");
let desc=document.getElementById("desc");
console.log(title,desc);
let notesElem=document.querySelector(".notes")

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
        <h1>${titleval}</h1>
          <p>${descval}</p>
          <button class="del">Delete</button>`
          notesElem.appendChild(card);
          updateLs
    }
    let clear=card.querySelector(".del");
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
