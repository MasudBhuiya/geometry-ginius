
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusFieldOne = getelEmentValueById('rhombus-field-one')
    const rhombusFielTwo = getelEmentValueById('rhombus-field-two');
    const rhombusTotal = 0.5 * rhombusFieldOne * rhombusFielTwo;

    const areaCalculation = document.getElementById('area-calculation');
    
    
    const name = document.getElementById('rhombus').innerText;
    const total = rhombusTotal + 'cm²'
    areaCalculationById( name, total, 0, areaCalculation)
})