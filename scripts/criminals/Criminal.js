
export const  Criminal = (criminalObject) => {
    return `<section class="card-container">
    <h3>${criminalObject.name}</h3>
    <p class="criminal-age">Age: ${criminalObject.age}</p>
    <p class="crime">${criminalObject.conviction}</p>
    <p class="term-start">Term-Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="term-end">Term-End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
</section>`
}