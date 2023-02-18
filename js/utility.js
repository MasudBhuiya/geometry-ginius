function getInputValueById(InputId){
    const inputField = document.getElementById(InputId);
    const getInputFieldString = inputField.value ;
    const getInputField = parseInt(getInputFieldString);
    inputField.value = '';
    
    return getInputField;
}

function getelEmentValueById(elementId){
    const textElement = document.getElementById(elementId);
    const getTextElementValueString = textElement.innerText;
    const getTextElementValue = parseInt(getTextElementValueString);
    return getTextElementValue;
}

function setAlert(one, two, three){
    if(isNaN(one) || isNaN(two)){
        return alert('please enter a number')
    }
    else if(Math.sign(one) === -1 || Math.sign(two) === -1){
        return alert('please enter a positive number')
    }
    else{
        const areaCalculation = document.getElementById('area-calculation');
        
        const name = document.getElementById('triangle').innerText;
        const total = three + 'cm²'
        areaCalculationById( name, total, 0, areaCalculation)
    }
}

let num = 0;

function areaCalculationById(num2, num3, num4, name){
    let button = 'Convert to m²'
    

    let no =num + 1;
    num = no;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${num}</td>
    <td >${num2}</td>
    <td>${num3}</td>
    <td>${button}</td>
    `
    name.appendChild(tr);
}
    