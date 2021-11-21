let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title")
let addTxt = document.getElementById("note-text")



addBtn.addEventListener("click", (e) =>{
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("please add note title and details");
    }

    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addTxt.value = "";

    showNotes();
} )


//show notes on page
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div id="note">
        <h1 class="note-title">${element.title}</h1>
        <p class="note-text">${element.title}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">Delete</button>
        <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit</button>
    </div>
        `;
    });


    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = "Not Notes Yet! Add a note using the above the form above"
    }
}

showNotes();