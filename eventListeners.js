//change the scale of visualization
let scaleRange = document.getElementById("vis_scale")
scaleRange.addEventListener('input', () => {
    let scale = scaleRange.value
    document.getElementById("visualisation").style.transform = 'scale('+scale+')'
})

//update the bingo content from user input
let textArea = document.getElementById("textarea")
textArea.addEventListener('input',()=>{
    updateContent()
})
