export const Criminal = (obj, facilities) => {
  return `
    <section class="criminal">
      <h3 class="criminal__name">${obj.name}</h3>
      <p class="criminal__age">Age: ${obj.age}</p>
      <p class="criminal__conviction">Crime: ${obj.conviction}</p>
      <p class="criminal__term_start">Term start: ${new Date(obj.incarceration.start).toLocaleDateString('en-US')}</p>
      <p class="criminal__term_end">Term end: ${new Date(obj.incarceration.end).toLocaleDateString('en-US')}</p>
      <h4>Facilities</h4>
      <ul>${facilities.map(f => `<li>${f.facilityName}</li>`).join('')}</ul>
    </section>
  `
}