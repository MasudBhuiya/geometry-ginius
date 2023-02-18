
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleFieldOne = getInputValueById('rectangle-field-one');
    const rectangleFieldTwo= getInputValueById('rectangle-field-two');
    const rectangleTotal = rectangleFieldOne * rectangleFieldTwo;

    setAlert(rectangleFieldOne, rectangleFieldTwo, rectangleTotal)

    // const areaCalculation = document.getElementById('area-calculation');
    

    // const name = document.getElementById('rectangle').innerText;
    // const total = rectangleTotal + 'cm²'
    // areaCalculationById( name, total, 0, areaCalculation);

    

    // areaCalculation.innerText = rectangleTotal;
})