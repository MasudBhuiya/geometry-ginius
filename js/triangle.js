function getInputValueById(InputId){
const inputField = document.getElementById(InputId);
const getInputFieldString = inputField.value ;
const getInputField = parseInt(getInputFieldString);
inputField.value = '';

return getInputField;
}

document.getElementById('btn-traingle').addEventListener('click', function(){
    const traingleFieldOne = getInputValueById('triangle-field-one');
    const traingleFieldTwo = getInputValueById('triangle-field-two');
    const traingleTotal = 0.5 * traingleFieldOne * traingleFieldTwo;
    console.log(traingleTotal);
    
    const areaCalculation = document.getElementById('area-calculation');
    // const h2 = document.createElement('h2');
    // h2.innerText = 1;
    // areaCalculation.appendChild(h2)
    // const h1 = document.createElement('h1');
    // h1.innerText = traingleTotal,cm;
    // areaCalculation.appendChild(h1)
    // const button = document.createElement('button');
    // h1.innerText = 1;
    
    areaCalculation.appendChild(button);

    
})