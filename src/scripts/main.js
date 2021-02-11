import { OfficerList } from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import {} from "./associates/AssociateList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getCriminals } from "./criminals/CriminalDataProvider.js";
import { getNotes} from "./notes/NoteDataProvider.js"
console.log("Welcome to the console");
getCriminals()
.then(getNotes)
.then(NoteList)
.then(NoteForm)
ConvictionSelect();
