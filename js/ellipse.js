
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseFieldOne = getelEmentValueById('ellipse-field-one')
    const ellipseFielTwo = getelEmentValueById('ellipse-field-two');
    const ellipseTotal = 3.1416 * ellipseFieldOne *  ellipseFielTwo;

    const areaCalculation = document.getElementById('area-calculation');
    
    
    const name = document.getElementById('ellipse').innerText;
    const total = ellipseTotal + 'cm²'
    areaCalculationById( name, total, 0, areaCalculation)
})