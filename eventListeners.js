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
function updateContent(){
    //declare an array for content
    let contentArray = []
    //fetch the input from user and divide it into set of substrings
    let textAreaContent = document.getElementById("textarea").value
    contentArray = textAreaContent.split("\n")

    //if array to small fill it with empty text
    while(contentArray.length < 25){
        contentArray.push("")
    }

    //fill the bingo slots with new content
    //TODO: ability to randomize order
    let bingoSlots = document.getElementsByClassName("slot")
    for(let i=0; i<bingoSlots.length; i++){
        bingoSlots[i].innerHTML = contentArray[i]
    }
}
