
document.getElementById('btn-traingle').addEventListener('click', function(){
    
    const traingleFieldOne = getInputValueById('triangle-field-one');
    const traingleFieldTwo = getInputValueById('triangle-field-two');
    
    
    const traingleTotal = 0.5 * traingleFieldOne * traingleFieldTwo;

    setAlert(traingleFieldOne,traingleFieldTwo,traingleTotal );

})

function trytoadd(){
    const btnAdd = document.getElementById('btn-add').innerText;
    console.log(btnAdd)
}