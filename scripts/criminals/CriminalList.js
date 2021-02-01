import { Criminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

export const CriminalList = (crimeThatWasChosen) => {

    getCriminals().then(() => {
        // criminals is an array of objects
        let criminalsToPrint = useCriminals();


         // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
      if(crimeThatWasChosen){


       criminalsToPrint = criminalsToPrint.filter(currentCriminal => {
            return currentCriminal.conviction === crimeThatWasChosen
        })



        // criminalsToPrint = criminalsThatCommittedSpecificCrime

      }
        const criminalsContainer = document.querySelector(".criminal-list")

        let htmlBuilder = ""

        for(let i =0; i < criminalsToPrint.length; i++){

            htmlBuilder += Criminal(criminalsToPrint[i])

        }

        criminalsContainer.innerHTML = htmlBuilder

    })
}



document.querySelector("#criminals-nav-link").addEventListener("click", () => {CriminalList()})


// export const CriminalList = (convictionFilter) => {
//     let criminalListContainer = document.querySelector(".criminal-list");

//     criminalListContainer.innerHTML = ""

//     getCriminals().then(() => {
//       let criminals = useCriminals();

//       // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
//       if(convictionFilter){

//         criminals = // write your filter here

//       }

//       criminals.forEach((singleCriminal) => {
//         criminalListContainer.innerHTML += Criminal(singleCriminal);
//       });
//     });
//   };