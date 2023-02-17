document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleFieldOne = getInputValueById('rectangle-field-one');
    const rectangleFieldTwo= getInputValueById('rectangle-field-two');
    const rectangleTotal = rectangleFieldOne * rectangleFieldTwo;


    setAlert(rectangleFieldOne, rectangleFieldTwo, rectangleTotal)

    // areaCalculation.innerText = rectangleTotal;
})