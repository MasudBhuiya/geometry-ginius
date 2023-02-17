document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleFieldOne = getInputValueById('rectangle-field-one');
    const rectangleFieldTwo= getInputValueById('rectangle-field-two');
    const rectangleTotal = rectangleFieldOne * rectangleFieldTwo;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = rectangleTotal;



    // areaCalculation.innerText = rectangleTotal;
})