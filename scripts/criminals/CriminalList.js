import { Criminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        // criminals is an array of objects
        let criminals = useCriminals();
        // Now that you have the data, what component should be rendered?
        const criminalsContainer = document.querySelector(".criminal-list")

        let htmlBuilder = ""

        for(let i =0; i < criminals.length; i++){

            htmlBuilder += Criminal(criminals[i])

        }

        criminalsContainer.innerHTML = htmlBuilder



    })
}



document.querySelector("#criminals-nav-link").addEventListener("click", CriminalList)