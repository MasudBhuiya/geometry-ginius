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

function setAlert(one, two,three){
    if(isNaN(one) || isNaN(two)){
        return alert('please enter a number')
    }
    else if(Math.sign(one) === -1 || Math.sign(two) === -1){
        return alert('please enter a positive number')
    }
    else{
    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = three;
    }
}