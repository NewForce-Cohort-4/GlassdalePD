import {getNotes, useNotes} from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"



const render = (noteCollection, criminalCollection) => {
    const contentTarget = document.querySelector(".noteListContainer")
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return Note(note, relatedCriminal)


    }).join("")
}


export function NoteList(){


        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        // This is an element we added!

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop

        render(allTheNotes, allTheCriminals)
}