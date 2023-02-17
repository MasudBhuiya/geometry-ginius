function getInputValueById(InputId){
    const inputField = document.getElementById(InputId);
    const getInputFieldString = inputField.value ;
    const getInputField = parseInt(getInputFieldString);
    inputField.value = '';
    
    return getInputField;
}

function getelementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const getTextElementValueString = textElement.innerText;
    const getTextElementValue = parseInt(getTextElementValueString)
}