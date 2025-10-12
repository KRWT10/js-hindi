const form =document.querySelector('form')
// this usecase will give you empty 

 form.addEventListener('submit', function(event){
    event.preventDefault();

   const Height = parseInt(document.querySelector('#Height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `please give a valid height ${Height}`;
}else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML =  `please give a valid weight ${weight}`;
}
else {
    const bmi = (weight / ((Height * Height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi}</span>`
}
 }); 