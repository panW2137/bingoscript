//adds event listener to the scale range (range input that controls visualization scale)
var scaleRange = document.getElementById("vis_scale")
//changes the scale visualizetion
//(WHY JAVASCRIPT, WHY MUST I USE THIS RETARDET SYNTAX INSTEAD OF THE FUCKIN FUNCTION)
scaleRange.addEventListener('input', () => {
    let scale = scaleRange.value
    document.getElementById("visualisation").style.transform = 'scale('+scale+')'
})