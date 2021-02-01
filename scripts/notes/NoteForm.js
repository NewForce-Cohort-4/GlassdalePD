import {saveNote} from "./NoteDataProvider.js"
import {NoteList} from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = `

        <input type="date" id="note-date" />
        <input type="text" placeholder="Add some text here..." id="note-text" />
        <input type="text" placeholder="Suspect" id="note-suspect" />
        <button id="saveNote">Save Note</button>
    `
}

const eventHub = document.querySelector(".noteFormContainer")




// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveNote") {
        console.log("You clicked the save note button")
        // Make a new object representation of a note
        const newNote = {
            text: document.querySelector("#note-text").value,
            suspect: document.querySelector("#note-suspect").value,
            date: document.querySelector("#note-date").value
        }
        console.log("this is new note", newNote)

        // // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})
