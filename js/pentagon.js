document.getElementById('btn-pentagon').addEventListener('click',function(){
    const pentagonFieldOne = getelEmentValueById('pentagon-field-one')
    const pentagonFielTwo = getelEmentValueById('pentagon-field-two');
    const pentagonTotal = 0.5 * pentagonFieldOne *  pentagonFielTwo;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = pentagonTotal;
})