
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramFieldOne = getelEmentValueById('parallelogram-one');
    const parallelogramFieldTwo = getelEmentValueById('parallelogram-two');
    const parallelogramTotal = parallelogramFieldOne * parallelogramFieldTwo;

    const areaCalculation = document.getElementById('area-calculation');
    // areaCalculation.innerText = parallelogramTotal;

    
    const name = document.getElementById('parallelogram').innerText;
    const total = parallelogramTotal + 'cm²'
    areaCalculationById( name, total, 0, areaCalculation)

    
})