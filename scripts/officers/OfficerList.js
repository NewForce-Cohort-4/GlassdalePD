import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { OfficerCard } from "./Officer.js"


export const OfficerList = () => {
    getOfficers().then(() => document.querySelector(".criminal-list").innerHTML = useOfficers().map(x => OfficerCard(x)).join(""))

}