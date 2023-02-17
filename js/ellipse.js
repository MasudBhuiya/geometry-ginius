document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseFieldOne = getelEmentValueById('ellipse-field-one')
    const ellipseFielTwo = getelEmentValueById('ellipse-field-two');
    const ellipseTotal = 3.1416 * ellipseFieldOne *  ellipseFielTwo;
console.log(ellipseTotal)
    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = ellipseTotal;
})