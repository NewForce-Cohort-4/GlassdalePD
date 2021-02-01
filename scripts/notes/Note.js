// Function that builts and returns an HTML component representing a single note
// (Remember that fat arrow functions without curly braces automatically return?)
export const Note = noteObject => `
    <div class="note-card">
        <p>${noteObject.text}</p>
        <p>Date: ${noteObject.date}</p>
        <p>Suspect: ${noteObject.suspect}</p>
    </div>

`